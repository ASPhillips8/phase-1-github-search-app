
// Accept: application/vnd.github.v3+json // used for the request

// what is the data

//submit form
document.addEventListener("DOMContentLoaded", () =>  {

  const form = document.getElementById('github-form');
  const formInput = document.getElementById("search");
   
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputValue = formInput.value;

    // Further actions based on the input value
    // use input to search user endpoint
    const url = (`https://api.github.com/search/users?q=${inputValue}`)

    fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json"
      }
    })
    .then((response) => response.json())
    .then((userData) => userData.items.forEach(user => renderUser(user)))

    // this gives an object of arrays. 
    // array
    // userData.items.forEach(user => console.log(user.login))
    const collection = document.getElementById("github-container") 

    

  })
  const userList = document.querySelector("#user-list")  

  function renderUser (user) {

    const li = document.createElement("li")
    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    const img = document.createElement("img")
    const p = document.createElement("p")
    const h3 = document.createElement("h3")

    li.classList.add("card")
    h2.textContent = user.login
    img.src = user.avatar_url
    img.classList.add("git-image")
    p.textContent = user.url
    h3.textContent= user.id

    div.appendChild(img)
    div.appendChild(p)
    div.appendChild(h3)
    li.appendChild(div)
    userList.appendChild(li)

  }



});










