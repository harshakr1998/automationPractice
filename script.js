"use strict";

// Custom JS for features
document.addEventListener("DOMContentLoaded", function () {
  // 1️⃣ Show Alert Button
  document.getElementById("alert-btn").addEventListener("click", function () {
    console.log("here");
    alert("Hello! This is an alert message.");
  });

  // 2️⃣ Toggle Disable Button
  document
    .getElementById("toggle-button")
    .addEventListener("click", function () {
      this.disabled = true;
      setTimeout(() => {
        this.disabled = false;
        alert("Button enabled again!");
      }, 3000);
    });

  // 3️⃣ Delete Element Button
  document
    .getElementById("delete-button")
    .addEventListener("click", function () {
      let element = document.getElementById("delete-target");
      if (element) {
        if (confirm("Are you sure you want to delete this element?")) {
          element.remove();
          alert("Element deleted!");
        }
      } else {
        alert("Element is already deleted.");
      }
    });

  // 4️⃣ Log to Console Button
  document.getElementById("log-button").addEventListener("click", function () {
    console.log("Button clicked at " + new Date().toLocaleTimeString());
  });

  // 5️⃣ Submit Form Button (Simulated)
  document
    .getElementById("submit-button")
    .addEventListener("click", function () {
      alert("Form submitted successfully!");
    });

  // 6️⃣ Download File Button
  document
    .getElementById("download-button")
    .addEventListener("click", function () {
      let text = "Sample file content for download.";
      let blob = new Blob([text], { type: "text/plain" });
      let link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "sample.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });

  // 7️⃣ Floating Action Button (Opens Modal)
  document.getElementById("fab-button").addEventListener("click", function () {
    let modal = new bootstrap.Modal(document.getElementById("custom-modal"));
    modal.show();
  });
});

//  Dropdown Feature

document.addEventListener("DOMContentLoaded", function () {
  // Access dropdown and display paragraph
  const carDropdown = document.getElementById("cars");
  const selectedCarText = document.getElementById("selected-car");

  // Display selected car on change
  carDropdown.addEventListener("change", function () {
    const selectedCar = carDropdown.options[carDropdown.selectedIndex].text;
    selectedCarText.textContent = `You have selected: ${selectedCar}`;
  });

  // Set initial text for pre-selected option
  const initialCar = carDropdown.options[carDropdown.selectedIndex].text;
  selectedCarText.textContent = `You have selected: ${initialCar}`;
});

document.addEventListener("DOMContentLoaded", function () {
  const loadDataButton = document.getElementById("load-data");
  const dataContainer = document.getElementById("data-container");

  // Sample data to load dynamically
  const sampleData = [
    { name: "John Doe", age: 28, city: "New York" },
    { name: "Jane Smith", age: 34, city: "Los Angeles" },
    { name: "Emma Watson", age: 26, city: "London" },
  ];

  // Function to load data into the container
  function loadData() {
    // Clear any existing content
    dataContainer.innerHTML = "";

    // Create a list to display the data
    const list = document.createElement("ul");

    // Loop through the sample data and create list items
    sampleData.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<strong>Name:</strong> ${item.name}, <strong>Age:</strong> ${item.age}, <strong>City:</strong> ${item.city}`;
      list.appendChild(listItem);
    });

    // Append the list to the data container
    dataContainer.appendChild(list);
  }

  // Add event listener to the button to load data when clicked
  loadDataButton.addEventListener("click", loadData);
});

document.addEventListener("DOMContentLoaded", function () {
  // Get table headers and table body
  const nameHeader = document.getElementById("name-header");
  const ageHeader = document.getElementById("age-header");
  const cityHeader = document.getElementById("city-header");
  const table = document.getElementById("sample-table");
  const rows = Array.from(table.querySelectorAll("tbody tr"));

  // Sort rows based on a given column index
  function sortTable(columnIndex, isNumeric = false) {
    const sortedRows = rows.sort((rowA, rowB) => {
      const cellA = rowA.children[columnIndex].textContent;
      const cellB = rowB.children[columnIndex].textContent;

      if (isNumeric) {
        return parseInt(cellA) - parseInt(cellB);
      } else {
        return cellA.localeCompare(cellB);
      }
    });

    // Reorder table rows
    const tbody = table.querySelector("tbody");
    tbody.innerHTML = "";
    sortedRows.forEach((row) => tbody.appendChild(row));
  }

  // Add click event listeners for sorting
  nameHeader.addEventListener("click", function () {
    sortTable(0);
  });
  ageHeader.addEventListener("click", function () {
    sortTable(1, true);
  });
  cityHeader.addEventListener("click", function () {
    sortTable(2);
  });
});

// Alert, Confirm, and Prompt buttons
document.addEventListener("DOMContentLoaded", function () {
  // Button to show a simple alert
  const alertBtn = document.getElementById("alert-btn");
  alertBtn.addEventListener("click", function () {
    // Display a simple alert box
    alert("This is an alert message!");
  });
});

// Button to show a confirm dialog
const confirmBtn = document.getElementById("confirm-button");
confirmBtn.addEventListener("click", function () {
  // Display a confirm box and handle user response
  const userConfirmed = confirm("Do you confirm this action?");
  if (userConfirmed) {
    alert("You confirmed the action!");
  } else {
    alert("You cancelled the action.");
  }
});

// Button to show a prompt dialog
const promptBtn = document.getElementById("prompt-button");
promptBtn.addEventListener("click", function () {
  // Display a prompt box and capture user input
  const userInput = prompt("Please enter your name:");
  if (userInput !== null && userInput !== "") {
    alert("Hello, " + userInput + "!");
  } else {
    alert("You didn't enter anything.");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Sliders Section
  const rangeSlider = document.getElementById("range-slider");
  const sliderValue = document.getElementById("slider-value");
  rangeSlider.addEventListener("input", function () {
    sliderValue.textContent = rangeSlider.value;
  });

  // Date Pickers Section
  const dateInput = document.getElementById("date");
  dateInput.addEventListener("change", function () {
    console.log("Selected Date: " + dateInput.value);
  });

  // File Uploads Section
  const fileInput = document.getElementById("file-upload");
  fileInput.addEventListener("change", function () {
    const fileName = fileInput.files[0]
      ? fileInput.files[0].name
      : "No file selected";
    console.log("Selected File: " + fileName);
  });

  // Progress Bars Section
  const progressBar = document.getElementById("progress-bar");
  const progressValue = document.getElementById("progress-value");

  // Example: Update progress bar value
  let progress = 50; // Initial progress value
  const interval = setInterval(function () {
    if (progress < 100) {
      progress += 5; // Increment the progress
      progressBar.value = progress;
      progressValue.textContent = progress + "%";
    } else {
      clearInterval(interval); // Stop when 100% is reached
    }
  }, 500); // Update progress every 0.5s
});

document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Toggle the active class for each button
      accordionButtons.forEach((btn) => {
        if (btn !== button) {
          btn.classList.remove("active");
          btn.setAttribute("aria-expanded", "false");
        }
      });
      button.classList.toggle("active");
      const isExpanded = button.classList.contains("active");
      button.setAttribute("aria-expanded", isExpanded);
    });
  });
});

// Tabs Functionality
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab");

      // Remove 'active' class from all buttons and panes
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabPanes.forEach((pane) => pane.classList.remove("active"));

      // Add 'active' class to the clicked button and the corresponding tab content
      this.classList.add("active");
      const targetPane = document.getElementById(targetTab);
      targetPane.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the elements
  const dragItem = document.getElementById("drag-item");
  const dropZone = document.getElementById("drop-zone");

  // When dragging starts
  dragItem.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id); // Set the ID of the item being dragged
    e.target.style.opacity = "0.5"; // Optional: Add visual feedback during dragging
  });

  // When dragging ends
  dragItem.addEventListener("dragend", (e) => {
    e.target.style.opacity = "1"; // Reset the visual feedback after dragging
  });

  // Allow the drop (dragover event)
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault(); // This is necessary to allow a drop
    dropZone.classList.add("drag-over"); // Add a class to style the drop zone while dragging over
  });

  // Handle the drop event
  dropZone.addEventListener("drop", (e) => {
    e.preventDefault(); // Prevent the default action (e.g., opening a file link)
    const draggedElement = document.getElementById(
      e.dataTransfer.getData("text/plain")
    ); // Get the dragged item
    dropZone.appendChild(draggedElement); // Append the dragged item to the drop zone
    dropZone.classList.remove("drag-over"); // Remove the hover effect
  });

  // Reset drop-zone styles when the drag leaves
  dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("drag-over");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollContent = document.getElementById("scroll-content");

  // Variables to track pagination or data fetching
  let currentPage = 1;
  const dataPerPage = 5; // Number of items to fetch per page

  // Function to fetch data from an external API
  async function fetchData(page) {
    const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${dataPerPage}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      // Process the data and append it to the content area
      data.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("scroll-item");
        div.innerHTML = `
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        `;
        scrollContent.appendChild(div);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // Function to check if the user is at the bottom of the page
  function checkScroll() {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.innerHeight + window.scrollY;

    if (scrollHeight === scrollPosition) {
      // User reached the bottom of the page, load more data
      currentPage++;
      fetchData(currentPage);
    }
  }

  // Initial data load
  fetchData(currentPage);

  // Check scroll position on each scroll event
  window.addEventListener("scroll", checkScroll);
});

//Pagiatio
document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.querySelector("#paginated-table tbody");
  const paginationControls = document.querySelector("#pagination-controls");

  let currentPage = 1;
  const dataPerPage = 5; // Number of records per page
  const totalPages = 10; // Example: Set the total pages to 10 for demonstration

  // Function to fetch and display data
  async function fetchData(page) {
    // In this example, we're using a simple array as mock data
    const data = generateMockData(); // Generate mock data
    const startIndex = (page - 1) * dataPerPage;
    const endIndex = startIndex + dataPerPage;

    // Clear the previous data
    tableBody.innerHTML = "";

    // Display the data for the current page
    const pageData = data.slice(startIndex, endIndex);
    pageData.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${item.id}</td><td>${item.name}</td>`;
      tableBody.appendChild(row);
    });

    // Update pagination controls
    updatePaginationControls(page);
  }

  // Function to generate mock data
  function generateMockData() {
    const data = [];
    for (let i = 1; i <= 50; i++) {
      data.push({ id: i, name: `Item ${i}` });
    }
    return data;
  }

  // Function to update the pagination controls
  function updatePaginationControls(page) {
    paginationControls.innerHTML = "";

    // Previous Button
    const prevButton = document.createElement("button");
    prevButton.textContent = "Previous";
    prevButton.classList.add("prev");
    prevButton.disabled = page === 1;
    prevButton.addEventListener("click", () => fetchData(page - 1));
    paginationControls.appendChild(prevButton);

    // Page Number Buttons
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = i;
      if (i === page) pageButton.classList.add("active");
      pageButton.addEventListener("click", () => fetchData(i));
      paginationControls.appendChild(pageButton);
    }

    // Next Button
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.classList.add("next");
    nextButton.disabled = page === totalPages;
    nextButton.addEventListener("click", () => fetchData(page + 1));
    paginationControls.appendChild(nextButton);
  }

  // Initial data load
  fetchData(currentPage);
});

