import { useState, useLayoutEffect, useRef, forwardRef } from "react";


import movieData from '../../movies.json'

import "./MiniModal.scss"
import MiniModalDetails from "./MiniModalDetails"
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
        {/* <Video youtubeId={youtubeId} /> */}

        <div className="video-title">INVENTING ANNA</div>
      </div>
      <div
        className="bottom-container"
        // ref={modalBottomRef}
      >
        <MiniModalDetails />
      </div>
    </div>
  );
}

export default MiniModal