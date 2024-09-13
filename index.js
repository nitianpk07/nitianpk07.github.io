document.addEventListener('DOMContentLoaded', function () {
    const headerLinks = document.querySelector('.header-links');
    const navToggle = document.getElementById('nav-toggle');
    const verticalNavMenu = document.querySelector('.vertical-nav');

     window.addEventListener('scroll', function () {
            if(headerLinks){
              if (window.scrollY > 50) {
                  headerLinks.classList.add('on-scroll');
              } else {
                  headerLinks.classList.remove('on-scroll');
              }
            }

    });

    // hamburger menu display
    navToggle.addEventListener('change', function() {
      if (navToggle.checked) {
        verticalNavMenu.style.display = 'block';
      } else {
        verticalNavMenu.style.display = 'none';
      }
  });

    //Display desc after the name typing animation ends
    const nameElement = document.querySelector('.name');
    const descElement = document.querySelector('.desc');

    nameElement.addEventListener('animationend', function() {
        descElement.style.opacity = 1;
    });

    //View Resume
    const viewResumeIcon = document.querySelector("#view-resume");
    
    viewResumeIcon.addEventListener("click", function() {
        window.open('assets/Resume/Pankaj-Resume.pdf', '_blank');
    });

});

//toggle dark and light mode icons
document.getElementById('day-night-icons').addEventListener('click', function() {
  if (this.classList.contains('fa-moon')) {
    this.classList.remove('fa-moon');
    this.classList.add('fa-sun');
  } else {
    this.classList.remove('fa-sun');
    this.classList.add('fa-moon');
  }
});

//Download CV Button
const downloadBtn = document.getElementById('downloadBtn');
downloadBtn.addEventListener('click', function() {
 
  const downloadIcon = document.querySelector('.btn-icon i');
  downloadIcon.classList.remove('fa-solid','fa-cloud-arrow-down');
  downloadIcon.classList.add('fa-solid', 'fa-circle-check');
  downloadBtn.classList.add('on-click');

  const link = document.createElement('a');
  link.href = 'assets/Resume/Pankaj-Resume.pdf';
  link.download = 'Pankaj-Resume.pdf';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => {
    downloadIcon.classList.remove('fa-solid', 'fa-circle-check');
    downloadIcon.classList.add('fa-solid','fa-cloud-arrow-down');
    downloadBtn.classList.remove('on-click');
  }, 1000);

});

//Toggle Job Description
function toggleJobDesc(jobDescription, jobElement) {
  if (jobDescription.style.display === 'none') {
    jobDescription.style.display = 'block';
    jobElement.className = 'fa-solid fa-caret-up';
    jobDescription.classList.remove('shut-off');
  } else {
    jobDescription.classList.add('shut-off');

      setTimeout(() => {
        jobDescription.style.display = 'none';
        jobElement.className = 'fa-solid fa-caret-down';
    }, 500);
  }
}

function toggleJob(jobTitle) {
  const jobDescription = (jobTitle == 'IqviaSde3') ? 
    document.getElementById('jobDescOne') :
    document.getElementById('jobDescTwo');
  const jobElement = (jobTitle == 'IqviaSde3') ?
    document.getElementById('job-one') :
    document.getElementById('job-two');

  toggleJobDesc(jobDescription, jobElement);
}

function toggleWorkExp() {
  var icon = document.getElementById('toggleIcon');
  var workExpDivs = document.querySelectorAll('.work-experience');

  // Toggle visibility of work-exp divs
  workExpDivs.forEach(function(div) {
      if( div.style.display === 'none' || div.style.display === ''){
        div.style.display = 'block';
        icon.classList.remove('fa-square-plus');
        icon.classList.add('fa-square-minus');
        div.classList.remove('fade-out');
      } else {
        div.classList.add('fade-out');
        setTimeout(() => {
          div.style.display = 'none';
          icon.classList.remove('fa-square-minus');
          icon.classList.add('fa-square-plus');
      }, 500);
      }
  });
}

function handleSubmit() {
  event.preventDefault();
  console.log('submit');

  const submitButton = document.getElementById('submitButton');
  submitButton.classList.add('success');
  submitButton.innerHTML = '';
  
  setTimeout(() => {
    submitButton.classList.remove('success');
    submitButton.innerHTML = 'Submit';
  }, 800); 
}