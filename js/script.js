document.addEventListener('DOMContentLoaded', function () {
  // Get references to modal buttons and file inputs
  var modalButtons = document.querySelectorAll('.openModalBtn');
  var fileInputs = document.querySelectorAll('.fileInput');

  // Open modal when the button is clicked
  modalButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var modalId = button.getAttribute('data-modal-id');
      var modal = document.getElementById(modalId);
      modal.style.display = 'flex';
    });
  });

  // Close modal when close button is clicked
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('close-btn')) {
      var modalId = event.target.getAttribute('data-modal-id');
      var modal = document.getElementById(modalId);
      modal.style.display = 'none';
    }
  });

  // Close modal when clicking outside the modal content
  window.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
    }
  });

  // Close modal when pressing the 'Esc' key
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      document.querySelectorAll('.modal').forEach(function (modal) {
        modal.style.display = 'none';
      });
    }
  });

  // Handle file input change event for all file inputs
  fileInputs.forEach(function (fileInput) {
    fileInput.addEventListener('change', function () {
      displaySelectedFiles(fileInput);
    });
  });

  // Function to display selected file names for a specific file input
  function displaySelectedFiles(fileInput) {
    var selectedFilesDivId = 'selectedFiles' + fileInput.id.slice(-1);
    var selectedFilesDiv = document.getElementById(selectedFilesDivId);

    selectedFilesDiv.innerHTML = ''; // Clear previous content

    // Display each selected file name
    for (var i = 0; i < fileInput.files.length; i++) {
      var fileName = fileInput.files[i].name;
      var fileItem = document.createElement('div');
      fileItem.textContent = fileName;
      selectedFilesDiv.appendChild(fileItem);
    }
  }
});