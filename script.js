//user icon to signup
//document.getElementById("user-icon").addEventListener("click",()=>{
   // window.location.href="signUp.html";
//});
 const searchIcon= document.querySelector("#search-icon");
 const searchContainer = document.querySelector(".search-container");
 const container = document.querySelector(".container");
 searchIcon.addEventListener("click",() =>{
    searchContainer.classList.toggle("active");
    if(searchContainer.classList.contains("active")){
      searchContainer.querySelector(".search-bar").focus();
    }
 });
 const sidebar = document.querySelector(".sidebar");
 const closeBtn = document.querySelector(".close-btn");
 const continueBtn = document.querySelector(".continue-btn");
sidebar.addEventListener("click", ()=>{
})


