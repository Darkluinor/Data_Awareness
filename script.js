function showSection(section) {
  document.getElementById('home-section').style.display = 'none';
  document.getElementById('about-section').style.display = 'none';
  document.getElementById('help-section').style.display = 'none';
  document.getElementById('login-section').style.display = 'none';
  document.getElementById(section + '-section').style.display = 'block';
}


showSection('home');

window.addEventListener("scroll", function() {
  var nav = document.getElementById("mainNav");
  if (window.scrollY > 60) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});





document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("✅ Signup successful! Now login.");

      
      document.getElementById("signupForm").style.display = "none";

     
      document.getElementById("loginForm").style.display = "block";

     
      document.getElementById("formTitle").innerText = "Login Here";

      
      document.getElementById("switchText").style.display = "none";
    })
    .catch((error) => {
      alert("❌ " + error.message);
    });
});



document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("✅ Login successful!");

     
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("signupForm").style.display = "none";
      document.getElementById("formTitle").style.display = "none";
      document.getElementById("switchText").style.display = "none";

      
      document.getElementById("surveyForm").style.display = "block";
    })
    .catch((error) => {
      alert("❌ " + error.message);
    });
});
auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    alert("✅ Signup successful! Now login.");

    
    document.getElementById("signupForm").style.display = "none";

    
    document.getElementById("loginForm").style.display = "block";

    
    document.getElementById("formTitle").innerText = "Login Here";

    
    document.getElementById("switchText").style.display = "none";
  })