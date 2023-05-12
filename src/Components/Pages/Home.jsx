import React, { useEffect, useState } from "react";
Home.propTypes = {};

function Home(props) {
  // Sử dụng hooks useState để lưu trữ dữ liệu được trả về từ API
  const [allData, setAllData] = useState([]);
  // Sử dụng hooks useEffect để gọi API và lưu trữ kết quả trả về
  useEffect(() => {
    const getAllApi = async () => {
      const response = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Ftin-moi-nhat.rss&api_key=nfqhy0dikifdplbtwpgifxpngbqefmdta0xcl429&count=55"
      );
      const data = await response.json();
      console.log(data)
      setAllData(data);
    };
    getAllApi();
  }, []);
  // Hàm xử lý chuỗi HTML để trả về nội dung văn bản
  const innerHtmlData = (data) => {
    var el = document.createElement("html");
    el.innerHTML = data;
    return el.textContent || el.innerText || "";
  };
  // Trả về giao diện
  return (
    <div className="pageWrap">
      <div className="page">
        {allData?.items?.map((item, index) => {
          return (
            <div class="column" id={index}>
              <img src="https://s.vnecdn.net/vnexpress/i/v20/logos/vne_logo_rss.png" alt="" />
              <span className="dayPub">
                Đăng ngày {new Date(item.pubDate).toLocaleDateString("vi-VN")}
              </span>
              <h1>
                <a href={item.link}>{item.title}</a>
              </h1>
              <p>{innerHtmlData(item.description)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
