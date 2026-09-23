"use client";

/* InterviewPlayer — a click-to-play YouTube embed. Until someone presses play
   it is just the video's thumbnail and a button, so the Stories page doesn't
   pull in YouTube's player scripts (several megabytes) for every visitor.
   After the click it swaps in the privacy-enhanced embed and starts playing. */

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function InterviewPlayer({
  youtubeId,
  title,
  playLabel,
  priority,
}: {
  youtubeId: string;
  title: string;
  playLabel: string;
  priority?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);

  // The button disappears on click; hand keyboard focus to the player.
  useEffect(() => {
    if (playing) frameRef.current?.focus();
  }, [playing]);

  if (playing) {
    return (
      <div className="story-video__frame">
        <iframe
          ref={frameRef}
          className="story-video__embed"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className="story-video__poster"
      onClick={() => setPlaying(true)}
      aria-label={`${playLabel}: ${title}`}
    >
      <Image
        src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
        alt=""
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 420px"
      />
      <span className="story-video__play" aria-hidden="true">
        <span className="story-video__play-icon">▶</span>
        {playLabel}
      </span>
    </button>
  );
}
