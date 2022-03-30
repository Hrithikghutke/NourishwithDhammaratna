import React, { useState, useEffect } from "react";
import "../scss/_scrollBarProgress.scss";

function Scrollprogressbar() {
  const [scrolltop, setscrolltop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setscrolltop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrolltop}%` }}></div>
    </>
  );
}

export default Scrollprogressbar;
