// Định nghĩa một đối tượng RequestClient chứa các phương thức gọi API
export const RequestClient = {
  // Phương thức lấy tất cả các bài viết
  getAll: () => {
    // Gửi một request GET tới API và parse kết quả trả về dưới dạng JSON
    return fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Ftin-moi-nhat.rss"
    ).then((response) => response.json());
  },
};
