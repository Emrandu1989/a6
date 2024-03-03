const loadData = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    // console.log(data.posts)
    const posts = data.posts;
    displayPost(posts)
}

const displayPost = (posts) =>{
    const leftSideTextContainer = document.getElementById('left-data-container');
    const conditionalColor = document.getElementById('conditional-color');
   
      posts.forEach(post=>{
          console.log(post)
         
        const leftSideDiv = document.createElement('div');
        
        leftSideDiv.innerHTML = `
        <div class="flex flex-col lg:flex-row mt-5 rounded-xl bg-gray-200   px-12 lg:px-24  h-[400px] lg:h-[300px] justify-between items-center">
        <div class="pt-9 relative">
          <img  class=' w-[120px]  lg:w-[200px] rounded-full' src="${post.image}" alt="">
          
          <div id="conditional-color" class="w-[15px] h-[15px] absolute top-12 right-5 rounded-full bg-green-500">
               <p>.</p>
          </div>
         </div>
         <div class="mb-5">
          <div class="flex justify-between items-center">
            <div>
              <div class="flex gap-5 mb-2">
                 <h3>#${post.category}</h3>
                 <h2>Author: ${post.author.name}</h2>
              </div>
                <div class="mb-4">
                  <h2 class="text-lg lg:text-2xl mb-2">${post.title}</h2>
                  <p>${post.description} </p>
                </div>
              <hr>
              <div class="flex justify-between mt-4 mb-5">
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
               <div class="ml-16 ">
                  <button onclick="passDataByButtonClick('${post.id}')">
                  <i class="fa-solid text-2xl rounded-full fa-envelope"></i>
                  </button>
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

   let count = 0;
   

    const passDataByButtonClick = async(id) =>{
         count++;
         const clickCount = document.getElementById('count');
         clickCount.innerText = count;
         
         const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/post/${id}`)
         const data = await res.json();
         console.log(data.title)

        const passDataContainer = document.getElementById('right-data-container');
           const  rightDataDiv = document.createElement('div');
           rightDataDiv.classList.add("flex")
             rightDataDiv.innerHTML = `
                    <h2 class="mt-2 pl-2 text-lg">${data.title}</h2>
                     <div class="flex mt-2 pl-2 justify-center items-center">
                     <i class="fa-regular ml-4 mr-4 fa-eye"></i>
                     <p>${data.view_count}</p> 
                     </div>
    
             `
             passDataContainer.appendChild(rightDataDiv);
    }


    const loadLatestPostData = async() =>{
        const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
        const data = await res.json();
        // console.log(data);
        displayLatestPostData(data)
    }

      const displayLatestPostData = (data) =>{
        const latestPostCardContainer = document.getElementById('card-container');
          data.forEach(latestPost =>{
            // console.log(latestPost);
            
            const cardData = document.createElement('div');
              cardData.innerHTML = `
              
              <div class="card w-96 bg-base-100 shadow-xl">
              <figure><img src="${latestPost.cover_image}" alt="Shoes" /></figure>
              <div class="flex items-center ml-2 gap-3 mt-2 ">
              <i class="fa-regular fa-calendar-days"></i>
               <p>${latestPost.author.posted_date || "No Publish Date"}</p>
              </div>
              <div class="card-body">
                <h2 class="card-title">
                  ${latestPost.title}
                  
                </h2>
                <p>${latestPost.description}</p>
                <div class="card-actions justify-start">
                  
                  <img  class='w-[50px] rounded-full' src="${latestPost.profile_image}" alt="">
                  
                  <div >
                    <h3 class="mr-5">${latestPost.author.name}</h3>
                    <h3>${latestPost.author.designation || "Unknown"}</h3>
                  </div>
                </div>
              </div>
            </div>
              
              `

              latestPostCardContainer.appendChild(cardData);

          })
      }

      const handleSearch= () =>{
        const inputField = document.getElementById('input-field');
        const inputFieldText= inputField.value;
        console.log(inputFieldText)
      }


    loadLatestPostData()

loadData()