///////////////////////////////////////////  Không viết Tắt
function tung(a,b){
     return a + b;
}
console.log(tung(10,10));
///////////////////////////////////////////// Viết Tắt 
/////// Sử dụng function
const nam=(a,b)=>a+b;
console.log(nam(10,10));
/////////////  Sử dụng Object Cach1
const t = (a, b) => {
  return {
    name: a,
    age: b,
    get: function() {
      return `Name: ${this.name} and Age: ${this.age}`; // trả về kết quả.
    }
  }
}
////////////////// Su dụng OBject2
const person1 = new  t('John', 30);
const person3 = new  t('John', 34);
console.log(person1.get());
console.log(person1);
const t2 = function(a, b) {
  this.name = a;
  this.age = b;
}
const person2 = new  t2('John', 23); // new để khởi tạo cho nó 1 object. Bên trên khai báo 1 Object Chung
console.log(person2);

// ==> Cach1  sử dụng Object chỉ có thể khởi tạo của 1 object 
// ==> Cach2 sử dụng function có thể khởi tạo được nhiều object