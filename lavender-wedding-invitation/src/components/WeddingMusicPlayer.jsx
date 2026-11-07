import React, {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { Music, Play, Pause, Volume2, VolumeX } from 'lucide-react';

// Exact existing audio file inside public/audio/
const AUDIO_FILENAME = 'WhatsApp Audio 2026-11-01 at 4.32.39 PM.mpeg';
// Production-compatible URL-encoded path for Vite public folder
const AUDIO_SRC = `${(import.meta.env.BASE_URL || '/').replace(/\/$/, '')}/audio/${encodeURIComponent(AUDIO_FILENAME)}`;
const FALLBACK_AUDIO_SRC = '/audio/WhatsApp Audio 2026-11-01 at 4.32.39 PM.mpeg';
const TARGET_VOLUME = 0.75;

/**
 * Persistent Wedding Background Music Player & Floating Controller
 * Plays the romantic Tamil BGM seamlessly across intro and website sections.
 */
const WeddingMusicPlayer = forwardRef(function WeddingMusicPlayer(props, ref) {
  const audioRef = useRef(null);
  const fadeFrameRef = useRef(null);
  const isStartingRef = useRef(false);
  const retryAttemptedRef = useRef(false);
  const isPlayingRef = useRef(false);
  const hasStartedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);

  // Initialize single persistent Audio instance
  useEffect(() => {
    const audio = new Audio(AUDIO_SRC);
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
    const handleError = (e) => {
      const err = audio.error;
      const errorMap = {
        1: 'MEDIA_ERR_ABORTED (Aborted by user)',
        2: 'MEDIA_ERR_NETWORK (Network error downloading audio)',
        3: 'MEDIA_ERR_DECODE (Decoding error)',
        4: 'MEDIA_ERR_SRC_NOT_SUPPORTED (Format or MIME type not supported / 404)',
      };
      console.error(
        `[WeddingMusicPlayer] Audio loading error (Code ${err?.code || 'unknown'}):`,
        errorMap[err?.code] || err?.message || e,
        '\nAttempted Source:',
        audio.currentSrc || audio.src
      );

      // Attempt fallback if encoded path fails in certain environments
      if (!retryAttemptedRef.current && audio.src !== FALLBACK_AUDIO_SRC) {
        retryAttemptedRef.current = true;
        console.warn('[WeddingMusicPlayer] Retrying audio playback with fallback path:', FALLBACK_AUDIO_SRC);
        audio.src = FALLBACK_AUDIO_SRC;
        audio.load();
        if (isPlayingRef.current || hasStartedRef.current) {
          audio.play().catch((playErr) => {
            console.error('[WeddingMusicPlayer] Fallback play error:', playErr);
          });
        }
        return;
      }

      setErrorOccurred(true);
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
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

      // Prevent negative elapsed time from initial rAF clock differences
      const elapsed = Math.max(0, now - startTime);
      const progress = Math.max(0, Math.min(1, elapsed / durationMs));

      // Ease out cubic progress
      const eased = 1 - Math.pow(1 - progress, 3);
      const calculatedVolume = eased * targetVol;

      // Ensure audio.volume is strictly clamped between 0 and 1
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
  };

  // Start Audio with Smooth Fade-In (Triggered on first user interaction)
  const startAudio = () => {
    if (!audioRef.current || hasStartedRef.current || isStartingRef.current) return;
    const audio = audioRef.current;
    isStartingRef.current = true;

    audio
      .play()
      .then(() => {
        hasStartedRef.current = true;
        isPlayingRef.current = true;
        setHasStarted(true);
        setIsPlaying(true);
        fadeInVolume(TARGET_VOLUME, 2200);
      })
      .catch((err) => {
        console.warn('[WeddingMusicPlayer] Playback deferred pending user interaction:', err);
        isStartingRef.current = false;
      });
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
          // If unpausing, gently restore volume
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

  // Expose imperative start method to parent component
  useImperativeHandle(ref, () => ({
    startAudio,
    togglePlay,
    toggleMute,
    isPlaying,
    isMuted,
  }));

  // Do not show widget until playback has started or is ready
  // Return null so no floating music control UI is displayed, while keeping full audio functionality active
  return null;
});

export default WeddingMusicPlayer;
