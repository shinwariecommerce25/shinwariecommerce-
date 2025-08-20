دdocument.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("successMessage").style.display = "block";
  setTimeout(() => {
    document.getElementById("successMessage").style.display = "none";
  }, 5000);
  this.reset();
});
