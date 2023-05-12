import React from "react";


// Định nghĩa component ClickToTop
ClickToTop.propTypes = {};

function ClickToTop(props) {
  // Xử lý sự kiện click để cuộn lên đầu trang
  const clickToTopSmooth = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // Trả về một button khi được gọi đến
  return (
    <div>
      <button className="clickToTop" onClick={clickToTopSmooth}>
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
}
// Xuất component ClickToTop để sử dụng ở các file khác
export default ClickToTop;
