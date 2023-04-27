import React, { useState } from "react";
import { Link } from "react-router-dom";
Header.propTypes = {};

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

  const [url, setUrl] = React.useState(window.location.pathname);
  const [valueInput, setValueInput] = useState("");

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
          {arrPagination?.map((item, index) => {
            return (
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
      <form onSubmit={handleOpenLink} class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Tìm kiếm chủ đề"
          aria-label="Search"
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
        />
        <button class="btn btn-outline-success my-2 my-sm-0">Tìm kiếm</button>
      </form>
    </nav>
  );
}

export default Header;
