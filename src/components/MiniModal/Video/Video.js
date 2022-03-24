import React from "react";
import "./Video.scss";

const Video = ({youtubeId}) => {
  const removeControls = "&controls=0";

  //TODO useEffect need to rerender to update start and end time every time  when its hovered
  const startTime = "start=5";
  const endTime = "&end=20";

  //auto play and mute needs to be set together for chrome
  const autoPlay = "&autoplay=0";
  const mute = "&mute=1";

  const loop = `&playlist=${youtubeId}&loop=1`;
  const modestBranding = "&modestbranding=1&showinfo=0&fs=0&iv_load_policy=3";

  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?${startTime}${endTime}${autoPlay}${mute}${loop}${modestBranding}`;

  // playerVars: {
  //   autoplay: 1, // Auto-play the video on load
  //   controls: 1, // Show pause/play buttons in player
  //   showinfo: 0, // Hide the video title
  //   modestbranding: 1, // Hide the Youtube Logo
  //   loop: 1, // Run the video in a loop
  //   fs: 0, // Hide the full screen button
  //   cc_load_policy: 0, // Hide closed captions
  //   iv_load_policy: 3, // Hide the Video Annotations
  //   autohide: 0, // Hide video controls when playing
  // }

  return (
    <div className="video-container">
      <iframe
        src={embedUrl}
        frameBorder="0"
        className="video-content"
        loading="lazy"
        allow="autoplay"
        title="trailer"
      ></iframe>
    </div>
  );
};

export default Video;
