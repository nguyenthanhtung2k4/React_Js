/// Sử dụng trong Object
     //  Cach 1
     var ob={ name: 'John',
          className: 'Math',
          age: 25,
          gender: 'male' 
     };
     var {name,className,...end}=ob;
     console.log(name);
     console.log(className);
     console.log(end);

// sử dụng trong arr
     var arr=[2,3,5,6,7,9,10];
     var [a,b,...end]=arr;
     console.log('arr')
     console.log(a)
     console.log(b)
     console.log(end)