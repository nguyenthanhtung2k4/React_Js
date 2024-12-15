# Sử dụng JavaScript nâng cao*
## **Function**: Cho biêt cách viết tắt và không viết tắt của function.Ngoài ra nó cho bạn biết thêm về các chường hợp hợp lệ và không hợp lệ.
[VD:Function_JavaScript](./tk_Function.js)

## **Module**: Cho  phép bạn kết hợp từ file này đến file khác bằng ( import /  export)
*Sử dụng React Basic Cơ bản*
-    **Import** : Là nhập vào
-    **Export** : Xuất ra một hoặc nhiều biến, hàm, lớp đã được khai báo trong file hiện tại, cho phép file khác sử dụng lại.
-    **Export default** : Xuất ra một biến, hàm, lớp mặc định đã được khai báo trong file hiện tại, cho phép file khác sử dụng lại mà không cần chỉ định tên cụ thể.
-    ***Lưu ý***: Sự khác nhau chính giữa export và export default là:
     export: Cho phép xuất ra nhiều biến, hàm, lớp và file khác cần chỉ định tên cụ thể khi sử dụng lại.
     export default: Chỉ cho phép xuất ra một biến, hàm, lớp mặc định và file khác có thể sử dụng lại mà không cần chỉ định tên cụ thể.

[Vd:Sử_dụng_Import_Export](./tk_Module/) ==> Cả ví dụ đó được kết hợp trong Folloder "tk_Module"

## **Object**: Cách khai báo đơn giản trong Object xem ví dụ bên dưới:
[Vd:Sử dụng Object](./tk_Object.js)

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

# React Basic :  Reacr yêu cầu đặt tên biến phải có chữ đầu viết hoa. 
Link : 
     <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
     <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
     <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
## Phương thức React-CreateElement
-    **Phương thức React-CreateElement**:  Phương thức này được sử dụng để tạo ra element
-    **Cú pháp React:**: React.createElement(type, attchibill, interHtnml , n)  
[VD: So sánh JavaScript và  React](./tk_So_sánh_Js+React-%20CreateElemnet.html)


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

[Vd: Sử dụng JSX và các trường hơp](./tk_React_JSX.html)

## Types :  hiểu một cách đơn giản là tạo ra 1 function và nó cho phép người dùng gọi lại
[VD:Sử dụng  Types](./tk_React_Types_Function.html)

## Props : hiểu một cách đơn giản là nó cho phép chuyền đối số vào trong hàm ,  áp dụng cả types vào trong Props
***Xem ví dụ để hiểu thêm***
[VD:Sưe dụng dùng tham chiếu ](./tk_React_Props_ThamChieu.html)
[VD: Sử dụng Props  vào button](./tk_React_Button.html)
-    ***Lưu ý:*** Trong react thì cần phải chuyển tuân thủ theo quy tắc viết thường và in hoa.
-    `onClick`:  Phải viết theo nó như vậy
-    `onDoubleclick`: Phải viết theo đúng quy tắc...
- `Còn rất nhiều các hàm cần thuân thủ theo cần tra thêm1`
### Childen props: Nó cũng là chuyền đối số vào mà trong hàm này nó cho phép bạn sử  chuyền nhiều tham số hơn mà  không cần  viết từng  đối số vào.
[Vd: Ví dụ sử dụng Childen props  trong React](./tk)

## Component : Phải tuân thủ các quy tắc React:  Đặt tên func cần phải viết chữ cái hoa.
-    **Đơn giản là** Nó bắt bạn phải tuân thủ của react hãy xem ví dụ bên dưới để có  được cái nhìn dõ hơn!
-    **Kết hợp toán tử logic** :  Trong React cho phép bạn kếtt hợp toán tử trong Component

     `` || `` :  Toán tử hoặc (  xét  giá trị  null,  undify, 0  fase, "" , NaN)

     ``??``:  Toán tử này xét  ( undify và null ) ==> Mục độ xét nhỏ hơn  || 

     `` && ``: Toán tử Và

     `` == ``: Toán tử bằng  bằng
     ***Ví dụ bên dưới cho bạn biết cách sử dụng toán tử trong Component****

