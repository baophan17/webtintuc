// Hàm reportWebVitals() dùng để báo cáo các chỉ số hiệu năng của trang web
// Hàm này nhận vào tham số onPerfEntry - một hàm callback được gọi với dữ liệu về các chỉ số hiệu năng
const reportWebVitals = onPerfEntry => {
  // Kiểm tra nếu onPerfEntry là một hàm và thực thi nó
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Sử dụng cú pháp dynamic import để tải động thư viện web-vitals
    // Sau khi thư viện được tải thành công, thực thi các hàm getCLS, getFID, getFCP, getLCP, getTTFB với tham số onPerfEntry để lấy dữ liệu các chỉ số hiệu năng
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
