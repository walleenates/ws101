document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("registration-form");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("close-modal");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    modal.style.display = "block";

    
    form.reset();
  });

  
  closeModal.addEventListener("click", function() {
    modal.style.display = "none";
  });

  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});
