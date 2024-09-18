Trình biên soạn: chuyển từ html + js  sang cú pháp  react
     
     link: https://babeljs.io/

CDN: React 

     <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
          <!-- React -->
     <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
          <!-- React - Dom  -->
     <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
          <!-- React -  Babel  --> chuyển js sang react

==> Muốn thay đổi version chỉ cần thay đổi react@18  ==> thay  đổi chỉ số là xong
==> Trong React khi gán giá trị nó bắt buộc việt tên chứ cái đầu đặt chữ hoa để tránh lỗi code


//////////////////////////////////////////////////////////////  các từ gơi ý /////////////////////////////
          - import : Nhận giá trị của một file khác (module js)
          - export : trả về giá trị cho một file khác (module js)
          - render : cho  phép ban in code trong react ra bên ngoài.
          


//////////////////////////////////////////////////////////////  Hàn quan trọng //////////////////////////
          - attribute trong react có một số thay đổi:
                    HTML  <-------> React
                    class           className
                    for             htmlFor



//////////////////////////////////////////////////////////////  Funciton  Nâng cao ////////////////////
     
          - row function() : Đơn giản là đặt biến gán cho  function() và viết tắt function cho nó.

```javascript
// VD0 : hàm cơ bản
          var log=log => consolog.log(log):
          log('mesger....');
// VD1 : khi muốn return ra thì kết quả
          var sum=(a,b) => a+b;
          consolog.log(sum(2,2));
          // ==> Kết qủa trả về : 
          // 4
// VD2 :  trả về object
          var ob=(a,b)=>({a:a,b:b});
          consolog.log(ob(2,3));
          // ==> Kết qủa trả về : 
          // {2:2,3:3}
// VD3 : trả về arr:
          var arr=(a,b)=>([a,b]);
          consolog.log(arr(2,3));

// ==> khi khi dùng  arow funciton thì không thể gọi lại hàm bằng 'this' vì nó sẽ báo lỗi.không giống  function
// VD: HÀM SAI
          var  eror={
               name:'thanhtung';
               getname: ()=>{
                    return this.name;
               }
          };consolog.log(eror.getname); //  khi chạy lại hàm này nó sẽ báo lỗi  về vấn đề nó không biết lấy this là thằng nào.
// VD: HÀM ĐÚNG
          var  eror={
               name:'thanhtung';
               getname:function(){
                    return this.name;
               }
          };consolog.log(eror.getname); //  khi chạy hàm này nó sẽ trả về 'thanhtung'

```
--------------------------------------------------------------------------------------------------

          - Spread( Lấy ra ) function(): đơn giản hiểu nó là một trong những cách lấy ra tham số trong biến
                              ==>  sử dụng ... end nó sẽ giúp ta lấy đc hết tất cả các tham số chuyền vào.

```javascript
////  tham so trong function và sử dụng tham số!
          function arr (a,b,...e){
               console.log('Tham_so')
               console.log(a)
               console.log(b)
               console.log(e,'\n')
          }

          // ==> Xem thêm ví dụ  cho  cụ thể hơn.
```
![VD:Sử dụng các Function nâg cao trong tham số](./tk_Function_ThamSo.js)

--------------------------------------------------------------------------------------------------

          - Destructuring( tách ra)function() : Hiểu một cách đơn giản là tách ra từng ob hoặc arr một

```javascript
// sử dụng trong arr
          var arr=[2,3,5,6,7,9,10];
          var [a,b,...end]=arr;
          console.log('arr')
          console.log(a)
          console.log(b)
          console.log(end)
          //==> Xem thêm ví dụ  cho  cụ thể hơn.

```
![VD: Sử dụng lấy giá trị trong ob và arr](./tk_Function_Lấy_giá_trị.js)

//////////////////////////////////////////////////////////////  Module Javascript ////////////////////
     -Module : Hiểu đơn giản là dùng để lấy và xuất file này đến file khác trong đó nó có import và export
         
          + import : Nhập (lấy ) dữ liệu từ file khác.

```javascript
// Cách gọi hàm import ra ngoài
          //VD:  Import (Nhập dữ liệu bằng cách lấy các dữ liệu ở Export Default)
               import tung from {Địa_chỉ_file}
          //==> tung() là tên function  do mình đặt và export nó ra.
          
          //VD: Import * as (Nhập dữ liệu từ  file Export )
               import * as tung from {Địa_chỉ_file}

          //VD: Import và Import * as 
               import tung,{
                    typetung,
                    typename
               } from {Địa_chỉ_file}

     // ==>  Sử khác nhau của Import và import Default :
     //        + Import : Là  nhập dữ liệu được xuất ra bằng export default
     //        + Import * as : Là Nhập dữ liệu được xuất bằng export
     // NGOÀI RA TA CŨNG CÓ THỂ SỬ DỤNG CẢ  EXPORT VÀ EXPORT DEFAUL CÙNG LÚC 
```
![VD:Sử dụng Import](./tk_Module.html)
![VD:Sử dụng Import](./tk_Module_Import.js)

          + export : Xuất (trả ) dữ liệu cho file khác.

