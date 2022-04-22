import { useEffect, useRef } from "react";
import "./Loader.scss";
import gsap from "gsap";
import useWindowSize from "../Lane/WindowSize";

const Loader = () => {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const size = useWindowSize()
  useEffect(() => {
    // Target ALL descendants with the class of .box
    gsap.fromTo(
      q(".loader__items"),
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 1.5,
        stagger: 0.5,
        repeat: -1,
        ease: "power2.in",
        repeatRefresh: true,

        backgroundColor: "#1e1e1e",
        // backgroundColor: "rgba(177, 6, 15,1)",
      }
    );
  }, []);
  return (
    <div className="loader" style={{ height: `${size.itemHeight}vw`}}>
      <ul className="loader__track" ref={el}>
        <li className="loader__items"  style={{ height: `${size.itemHeight}vw`, width: `${size.itemWidth}vw` }} >
          <div className="loader__content"  >

          {/* <img src="https://images.unsplash.com/photo-1456796148441-485386946471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="cat-dummy" /> */}
            
          </div>
        </li>
        <li className="loader__items"  style={{ height: `${size.itemHeight}vw`, width: `${size.itemWidth}vw` }}>
          <div className="loader__content">

{/* <img src="https://images.unsplash.com/photo-1456796148441-485386946471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="cat-dummy" /> */}
            
          </div>
        </li>
        <li className="loader__items"  style={{ height: `${size.itemHeight}vw`, width: `${size.itemWidth}vw` }}>
          <div className="loader__content">

          {/* <img src="https://images.unsplash.com/photo-1456796148441-485386946471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="cat-dummy" /> */}
          </div>
        </li>
        <li className="loader__items"  style={{ height: `${size.itemHeight}vw`, width: `${size.itemWidth}vw` }}>
          <div className="loader__content">
          {/* <img src="https://images.unsplash.com/photo-1456796148441-485386946471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="cat-dummy" /> */}

          </div>
        </li>
        <li className="loader__items"  style={{ height: `${size.itemHeight}vw`, width: `${size.itemWidth}vw` }}>
          <div className="loader__content">
          {/* <img src="https://images.unsplash.com/photo-1456796148441-485386946471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="cat-dummy" /> */}

          </div>
        </li>
        <li className="loader__items"  style={{ height: `${size.itemHeight}vw`, width: `${size.itemWidth}vw` }}>
          <div className="loader__content">
          {/* <img src="https://images.unsplash.com/photo-1456796148441-485386946471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="cat-dummy" /> */}

          </div>
        </li>
      </ul>
    </div>
  );
};

export default Loader;
