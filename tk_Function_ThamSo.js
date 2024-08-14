////  tham so trong function
          function arr (a,b,...e){
               console.log('Tham_so')
               console.log(a)
               console.log(b)
               console.log(e,'\n')
          }
////  tham so  trong function  voi Object
          //  cach 1 lấy qua một tham số
          function ob(name){
               console.log('function Object');
               console.log(name.name);
               console.log(name.class);
               console.log(name.total);
          }

          //  cach 2 Lấy luôn trực tiếp trong ob
          function createObject({ name, className, ...end }) {
               console.log('function createObject');
               console.log(name);
               console.log(className);
               console.log(end);
          } 


// ==>  ... end là lấy tất cả các tham số còn lại và nó trả về là object hoặc là arr.


/////////////////////// function tham so cua no.
 arr(10,20,20,40);
 ob({name:'tung', 
     class:15,
     total:32
})
createObject({ name: 'John',
     className: 'Math',
     age: 25,
     gender: 'male' });