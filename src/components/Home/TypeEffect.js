import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingEffect = () => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: [" A Frontend Developer", " A Web Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="type-wrap">
      <span style={{ whiteSpace: "pre" }} ref={el} />
    </div>
  );
};

export default TypingEffect;
