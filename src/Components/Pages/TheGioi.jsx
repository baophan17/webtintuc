import React, { useEffect, useState } from "react";
TheGioi.propTypes = {};

function TheGioi(props) {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    const getAllApi = async () => {
      const response = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fthe-gioi.rss&api_key=nfqhy0dikifdplbtwpgifxpngbqefmdta0xcl429&count=55"
      );
      const data = await response.json();
      setAllData(data);
    };
    getAllApi();
  }, []);

  const innerHtmlData = (data) => {
    var el = document.createElement("html");
    el.innerHTML = data;
    return el.textContent || el.innerText || "";
  };

  return (
    <div className="pageWrap">
      <div className="page">
        {allData?.items?.map((item, index) => {
          return (
            <div class="column">
              <img src={item.thumbnail} alt="" />
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

export default TheGioi;
