// "use client";
// import React from "react";

// const VideoPlayer = () => {
//   return (
//     <div className="absolute top-0 left-0 w-full h-full z-0">
//       <video
//         src="https://res.cloudinary.com/gup-shup/video/upload/v1750600374/logistics_video_revision_rw1i6h.mp4"
//         className="w-full h-full object-cover"
//         loop
//         autoPlay
//         muted
//         playsInline
//         preload="auto"
//       />
//     </div>
//   );
// };

// export default VideoPlayer;
"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <ReactPlayer
        url="https://res.cloudinary.com/gup-shup/video/upload/v1750600374/logistics_video_revision_rw1i6h.mp4"
        playing
        loop
        muted
        controls={false}
        width="100%"
        height="100%"
        playsinline
        config={{
          file: {
            attributes: {
              preload: "auto",
              style: { objectFit: "cover" },
            },
          },
        }}
      />
    </div>
  );
};

export default VideoPlayer;
