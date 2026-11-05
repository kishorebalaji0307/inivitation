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
  if (!hasStarted && !isPlaying) return null;
  if (errorOccurred) return null;

  return (
    <aside
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 select-none pointer-events-auto"
      aria-label="Wedding Background Music Player"
    >
      <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full bg-[#271038]/94 border border-[#C5A059]/80 text-[#FAF6FD] shadow-[0_8px_30px_rgba(25,8,38,0.7)] backdrop-blur-md transition-all duration-300 hover:border-[#E5C97F]">
        {/* Animated Music Note / Visualizer */}
        <div className="flex items-center gap-1.5 pr-1 border-r border-[#C5A059]/40">
          <Music
            className={`w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#E5C97F] ${
              isPlaying ? 'animate-bounce' : 'opacity-70'
            }`}
            style={{ animationDuration: '2s' }}
          />

          {/* Equalizer Bouncing Bars */}
          <div className="flex items-end gap-0.5 h-3.5 sm:h-4 w-3.5">
            <span
              className={`w-0.5 rounded-full bg-[#E5C97F] transition-all ${
                isPlaying ? 'animate-pulse h-3.5' : 'h-1 opacity-50'
              }`}
              style={{ animationDuration: '0.6s' }}
            />
            <span
              className={`w-0.5 rounded-full bg-[#E5C97F] transition-all ${
                isPlaying ? 'animate-pulse h-2' : 'h-1.5 opacity-50'
              }`}
              style={{ animationDuration: '0.9s' }}
            />
            <span
              className={`w-0.5 rounded-full bg-[#E5C97F] transition-all ${
                isPlaying ? 'animate-pulse h-3' : 'h-1 opacity-50'
              }`}
              style={{ animationDuration: '0.75s' }}
            />
          </div>
        </div>

        {/* Track Label */}
        <span
          className="hidden md:inline-block text-xs font-serif text-[#F3E1B6] tracking-wider font-semibold whitespace-nowrap"
          style={{ fontFamily: "'Cinzel', 'Marcellus', serif" }}
        >
          Wedding Melody
        </span>

        {/* Play / Pause Toggle Button */}
        <button
          type="button"
          onClick={togglePlay}
          className="p-1.5 sm:p-2 min-w-[34px] min-h-[34px] flex items-center justify-center rounded-full hover:bg-[#C5A059]/25 active:scale-95 text-[#FAF6FD] hover:text-[#F3E1B6] transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
          aria-label={isPlaying ? 'Pause background music' : 'Resume background music'}
          title={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            <Pause className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-current" />
          ) : (
            <Play className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-current ml-0.5" />
          )}
        </button>

        {/* Mute / Unmute Toggle Button */}
        <button
          type="button"
          onClick={toggleMute}
          className="p-1.5 sm:p-2 min-w-[34px] min-h-[34px] flex items-center justify-center rounded-full hover:bg-[#C5A059]/25 active:scale-95 text-[#FAF6FD] hover:text-[#F3E1B6] transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
          aria-label={isMuted ? 'Unmute music' : 'Mute music'}
          title={isMuted ? 'Unmute music' : 'Mute music'}
        >
          {isMuted ? (
            <VolumeX className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#FDA4AF]" />
          ) : (
            <Volume2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#F3E1B6]" />
          )}
        </button>
      </div>
    </aside>
  );
});

export default WeddingMusicPlayer;
