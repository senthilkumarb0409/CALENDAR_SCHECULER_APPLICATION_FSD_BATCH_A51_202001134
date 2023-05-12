const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function index(){
  var Username=document.getElementById("Username").value;
  var password=document.getElementById("password").value;
  if(Username=="admin" && password=="admin123"){
    window.location.assign("index1.html");
    alert("Login Successfully");
  }
  else if(Username=="senthil" && password=="senthil123"){
    window.location.assign("index1.html");
    alert("Login Successfully");
  }
  else{
    alert("Invalid login");
    return;
  }
}


