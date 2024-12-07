fetch(url, options)
  .then(response => {
    // Kiểm tra trạng thái phản hồi
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Trả về dữ liệu dưới dạng JSON
  })
  .then(data => {
    // Xử lý dữ liệu nhận được
    console.log(data);
  })
  .catch(error => {
    // Xử lý lỗi
    console.error('There was an error!', error);
  });


// ; Các tham số
// ; url:

// ; Chuỗi URL của API hoặc server mà bạn muốn gửi yêu cầu.
// ; options (tùy chọn):

// ; Là một object cấu hình các tùy chọn như:
// ; method: Phương thức HTTP (GET, POST, PUT, DELETE, v.v.).
// ; headers: Đối tượng chứa các tiêu đề HTTP (ví dụ: Content-Type).
// ; body: Nội dung yêu cầu (thường là chuỗi JSON khi gửi dữ liệu).