// Popover
document.addEventListener("DOMContentLoaded", function () {
  const popoverButton = document.getElementById("popover-button");
  const popoverContent = document.getElementById("popover-content");

  // Toggle popover visibility
  popoverButton.addEventListener("click", function () {
    popoverContent.classList.toggle("show");
  });

  // Close the popover if clicked outside
  document.addEventListener("click", function (event) {
    if (
      !popoverButton.contains(event.target) &&
      !popoverContent.contains(event.target)
    ) {
      popoverContent.classList.remove("show");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");
  const carouselSlide = document.querySelector(".carousel-slide");
  const totalSlides = document.querySelectorAll(".carousel-slide img").length;

  let currentIndex = 0;

  // Move to the next slide
  nextButton.addEventListener("click", function () {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  // Move to the previous slide
  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalSlides - 1;
    }
    updateCarousel();
  });

  // Update the carousel slide position
  function updateCarousel() {
    const slideWidth = carouselSlide.querySelector("img").clientWidth;
    carouselSlide.style.transform = `translateX(-${
      currentIndex * slideWidth
    }px)`;
  }
});

// -----------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("advanced-form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  function validateField(input) {
    if (input.checkValidity()) {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
    }
  }

  usernameInput.addEventListener("input", () => validateField(usernameInput));
  passwordInput.addEventListener("input", () => validateField(passwordInput));

  form.addEventListener("submit", function (event) {
    validateField(usernameInput);
    validateField(passwordInput);

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
  });
});