```javascript
//  Cách dùng export 
          //VD: export default
               export default {Tên_funciton}
          // == > khi ra xuất export default thì chỉ có thể dùng export default một lần trong một file

          //VD: export 
               export {tên_biến}

     // Sử khác nhau của export và export default:
          // + export default: xuất ra hàm function
          // + export :xuất ra các biến mà đã đặt tên cho nó.

```
![VD:Sử dụng Import](./tk_Module.html)
![VD: Sử dụng Export](./tk_Module_Export.js)
     
          ==>Link tham khảo về module: https://www.youtube.com/watch?v=08lWi4T2Bfg

//////////////////////////////////////////////////////////////  Object  nâng cao Javascript ////////////////////

          + Định nghĩa key trong Object:
   
```javascript
               var name_='Thanhtung';
               var firt_name='Nguyen';

               var ob={
                    [name_]:'js',
                    [firt_name]:'name'

               };
               console.log(ob);
          // ==> Ta có thể thay đổi key trong Object hay được hiểu một cách đơn giản là định nghĩa đc object
          // ==> Ngoài ra ta cũng có thể dùng trong arr giống như object

```
![VD:Cách định nghĩa các object  và arr](./tk_Function_Lấy_giá_trị.js)
==> Link tham khao: https://www.youtube.com/watch?v=J1m4vLDUhEI







////////////////////////////////////////////////////////// React-CoBan [V17] ////////////////////


* Lưu ý: Một số thay đổi 
          ReactDOM : Giống như Document trong Js
          createRoot():  Lấy giá trị trong html
          render :  cho phép bạn thực thi code và in ra ngoài html

          - attribute trong react có một số thay đổi:
                    HTML  <-------> React
                    class           className
                    for             htmlFor
                    

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

          -  Jsx : Hiểu một cách đơn giản nó là chỉnh biên soạn chuyển đổi từ html+js ==> react 
               ==> Nó cho  cho viết chèn html+js vào trong react.


```javascript
                    var root=document.getElementById('root');
                    var jsx= (
                         <div>
                         <ul>thanhtung</ul>
                         <ul>thanhtung123</ul></div>
                    );
                    ReactDOM.render(jsx,root)
```
![Vd:Sử dụng JSX](./tk_Jsx.html)

++++++++++++++++++++++++++++++++++++++++++++++++++  Element ++++++++++++++++++++++++++++++++++++++++++++++++++++++

          - React.createElement  : cách tạo ra Element mới bằng React
               
               ==> Chú ý :Khi dùng function phải đặt tên in  Hoa mới chạy được.
                    Vd: function Tung(){}
![Vd:Tạo Create_Element trong React](./tk_Create_Element_React.html)

+++++++++++++++++++++++++++++++++++++++++++++++++++++++ Function  Class+++ +++++++++++++++++++++++++++++++++++
          
          - Function <tên_biến> (){}
                    -->  Đặt tên biến function chữ cái đầu phải viết hoa.
          - Gọi lại hàm Function trong React.Xem ví dụ  bên dưới!
     ===>  Trong function  React bạn sử dụng key chung làm tham chiếu rồi gọi tham chiếu ra XEM VÍ DỤ CỤ THỂ

![Vd:  tham chiếu function](./tk_Function_ThamSo.js)
![Vd:Function NangCao React](./tk_Function_React_NangCao.html) Xem ví dụ  để hiểu hoạt động của React-Js


          - Class : Cho  phép bạn thực thi  các lệnh trong class
          Link tham khảo : https://www.w3schools.com/react/react_class.asp
![Vd: Sử dụng Class Tham khảo](./tk_Class_React.html)

+++++++++++++++++++++++++++++++++++++++++++++++++++++++ Làm việc với JSX nâng cao +++++++++++++++++++++++++++++++++++
          - DOM events() : Làm việc với nút bấm (button | check box ...) làm việc với Jsx
![Vd:Làm việc với DOM_events_Button](./tk_Jsx_DOM_event_BUTTON.html)
![VD:Làm việc vớiDOM_events_CheckBox_Radio](./tk_Jsx_DOM_events_CheckBox_Radio.html)
          
          
          - Toán tử logic với React: Có thể sử dụng if else trong React

![Vd:Sử dụng  Logic (if else React)](./tk_Jsx_Toán_Tử_Logic.html)


