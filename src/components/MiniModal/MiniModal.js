import { useState, useLayoutEffect, useRef, forwardRef } from "react";

import "./MiniModal.scss"
import { gsap } from "gsap";

import Video from "./Video";

const MiniModal = () => {
  const youtubeId = "65xa8TG2G8o";

//   const modalRef = useRef(null);
//   const modalBottomRef = useRef(null);


//   const modalTimeline = gsap.timeline({ pause: true });

// console.log(isModalVisible);

// useLayoutEffect(() => {
//     const modal = modalRef.current;
//   const modalBottom = modalBottomRef.current;

//     modalTimeline.fromTo(
//       modal,
//       {
//         transformOrigin: "center center",
//         scale: 0.9,
//         y: "10%",
//         x: "-10%",
//       },
//       {
//         duration: 0.7,
//         ease: "power2.inOut",
//         scale: 1,
//         y: 0,
//         x: 0,
//         onReverseComplete: () => closeModal(),

//       }
//     )


//   }, [isModalVisible]);

// const reversedModal = () => {

//   modalTimeline.reverse()
// }

  // const [modal, setModal] = useState(false);
  // const [videoLoading, setVideoLoading] = useState(true);

  // const openModal = () => {
  //   setModal(!modal);
  // };

  // const spinner = () => {
  //   setVideoLoading(!videoLoading);
  // };


  return (
    <div
    // className={!isModalVisible ? "modal" : "modal visible"}
    className="modal"
    // ref={modalRef}
    // onMouseLeave={reversedModal}
  >
    <div className="top-container">
      <Video youtubeId={youtubeId} />

      <div className="video-title">INVENTING ANNA</div>
    </div>
    <div className="bottom-container"   
    // ref={modalBottomRef}
    >
      <div className="minimodal-button-wrapper">
        <div className="left-content">
          <button className="play-button">▶️</button>
          <button className="add-button">➕</button>
          <button className="like-button">👍</button>
          <button className="dislike-button">👎</button>
        </div>
        <div className="right-content">
          <button className="moreInfo-button">▼</button>
        </div>
      </div>
      <div className="info-container">
        <span className="match">Match 98%</span>
        <span className="year">2022</span>
        <span className="maturity-rating">🔞</span>
        <span className="duration">1h 46m</span>
        <span className="feature-badge">HD</span>
      </div>
      <div className="tag-container">
        <span className="tag-item">Witty</span>•
        <span className="tag-item">Feel-Good</span>•
        <span className="tag-item">Exciting</span>
      </div>
    </div>
  </div>
  )
}

export default MiniModal