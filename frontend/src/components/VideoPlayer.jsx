// import { useState } from "react";

// // function VideoPlayer({ thumbnail, video }) {
// //   const [play, setPlay] = useState(false);

// //   return (
// //     <div className="video-container">
// //       {!play ? (
// //         <div className="thumbnail" onClick={() => setPlay(true)}>
// //           <img src={thumbnail} alt="Workout" />
// //           <div className="play-btn">▶</div>
// //         </div>
// //       ) : (
// //         <video src={video} controls muted={true} autoPlay width="100%" />
// //       )}
// //     </div>
// //   );
// // }

// // export default VideoPlayer;

// function VideoPlayer({ thumbnail, video }) {
//   const [play, setPlay] = useState(false);

//   const isYoutube = video?.includes("youtube");

//   return (
//     <div className="video-container">
//       {!play ? (
//         <div className="thumbnail" onClick={() => setPlay(true)}>
//           {thumbnail && <img src={thumbnail} alt="Workout" />}
//           <div className="play-btn">▶</div>
//         </div>
//       ) : isYoutube ? (
//         <iframe
//           width="100%"
//           height="100%"
//           src={video.replace("watch?v=", "embed/")}
//           frameBorder="0"
//           allowFullScreen
//         />
//       ) : (
//         <video src={video} controls muted autoPlay />
//       )}
//     </div>
//   );
// }
// export default VideoPlayer;

import { useState } from "react";

function VideoPlayer({ thumbnail, video }) {
  const [play, setPlay] = useState(false);

  const isYoutube =
    video?.includes("youtube") || video?.includes("youtu.be");

  return (
    <div className="video-container">
      {!play ? (
        <div className="thumbnail" onClick={() => setPlay(true)}>
          {thumbnail && <img src={thumbnail} alt="Workout" />}
          <div className="play-btn">▶</div>
        </div>
      ) : isYoutube ? (
        <iframe
          src={video.replace("watch?v=", "embed/")}
          frameBorder="0"
          allowFullScreen
        />
      ) : (
        <video
          src={video}
          controls
          muted
          autoPlay
          playsInline
        />
      )}
    </div>
  );
}

export default VideoPlayer;