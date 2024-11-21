# Sử dụng JavaScript nâng cao*
## **Function**: Cho biêt cách viết tắt và không viết tắt của function.Ngoài ra nó cho bạn biết thêm về các chường hợp hợp lệ và không hợp lệ.
![VD:Function_JavaScript](./tk_Function.js)

## **Module**: Cho  phép bạn kết hợp từ file này đến file khác bằng ( import /  export)
*Sử dụng React Basic Cơ bản*
-    **Import** : Là nhập vào
-    **Export** : Xuất ra một hoặc nhiều biến, hàm, lớp đã được khai báo trong file hiện tại, cho phép file khác sử dụng lại.
-    **Export default** : Xuất ra một biến, hàm, lớp mặc định đã được khai báo trong file hiện tại, cho phép file khác sử dụng lại mà không cần chỉ định tên cụ thể.
-    ***Lưu ý***: Sự khác nhau chính giữa export và export default là:
     export: Cho phép xuất ra nhiều biến, hàm, lớp và file khác cần chỉ định tên cụ thể khi sử dụng lại.
     export default: Chỉ cho phép xuất ra một biến, hàm, lớp mặc định và file khác có thể sử dụng lại mà không cần chỉ định tên cụ thể.

![Vd:Sử_dụng_Import_Export](./tk_Module/) ==> Cả ví dụ đó được kết hợp trong Folloder "tk_Module"

## **Object**: Cách khai báo đơn giản trong Object xem ví dụ bên dưới:
![Vd:Sử dụng Object](./tk_Object.js)

## **Gộp Các Objcet + Gộp các Arrays lại với nhau**
-    **Object**:  Ta có thể gộp 2 hoặc nhiều object lại với nhau bằng cách dùng dấu: chấm chấm (...). Điều này được gọi là "phương thức spread( lấy ra)" và cho phép chúng ta sao chép các thuộc tính của một object vào một object khác.
-    **Arrays**:  Ta có thể gộp 2 hoặc nhiều Arrays lại với nhau bằng cách dùng dấu: chấm chấm (...). Điều này cũng được gọi là "phương thức spread( lấy ra)" và cho phép chúng ta sao chép các phần tử của một mảng vào một mảng khác.

```javascript
          // Ví dụ về gộp object
          const obj1 = { a: 1, b: 2 };
          const obj2 = { c: 3, d: 4 };
          const objGop = { ...obj1, ...obj2 };
          console.log(objGop); // { a: 1, b: 2, c: 3, d: 4 }

          // Ví dụ về gộp mảng
          const arr1 = [1, 2, 3];
          const arr2 = [4, 5, 6];
          const arrGop = [...arr1, ...arr2];
          console.log(arrGop); // [1, 2, 3, 4, 5, 6]
```
## **Cách lấy ra cùng lúc nhiều phần tử Object + Array**
-    **Object**:  Ta có thể lấy ra cùng lúc nhiều phần tử của một object bằng Destructuring
-    **Arrays**:  Ta có thể lấy ra cùng lúc nhiều phần tử của một mảng bằng Destructuring
```javascript
          //  Sử dụng bject
          const obj = { a: 1, b: 2, c: 3 };
          const { a, b, c } = obj;
          console.log(a, b, c); // 1 2 3

          //  Sử dụng Arrays
          const arr = [1, 2, 3, 4, 5];
          const [a, b, c, d, e] = arr;
          console.log(a, b, c, d, e); // 1 2 3 4 5

          //  Ngoài ra bạn  cũng có thể dùng Spread để lấy ra các giá trị mong muốn.
          // ví dụ dùng trong arays
          const [a,...d]=arr
          console.log(a,d)// 1 [2,3,4,5]
               // Ví dụ trên ta chỉ lấy giá trị a  còn giá trị còn lại sẽ được nằm trong arrays. Tương tựa như trong Object cũng vậy. 
```


## **Sử dụng toán tử rest trong function**
-    **Toán tử rest**: Cho phép chúng ta` lấy ra các phần tử còn lại` của một mảng hoặc một object
-    **Công dụng của toán tử rest:**
- Lấy ra các phần tử còn lại của một mảng hoặc một object
- Sao chép các phần tử của một mảng hoặc một object vào một mảng hoặc một object khác
```javascript
          // Ví dụ về sử dụng toán tử rest trong function
          function cong(...args) {
          let tong = 0;
          for (let arg of args) {
          tong += arg;
          }
          return tong;
          }
          console.log(cong(1, 2, 3, 4, 5)); // 15

          // Ví dụ về sử dụng toán tử rest để truyền tham số vào function
          function chao(...ten) {
          console.log(`Xin chào, ${ten.join(', ')}`);
          }
          chao('Nam', 'Hoa', 'Linh'); // Xin chào, Nam, Hoa, Linh
```

## **Cách Sử dụng DOM**:  Xem lại kiến thức cơ bản của JavaScript  đã ghi dõ rồi lên sẽ không nhắc lại
-    **Link Dom**: https://github.com/nguyenthanhtung2k4/DNU_JavaScript/raw/refs/heads/main/JavaScript/tk_JacvaScript_BASIC.txt
-    **Link Video**: https://www.youtube.com/watch?v=Nno-r1Cz_-I&list=PL_-VfJajZj0UXjlKfBwFX73usByw3Ph9Q&index=8&pp=iAQB

# React :  Reacr yêu cầu đặt tên biến phải có chữ đầu viết hoa.
Link : 
     <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
     <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
     <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
## Phương thức React-CreateElement
-    **Phương thức React-CreateElement**:  Phương thức này được sử dụng để tạo ra element
-    **Cú pháp React:**: React.createElement(type, attchibill, interHtnml , n)  
![VD: So sánh JavaScript và  React](./tk_So_sánh_Js+React-%20CreateElemnet.html)


## React-DOM 
-    **React @18**: Ở phiên bản này hoạt động khác 1 chút với phiên bản 17.
-    ***Chạy render***: 
```javascript
          root= ReactDOM.createRoot(document.getElementById('root'));
          root.render(element)
```
-   ***React @17***: Phiên bản này có sự khác biệt giữa 17 và 18.
``` JavaScript

          ReactDOM.render(elemnet,document.getElementById('root'))
```
- *** Tóm lại: ****:  Từ hai ví dụ trên cho bạn biết dõ hơn về sự khác nhau của phiên bản 17 vs 18  ngoài ra cho thấy cách tạo elemnet mới là như nào.

## JSX :  mô tả giao diện người dùng nó cho phép chuyẻn đổi từ reacr element sàn javascript  thông qua  babel
-    **Cần CDN**: <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
-    **Tham chiếu đền**: dùng dấu {}
-    **React.Fragment**: Bao toàn bộ  các thẻ elements bên trong để tránh gây xung đột trong jsx

![Vd: Sử dụng JSX và các trường hơp](./tk_React_JSX.html)

## Types :  hiểu một cách đơn giản là tạo ra 1 function và nó cho phép người dùng gọi lại
![VD:Sử dụng  Types](./tk_React_Types_Function.html)

## Props : hiểu một cách đơn giản là nó cho phép chiều đối số vào trong hàm ,  áp dụng cả types vào trong Props
***Xem ví dụ để hiểu thêm***
![VD:Sưe dụng dùng tham chiếu ](./tk_React_Props_ThamChieu.html)