[Vd:Sử dụng Component trong React](./tk_React_Component.html)
[Vd:Sử dụng toán tử trong Component](./tk_React_Toan_tu.html)

==> Phần bên trên là basic React phải gắn link CDN nó mới có thể chạy được. Bên dưới là React nâng cao hơn chính vì vậy chúng sẽ cần cài môi trường!


# REACT nâng cao :
*Để cài được mối trường trước hết phải có Node.js |  Sau đó cài gitbash*
     ***Cài đặt Node.js***:  Cài đặt Node.js để có thể sử dụng được cậu lệnh để chạy code.
     ***Cài GitBash***:  Để cài được npx  cài môi trường ảo | npm cài môi trường về máy. or yarn
*Sau khi cài đầy đủ tiếp đến dùng npx để cài được môi trường react*
## Câu lệnh Cài môi trường : 
-    **npx create-react-app {_Tên_dự_án}** : Cài môi trường trong 1 follder 
-    ***Nếu trong quá trình cài môi trường bị lỗi có thể thêm câu lệnh  này***: 
-----------------------     ***npm install -g npm@latest***
-    **npm i**: tự động kéo file react cần có về khi chẳng may xóa 1 trong những file bắt buộc phải có nó.
-    **npm start** : Chạy môi trường
-    **npm run build** : Build môi trường
--------------      **npm install -g serve**: Cài môi trường để chạy sản phẩm được build ra.
- ------------      **serve -s build**: Chạy môi trường đã được build ra.
-    **npm run eject** : Xóa môi trường
-    **npm install {_Tên_thư_viện_}** : Cài thư viện
-    **npm install {_Tên_thư_viện_} --save** : Cài thư viện
-    **npm install {_Tên_thư_viện_} --save-dev** : Cài thư viện dev 

