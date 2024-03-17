document.addEventListener("DOMContentLoaded", function () {
    var createPostButton = document.getElementById("createPostButton");
    var createPostModal = document.getElementById("createPostModal");
    var closeButton = createPostModal.querySelector(".close");
  
    createPostButton.addEventListener("click", function () {
      createPostModal.style.display = "block";
    });
  
    closeButton.addEventListener("click", function () {
      createPostModal.style.display = "none";
    });
  });

  