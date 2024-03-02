const loadData = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    // console.log(data.posts)
    const posts = data.posts;
    displayPost(posts)
}

const displayPost = (posts) =>{
    const leftSideTextContainer = document.getElementById('left-data-container');
      posts.forEach(post=>{
        console.log(post)
        const leftSideDiv = document.createElement('div');
        
        leftSideDiv.innerHTML = `
        <div class="flex mt-5 rounded-xl bg-gray-200 px-24  h-[300px] justify-between items-center">
        <div class="">
          <img  class='w-[200px] rounded-full' src="${post.image}" alt="">
         </div>
         <div class="">
          <div class="flex justify-between items-center">
            <div>
              <div class="flex gap-5 mb-2">
                 <h3>#${post.category}</h3>
                 <h2>Author: ${post.author.name}</h2>
              </div>
                <div class="mb-4">
                  <h2 class="text-2xl mb-2">${post.title}</h2>
                  <p>${post.description} </p>
                </div>
              <hr>
              <div class="flex justify-between mt-4">
                <div class="flex space-x-8 ">
                  <div class="flex justify-center items-center">
                    <i class="fa-solid fa-envelope-open-text mr-4"></i>
                    <p>${post.comment_count}</p>
                  </div>
                  <div class="flex justify-center items-center">
                    <i class="fa-regular mr-4 fa-eye"></i>
                    <p>${post.view_count}</p>
                  </div>
                  <div class="flex justify-center items-center">
                    <i class="fa-regular mr-4 fa-clock"></i>
                    <p>${post.posted_time}</p>
                  </div>
               </div>
               <div>
                <i class="fa-solid fa-envelope"></i>
               </div>
              </div>
          </div>
          
           </div>
         </div>
       </div>
        
        
        `
        leftSideTextContainer.appendChild(leftSideDiv);
      

      })
}
loadData();