// Get the output div
const outputDiv = document.getElementById("cookie-storage-output");

// Set Cookie
document.getElementById("set-cookie").addEventListener("click", () => {
  document.cookie = "user=JohnDoe; max-age=3600; path=/";
  outputDiv.textContent = 'Cookie "user" has been set!';
});

// Get Cookie
document.getElementById("get-cookie").addEventListener("click", () => {
  const cookies = document.cookie;
  if (cookies) {
    outputDiv.textContent = `Cookies: ${cookies}`;
  } else {
    outputDiv.textContent = "No cookies found!";
  }
});

// Delete Cookie
document.getElementById("delete-cookie").addEventListener("click", () => {
  document.cookie = "user=; max-age=0; path=/";
  outputDiv.textContent = 'Cookie "user" has been deleted!';
});

// Set Local Storage
document.getElementById("set-local-storage").addEventListener("click", () => {
  localStorage.setItem("user", "JohnDoe");
  outputDiv.textContent = 'Local Storage "user" has been set!';
});

// Get Local Storage
document.getElementById("get-local-storage").addEventListener("click", () => {
  const user = localStorage.getItem("user");
  if (user) {
    outputDiv.textContent = `Local Storage "user": ${user}`;
  } else {
    outputDiv.textContent = "No local storage data found!";
  }
});

