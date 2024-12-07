fetch('https://jsonplaceholder.typicode.com/posts')
.then(request=>request.json())
.then(data=> {
     data.map(post=>{
          if (post.id==1){
               console.log(post)
          }
     })
})