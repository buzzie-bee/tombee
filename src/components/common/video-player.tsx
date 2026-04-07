'use client';

import { useEffect, useRef } from 'react';
import type { MediaPlayerClass } from 'dashjs';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

export function VideoPlayer({ src, poster, className }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<MediaPlayerClass | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    let destroyed = false;

    import('dashjs').then(({ MediaPlayer }) => {
      if (destroyed || !videoRef.current) return;
      const player = MediaPlayer().create();
      player.initialize(videoRef.current, src, false);
      playerRef.current = player;
    });

    return () => {
      destroyed = true;
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      controls
      poster={poster}
      className={className ?? 'my-6 w-full rounded-lg'}
    />
  );
}
