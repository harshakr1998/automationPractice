function showPageAlert() {
    const alertBox = document.createElement('div');
    alertBox.className = 'alert';
    alertBox.textContent = 'This is a page alert!';
    document.body.appendChild(alertBox);
    setTimeout(() => alertBox.remove(), 3000);
  }
  
  function showBrowserAlert() {
    alert('This is a browser alert!');
  }
  
  // Dynamic content loading (for better interaction)
  document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Pagination functionality
    const rowsPerPage = 3;
    const table = document.getElementById('pagination-table').getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');
    const totalPages = Math.ceil(rows.length / rowsPerPage);
    const paginationLinks = document.querySelectorAll('.page-link');
  
    function showPage(page) {
      for (let i = 0; i < rows.length; i++) {
        rows[i].style.display = 'none';
      }
      for (let i = (page - 1) * rowsPerPage; i < page * rowsPerPage; i++) {
        if (rows[i]) {
          rows[i].style.display = '';
        }
      }
    }
  
    paginationLinks.forEach(link => {
      link.addEventListener('click', function () {
        const page = this.getAttribute('data-page');
        showPage(page);
      });
    });
  
    showPage(1);
  });
  
  // Function to show a page alert
  function showCustomAlert() {
    document.getElementById('alertBox').style.display = 'flex';
}

function closeCustomAlert() {
    document.getElementById('alertBox').style.display = 'none';
}
  
  // Function to show a browser alert
  function showBrowserAlert() {
    alert("This is a browser alert!");
  }
  
  // Pagination functionality (simple example)
  document.querySelectorAll('.page-link').forEach(button => {
    button.addEventListener('click', function() {
      const pageNumber = this.getAttribute('data-page');
      alert(`Page ${pageNumber} clicked!`);
    });
  });

  if (window.innerWidth >= 768) {
    document.querySelectorAll('form > label').forEach(function (el) {
        var wrapper = document.createElement('div');
        var input = el.nextElementSibling;
        el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);
        wrapper.appendChild(input);
    });
}

document.addEventListener('DOMContentLoaded', function () {
  const multiSelectDropdowns = document.querySelectorAll('.multi-select-dropdown');
  multiSelectDropdowns.forEach(dropdown => {
    const selected = dropdown.querySelector('.dropdown-selected');
    const optionsContainer = dropdown.querySelector('.dropdown-options');
    const searchInput = dropdown.querySelector('.dropdown-search');
    const checkboxes = dropdown.querySelectorAll('input[type="checkbox"]');

    selected.addEventListener('click', function () {
      optionsContainer.style.display = optionsContainer.style.display === 'block' ? 'none' : 'block';
    });

    searchInput.addEventListener('input', function () {
      const searchValue = this.value.toLowerCase();
      checkboxes.forEach(checkbox => {
        const label = checkbox.parentElement;
        if (label.textContent.toLowerCase().includes(searchValue)) {
          label.style.display = '';
        } else {
          label.style.display = 'none';
        }
      });
    });

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function () {
        updateSelectedOptions(dropdown);
      });
    });

    function updateSelectedOptions(dropdown) {
      const selectedOptions = dropdown.querySelector('.dropdown-selected');
      const checkedBoxes = dropdown.querySelectorAll('input[type="checkbox"]:checked');
      const selectedLabels = Array.from(checkedBoxes).map(cb => cb.parentElement.textContent.trim());
      const selectedContainer = document.createElement('div');
      selectedContainer.className = 'selected-options';
      selectedLabels.forEach(label => {
        const span = document.createElement('span');
        span.textContent = label;
        selectedContainer.appendChild(span);
      });
      selectedOptions.innerHTML = 'Select options';
      selectedOptions.appendChild(selectedContainer);
      optionsContainer.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('form');
  var pageAlert = document.getElementById('page-alert');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and changing the URL
    form.reset(); // Reset the form inputs
    showPageAlert(); // Show the page alert
  });

  function showPageAlert() {
    pageAlert.style.display = 'block';
    setTimeout(function() {
      pageAlert.style.display = 'none';
    }, 3000);
  }

  var dropdown = document.querySelector('.multi-select-dropdown');
  var selectedOptionsContainer = dropdown.querySelector('.selected-options');
  var dropdownSelected = dropdown.querySelector('.dropdown-selected');
  var dropdownOptions = dropdown.querySelector('.dropdown-options');
  var searchInput = dropdown.querySelector('.dropdown-search');

  dropdownSelected.addEventListener('click', function() {
    dropdownOptions.style.display = dropdownOptions.style.display === 'block' ? 'none' : 'block';
  });

  searchInput.addEventListener('input', function() {
    var filter = searchInput.value.toLowerCase();
    var labels = dropdownOptions.querySelectorAll('label');
    labels.forEach(function(label) {
      if (label.textContent.toLowerCase().includes(filter)) {
        label.style.display = 'block';
      } else {
        label.style.display = 'none';
      }
    });
  });

  dropdownOptions.addEventListener('change', function(event) {
    if (event.target.tagName.toLowerCase() === 'input' && event.target.type === 'checkbox') {
      updateSelectedOptions();
    }
  });

  function updateSelectedOptions() {
    var selectedOptions = dropdownOptions.querySelectorAll('input[type="checkbox"]:checked');
    selectedOptionsContainer.innerHTML = '';
    selectedOptions.forEach(function(option) {
      var span = document.createElement('span');
      span.textContent = option.value;
      selectedOptionsContainer.appendChild(span);
    });
    dropdownOptions.style.display = 'none';
  }
});