[Vd:Hiểu dõ hơn về npm, npx, yarn](https://www.youtube.com/watch?v=7sX_8lKURqo&list=PL_-VfJajZj0UXjlKfBwFX73usByw3Ph9Q&index=26)
[Vd:Cấu trúc thư mục hoạt đông trong React](https://www.youtube.com/watch?v=-Ka_3RkQAvk&list=PL_-VfJajZj0UXjlKfBwFX73usByw3Ph9Q&index=27)

## ****** Hook : Được hiểu đơn giản nó là các hàm được tạo sẵn và chỉ lấy ra và áp dụng vào bài của mình.

### 1 useState(): Cập nhập thay đổi giá trị trạng thái
***Cấu trúc***:
------------- `const [{Gia_tri_LanDau} , {Set_Gia_tri_callback}] = useState;`
-    **Dùng khi nào?**: Khi muốn dữ liệu thay đổi thì giao diện tự động được cập nhật (render lại[ theo dữ liệu]).
-    **Cách dùng**
```jsx
          import { useState } from 'react'
          function Component() {
          const [state, setState] = useState(initState)

          .......
          }

```
***Lưu ý***:
- Component được re-render sau khi 'setState"
- Initial state chỉ dùng cho lần đầu 
- Set state với callback?
- Initial state với callback?
- Set state là thay thế state bằng giá
trị mới

[Vd: Sử dụng Hook useState](./tk_Hook_React_useState.js) Cần build môi trường trước khi chạy code.
####  ------------------ Làm việc với useState ----------------------
#### *1.1 Two-Way- binding(uerState)*: Áp dụng checkbox CheckBox, radio, Fromt, input .....
-    **Dùng khi**: Khi bạn cần đồng bộ hóa giá trị của một input form với state trong React và ngược lại.
-    **Cách dùng**: Giống như useState vì nó được áp dụng useState để làm ra ràng buộc 2 chiều.
```jsx
     const courses = [{id: 1,name: 'Html'},
     {id: 2,name: 'Python'}
     ];

     function App() {
     const [checked, setChecked] = useState(2); // checked  BanDau= 2
     const [result, setResult] = useState();

     const handleSubmit = () => {
     // Call API
     const api={
          id: checked,
          name: courses.find(course => course.id === checked).name
     }
     console.log(api); /// requesrt ve  phia api 
     ///  setResult: dùng để  in ra màn hình
     setResult({
          id: checked,
          name: courses.find(course => course.id === checked).name
     });
     };
     return(
          ....................................
          tham khảo VD check radio  vs checkbox bên dưới !
     )
     }
```

[VD: Radio dung useState](./tk_Hook_React_useState_Radio.js)

[Vd: CheckBox dung useState]()

#### *1.2 to-do-list(useState)* : Hiện ra các danh sách sử dụng  to do  list
[Vd: Sử dụng To-do-list](./tk_Hook_)


### 2 Thuật ngữ  Mounted  và  UnMounted nó dùng chỉ cho gắn vào và lấy ra.
#### *Mounted** : Dùng để gắn vào.
#### *UnMounted** : Dùng để lấy ra.
[Vd: Sử dụn g Mount và UnMounted](./tk_Hook_React_useState_Mount_UnMount(Gắn%20và%20bỏ).js)
### 3 userEffect : Dùng để xử lý hiệu ứng phụ (side effects) trong component, như lấy dữ liệu, đăng ký sự kiện, hoặc dọn dẹp. ( api  ,  ervent  , time.... )

- **=> Khi nào dùng useEffect?**
  - Các tác vụ không cần đồng bộ với DOM hoặc giao diện, chẳng hạn:
  - Gọi API.
  - Lắng nghe sự kiện.
  - Thiết lập hoặc hủy các bộ đếm thời gian.
  - Đăng ký hoặc hủy đăng ký sự kiện (ví dụ: addEventListener).

#### *useEffect*: Có các tính huống sau:

-    **+ useEffect({callBack})** : Gọi callBack ***mỗi khi component*** re-render. 
-    **+ useEffect({callBack}, [])** : Chỉ gọi lại callback ***1 lần*** sau khi component mounted
-    **+ useEffect({callBack}, [{giá_trị}])** : CallBack luôn được gọi sau khi ***giá trị*** thay đổi

* >>Lưu ý:CallBack luôn được goị sau khi compoment mounted*

#### *3.1 Update DOM* : Cập nhập lại title của trang web >>Với callback  nhiều lần
- **Cho phép cập nhập lại dữ liệu ở Title DOM**
[Vd: Sử dụng useEffect để cập nhập lại TitleDOM](./tk_Hook_React_useEffect_UpdateDOM.js)
==>  ví dụ này dành cho useEffeact(callback) ==>  Gọi lại nhiều lần sau khi component

#### *3.2 Call API* : Gọi lại API bằng useEffact >> Với callback 1 lần
- **Dùng callBack 1 lần đ gọi API**

[Vd: Sử dụng useEffect để callBack](./tk_Hook_React_useEffect_Call_API.js)

#### *3.3  Call API nhiều giao diện*  Dùng với callBack >>  Sử dụng callBack  với API và tham số  mảng  của useEffect
- **Mục đích nó có thể xuất ra được nhiều dữ liệu cùng với 1 trang**

[Vd: Sử dụng  useEffect với tham số API](./tk_Hook_React_useEffect_Call_API_Tham_So.js)


#### *3.4 DOM Event (Cuộn trang  web Scroll )* >> Sử dụng với useEffect
- *Kiến thứ:* :  Về kiếm thức này yêu cầu người dùng phải nắm được kiến thức cơ bản về JavaScript cơ bản
- *Sử dụng **useEffect** có thể tạo thanh cuộn về trang ban đầu rất mượt mà và trơn tru*

**LƯU Ý:** Sau khi dùng **xong sự kiện event** trong js  cần phải xóa sự kiện đi để giảm tối đa tốc độ trình duyệt **tránh dư thừa dữ liệu**

[Vd: Sử dụng useEffect làm thanh cuộn (Scroll)](./tk_Hook_React_useEffect_DomEvent_Thanh_Cuộn.js)

#### 3.5 Time  đếm ngược >> Sử dụng  với  useEffect +  useState
- **Trong ví dụ  có 2 cách để cho tuime đếm ngược**
- **Sau khi khi đếm ngược lại  thì phải có hàm clearTiem()**

[Vd:Sử dụng useEffect đếm ngược time](./tk_Hook_React_useEffect_Time_Đếm_Ngược.js)


#### 3.6  Dọn dẹp (Update avata)  >> Sử dụng  với  useEffect
- *Để tránh dò dị bộ nhớ*:Ta cần xóa bố nhớ hiện tại trước khi  thêm bộ nhớ tiếp theo.
- **Điều này rất quan trọng để tránh tràn bộ nhớ và xung đột.**
-*Cú pháp*:
```js
useEffect(() => {
  return () => {
    // Logic cleanup, ví dụ: hủy sự kiện, dọn bộ nhớ, xóa timer...
  };
}, [dependencies]);
```

Ví dụ bên dưới là cập nhập  avata và clear bộ  nhớ hiện tại để tránh đầy và dò dị bộ nhớ.

[Vd:Sử dụng update avata ( Dọn dẹp trước khi cập nhập)](./tk_Hook_React_useEffect_Update_AVATA__%20(Dọn%20Dẹp).js)


#### 3.7 Sử lý thời gian thực >>  uesEffect
- Vì phần này liên quan đến các file lên có thể tham khảo link ở đây **Link bên dưới**

**Link:** https://www.youtube.com/watch?v=eFrgfL3O_UQ&list=PL_-VfJajZj0UXjlKfBwFX73usByw3Ph9Q&index=41                                                                                      

==> Nó sẽ phát ervent ra và cập nhập thời thực.


### 4 useLayoutEffect: 
- Dùng khi thực hiện các thao tác đồng bộ hóa: 
  - DOM Thay đổi DOM ngay sau khi nó được React cập nhật.
  - Đo kích thước hoặc vị trí của các phần tử DOM (ví dụ: getBoundingClientRect).
  - Điều chỉnh DOM trước khi nó được vẽ lên màn hình (blocking).

- *Lưu ý:* Không lên lạm dụng quá mức nó khiến làm ảnh hưởng đến hiệu suất.

- **Link tham khảo:** https://www.youtube.com/watch?v=loSqbCbH2xo&list=PL_-VfJajZj0UXjlKfBwFX73usByw3Ph9Q&index=39


[Vd: Sử dung useLayouteffect thay đổi DOM sau khi cập nhập](./tk_)

### 5 useRef( {Đối_số_bất_kì} )
*Dùng khi:* Khi nào dùng useRef?
- Truy cập trực tiếp DOM (input, div, canvas, v.v.).
- **Lưu giá trị mà không cần re-render**.
- Lưu **trạng thái tạm thời** giữa các lần render.
- **Ngăn gọi lại các side-effect** không cần thiết.
 *useRef*:  Trả về object 
```js 
{'current' : {Giá_trị_đã_Truyền_vào}}
```

['Vd:Sử dụng useRef áp dụng điểm dừng của time](./tk_Hook_React_useRef_Điểm_Dừng_Time.js)

***Link Tham khảo** nếu chưa hiểu*: https://www.youtube.com/watch?v=qr1dQqRJRNo&list=PL_-VfJajZj0UXjlKfBwFX73usByw3Ph9Q&index=40

### 6 memo(): 
*Dùng khi*: Kiểm tra sự thay đổi của props nếu có sự kiện thay đổi trong funciton component đó thì thay đổi còn không thì nó sẽ giữ nguyên để giúp web hoạt động 1 cách trơn tru.

*Xem **chi tiết** để hiểu dõ hơn về nó:* https://www.youtube.com/watch?v=pPoKG_l3UFQ&list=PL_-VfJajZj0UXjlKfBwFX73usByw3Ph9Q&index=41

**Tóm lại:** 
- Tóm lại:
  -  Trong trường hợp nhiều file  mà chỉ thay đổi 1 function  commpoment nhỏ bên trong 
  - và các compoment khác không thay đổi có thể dùng memo để giúp giảm vấn đề hiệu năng


 
Bên dưới đây là sự khác nhau khi không dùng memo  và khi dùng memo:
- Dùng memo: ['Vd: Sử dụng memo kiểm tra thay đổi của compoment'](./tk_Hook_React_memo_Kiểm_tra_sựThayđổi_trongCompoment.js)

- Không dùng memo: ['Vd: Khi không dùng memo'](./tk_Hook_React_Không_Dùng_memo.js)

### 7 useCallback() 


/// đang học đến list  42 về callback và 
<!--  cahtgpt đang tìm hiểunsuwj khác nhau của call back và  memo.
 -->