// Delete Local Storage
document
  .getElementById("delete-local-storage")
  .addEventListener("click", () => {
    localStorage.removeItem("user");
    outputDiv.textContent = 'Local Storage "user" has been deleted!';
  });

// JavaScript to enhance keyboard navigation experience
document.addEventListener("DOMContentLoaded", () => {
  const focusableButtons = [
    document.getElementById("focusable-button-1"),
    document.getElementById("focusable-button-2"),
    document.querySelector('a[href="#keyboard-navigation"]'),
  ];

  // Move focus between elements with the Tab key
  let currentFocusIndex = 0;

  // Set initial focus to the first button
  focusableButtons[currentFocusIndex].focus();

  // Listen for the keydown event for Tab/Shift + Tab
  document.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
      event.preventDefault(); // Prevent the default behavior of tabbing

      if (event.shiftKey) {
        // Move focus backward (Shift + Tab)
        currentFocusIndex =
          (currentFocusIndex - 1 + focusableButtons.length) %
          focusableButtons.length;
      } else {
        // Move focus forward (Tab)
        currentFocusIndex = (currentFocusIndex + 1) % focusableButtons.length;
      }

      // Move focus to the selected element
      focusableButtons[currentFocusIndex].focus();
    }
  });
});

// Select the box and buttons
const animatedBox = document.getElementById("animated-box");
const startButton = document.getElementById("start-animation");
const stopButton = document.getElementById("stop-animation");

// Function to start the animation
startButton.addEventListener("click", () => {
  animatedBox.classList.add("moving");
});

// Function to stop the animation
stopButton.addEventListener("click", () => {
  animatedBox.classList.remove("moving");
});
// -----------------------------------------------
