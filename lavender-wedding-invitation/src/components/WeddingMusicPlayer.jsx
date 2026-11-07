import React, {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from 'react';

// Exact existing audio file preserved in public/audio/
const ORIGINAL_FILENAME = 'WhatsApp Audio 2026-11-01 at 4.32.39 PM.mpeg';

// Base URL helper to support root or subpath deployments
const BASE_PATH = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

// Candidate audio sources ordered by production reliability:
// 1. Standard lowercase URL-safe MP3 (resolves CDN MIME and path issues on Vercel)
// 2. Standard lowercase MPEG
// 3. Encoded original filename with base URL
// 4. Absolute root fallbacks
const AUDIO_SOURCES = [
  `${BASE_PATH}/audio/wedding-bgm.mp3`,
  `${BASE_PATH}/audio/wedding-bgm.mpeg`,
  `${BASE_PATH}/audio/${encodeURIComponent(ORIGINAL_FILENAME)}`,
  '/audio/wedding-bgm.mp3',
  '/audio/wedding-bgm.mpeg',
  `/audio/${ORIGINAL_FILENAME}`,
];

const TARGET_VOLUME = 0.75;

/**
 * Persistent Wedding Background Music Player
 * Plays the romantic Tamil BGM seamlessly across intro and website sections.
 */
const WeddingMusicPlayer = forwardRef(function WeddingMusicPlayer(props, ref) {
  const audioRef = useRef(null);
  const fadeFrameRef = useRef(null);
  const isStartingRef = useRef(false);
  const isPlayingRef = useRef(false);
  const hasStartedRef = useRef(false);
  const sourceIndexRef = useRef(0);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Initialize single persistent Audio instance
  useEffect(() => {
    sourceIndexRef.current = 0;
    const initialSource = AUDIO_SOURCES[0];
    const audio = new Audio(initialSource);
    audio.loop = true;
    audio.preload = 'auto';
    audioRef.current = audio;

    const handlePlay = () => {
      isPlayingRef.current = true;
      setIsPlaying(true);
    };

    const handlePause = () => {
      isPlayingRef.current = false;
      setIsPlaying(false);
    };

    // Seamless loop fallback if browser loop property doesn't loop
    const handleEnded = () => {
      if (audioRef.current && (isPlayingRef.current || hasStartedRef.current)) {
        try {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(() => {});
        } catch {}
      }
    };

    const handleError = (e) => {
      const err = audio.error;
      const errorMap = {
        1: 'MEDIA_ERR_ABORTED (Aborted by user)',
        2: 'MEDIA_ERR_NETWORK (Network error downloading audio)',
        3: 'MEDIA_ERR_DECODE (Decoding error)',
        4: 'MEDIA_ERR_SRC_NOT_SUPPORTED (Format or MIME type not supported / 404)',
      };

      console.warn(
        `[WeddingMusicPlayer] Source error (Code ${err?.code || 'unknown'}):`,
        errorMap[err?.code] || err?.message || e,
        'Attempted:',
        audio.currentSrc || audio.src
      );

      // Attempt next fallback source candidate if available
      if (sourceIndexRef.current < AUDIO_SOURCES.length - 1) {
        sourceIndexRef.current += 1;
        const nextSrc = AUDIO_SOURCES[sourceIndexRef.current];
        console.info('[WeddingMusicPlayer] Switching to fallback source:', nextSrc);
        audio.src = nextSrc;
        audio.load();

        if (isPlayingRef.current || hasStartedRef.current || isStartingRef.current) {
          audio.play().catch((playErr) => {
            console.warn('[WeddingMusicPlayer] Fallback play error:', playErr);
          });
        }
      }
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      if (fadeFrameRef.current) cancelAnimationFrame(fadeFrameRef.current);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // Smooth Volume Fade-In
  const fadeInVolume = (targetVol = TARGET_VOLUME, durationMs = 2200) => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    if (fadeFrameRef.current) cancelAnimationFrame(fadeFrameRef.current);

    try {
      audio.volume = 0;
    } catch {
      // Ignored on platforms like iOS Safari where volume is read-only
    }

    let startTime = null;

    const animateFade = (now) => {
      if (!audioRef.current || audio.paused) return;
      if (startTime === null) startTime = now;

      const elapsed = Math.max(0, now - startTime);
      const progress = Math.max(0, Math.min(1, elapsed / durationMs));

      // Ease out cubic progress
      const eased = 1 - Math.pow(1 - progress, 3);
      const calculatedVolume = eased * targetVol;

      try {
        audio.volume = Math.max(0, Math.min(1, calculatedVolume));
      } catch {
        // Ignored on platforms like iOS Safari where volume is read-only
      }

      if (progress < 1) {
        fadeFrameRef.current = requestAnimationFrame(animateFade);
      }
    };

    fadeFrameRef.current = requestAnimationFrame(animateFade);

    // Safeguard timeout: ensure volume reaches target even if rAF is backgrounded
    setTimeout(() => {
      if (audioRef.current && !audioRef.current.paused) {
        try {
          if (audioRef.current.volume < targetVol * 0.9) {
            audioRef.current.volume = targetVol;
          }
        } catch {}
      }
    }, durationMs + 250);
  };

  // Start Audio with Smooth Fade-In (Triggered on visitor interaction)
  const startAudio = () => {
    if (!audioRef.current || hasStartedRef.current) return;
    const audio = audioRef.current;
    isStartingRef.current = true;

    // Reset and reload if previous preload encountered error
    if (audio.error) {
      sourceIndexRef.current = 0;
      audio.src = AUDIO_SOURCES[0];
      audio.load();
    }

    const triggerPlay = () => {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            hasStartedRef.current = true;
            isPlayingRef.current = true;
            isStartingRef.current = false;
            setHasStarted(true);
            setIsPlaying(true);
            fadeInVolume(TARGET_VOLUME, 2200);
          })
          .catch((err) => {
            console.warn('[WeddingMusicPlayer] Playback deferred or restricted by browser policy:', err);
            isStartingRef.current = false;

            // In case of browser autoplay lock, register a one-time document unlock handler
            const unlockHandler = () => {
              if (audioRef.current && !hasStartedRef.current) {
                audioRef.current
                  .play()
                  .then(() => {
                    hasStartedRef.current = true;
                    isPlayingRef.current = true;
                    setHasStarted(true);
                    setIsPlaying(true);
                    fadeInVolume(TARGET_VOLUME, 2200);
                  })
                  .catch(() => {});
              }
            };

            ['pointerdown', 'touchstart', 'click'].forEach((evt) => {
              window.addEventListener(evt, unlockHandler, { once: true, passive: true });
            });
          });
      }
    };

    triggerPlay();
  };

  // Toggle Play / Pause (Resumes from exact current timestamp without restarting)
  const togglePlay = () => {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    if (audio.paused) {
      audio
        .play()
        .then(() => {
          isPlayingRef.current = true;
          hasStartedRef.current = true;
          setIsPlaying(true);
          setHasStarted(true);
          if (audio.volume === 0) {
            fadeInVolume(isMuted ? 0 : TARGET_VOLUME, 1000);
          }
        })
        .catch((err) => console.warn('[WeddingMusicPlayer] Could not resume audio:', err));
    } else {
      audio.pause();
      isPlayingRef.current = false;
      setIsPlaying(false);
    }
  };

  // Toggle Mute / Unmute
  const toggleMute = () => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    const newMuted = !isMuted;
    audio.muted = newMuted;
    setIsMuted(newMuted);
  };

  // Expose imperative methods to parent component
  useImperativeHandle(ref, () => ({
    startAudio,
    togglePlay,
    toggleMute,
    isPlaying,
    isMuted,
  }));

  // Floating controls remain removed per user requirement while keeping full audio playback active
  return null;
});

export default WeddingMusicPlayer;
