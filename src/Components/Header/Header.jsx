import React, { useState } from "react";
import { Link } from "react-router-dom";
Header.propTypes = {};
// Mảng arrPagination chứa các trang và đường dẫn của chúng để tạo phân trang.
// Mỗi phần tử trong mảng đại diện cho một trang và bao gồm tên trang và đường dẫn tương ứng.
// Biến arrPagination được sử dụng để hiển thị các liên kết phân trang trên Header.
function Header(props) {
  const arrPagination = [
    {
      page: "Trang chủ",
      path: "/",
    },
    {
      page: "Sức khỏe",
      path: "/suc-khoe",
    },
    {
      page: "Thế giới",
      path: "/the-gioi",
    },
    {
      page: "Đời sống",
      path: "/doi-song",
    },
    {
      page: "Thời sự",
      path: "/thoi-su",
    },
    {
      page: "Du lịch",
      path: "/du-lich",
    },
  ];
  // Lưu trữ đường dẫn hiện tại trong state.
  const [url, setUrl] = React.useState(window.location.pathname);
  // Lưu trữ giá trị của ô tìm kiếm trong state.
  const [valueInput, setValueInput] = useState("");
  // Hàm xử lý sự kiện khi người dùng tìm kiếm.
  const handleOpenLink = (e) => {
    e.preventDefault();
    window.location.href = `https://timkiem.vnexpress.net/?q=${valueInput}`;
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="/">
        News
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          {/* lặp qua mảng arrPagination và tạo ra một thẻ li cho mỗi phần tử trong mảng */}
          {arrPagination?.map((item, index) => {
            return (
              // Thẻ list tạo ra các mục trong thanh điều hướng
              <li key={index} class={url === item.path ? "nav-item active" : "nav-item"}>
                <Link
                  className="nav-link"
                  to={item.path}
                  onClick={() => setUrl(item.path)}
                >
                  {item.page}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Form tìm kiếm */}
      <form onSubmit={handleOpenLink} class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Tìm kiếm chủ đề"
          aria-label="Search"
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
        />
        {/* Button tìm kiếm */}
        <button class="btn btn-outline-success my-2 my-sm-0">Tìm kiếm</button>
      </form>
    </nav>
  );
}

export default Header;
