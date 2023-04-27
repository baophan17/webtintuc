import React from "react";

ClickToTop.propTypes = {};

function ClickToTop(props) {
  const clickToTopSmooth = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button className="clickToTop" onClick={clickToTopSmooth}>
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
}

export default ClickToTop;
