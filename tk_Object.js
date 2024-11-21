/////////////////// Khai báo không tắt:
name="thanhtung"
age=23
ob={
     name:name,
     age:age
}
console.log(ob);

// ///////////////// Khai báo tắt:

name="thanhtung"
age=23    
ob={
     name,
     age
}
//  trong khai báo tắt nếu trong ob nếu biến cùng tên key thì không cần khia báo Key.
console.log(ob);
//////////////////////////////////////////////////////////  Lấy gia
function  Spread({name,... conlai}){ // name:  là số lượng phần tử đầu tiên; Và .... conlai :  Là số phần tử còn lại
     console.log(name,conlai)
}
o={
     name:"thanhtung",
     age:23,
     address:"Ha Noi"
}
Spread(o);
// >>>>>>>>>>>>>>>> Với cách này thì làm tương tự như Array và  các tham số khá...

///////////////////////////////////////////// Thay  đổi giá trị Key
name='thanhtung'
age= 'age'
ob={
     [name]:23,
     [age]:'23'
}
console.log(ob) //  Với ví dụ này ta có thể ta thấy thế lại  key ,ngoài ra ta có thể thay thế được cả value dùng ví dụ trên. 