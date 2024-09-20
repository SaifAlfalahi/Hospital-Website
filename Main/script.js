//Department Filter
function filterDepartments(department) {
  var departments = document.querySelectorAll('.department');

  departments.forEach(function(dept) {
      if (dept.id.toLowerCase() === department || department === 'all') {
          dept.style.display = '';
      } else {
          dept.style.display = 'none';
      }
  });
}

document.querySelectorAll('.filter-btn').forEach(function(button) {
  button.addEventListener('click', function() {
      filterDepartments(this.getAttribute('data-department'));
  });
});

// Toggle sidebar
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', function() {
    document.body.classList.toggle('sidebar-open');
});

//close sidebar when navbar is used
const navLinks = document.querySelectorAll('#nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('sidebar-open');
    });
});

//Expand Hospital Description
function toggleDetails(element) {
  var isExpanded = element.classList.contains('expanded');
  var allItems = document.querySelectorAll('.hospital-item');
  allItems.forEach(function(item) {
      item.classList.remove('expanded');
  });
  // Expand the current item if it was not already expanded
  if (!isExpanded) {
      element.classList.add('expanded');
  }
}

// Customer Review Carousel
var currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const totalSlides = slides.length;

document.querySelector('.prev').addEventListener('click', () => {
    moveToPrevSlide();
});

document.querySelector('.next').addEventListener('click', () => {
    moveToNextSlide();
});

function updateSlides() {
    for (var slide of slides) {
        slide.style.display = 'none';
    }
    slides[currentSlide].style.display = 'block';
}

function moveToNextSlide() {
    if (currentSlide === totalSlides - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    updateSlides();
}

function moveToPrevSlide() {
    if (currentSlide === 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide--;
    }
    updateSlides();
}