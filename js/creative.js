(function ($) {
  "use strict"; // Start of use strict

  let filter = "win32|win64";
  if (navigator.platform) {
    if (filter.indexOf(navigator.platform.toLowerCase()) < 0) { 
      //mobile
      document.getElementById("share-button").style.display = "block"; 
    } 
    else { 
      //pc 
      
      document.getElementById("store-button").style.display = "block";
    }
  }

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  $(".youtube-popup").grtyoutube();
  var header = document.getElementById('play_video'); // header 객체에 onclick 이벤트 속성을 연결 
  header.onclick = function() { 
    gtag('event', 'play_video', {
      'event_category': 'button'
    })
  }



  $('.carousel-posts').owlCarousel({
    autoplay: false,
    autoHeight: true,
    center: false,
    loop: false,
    items: 1,
    margin: 30,
    stagePadding: 0,
    nav: false,
    dots: true,
    navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });

  $('.popup-img').popupimg();

  document.querySelector('#share').addEventListener('click', WebShare);
})(jQuery); // End of use strict


async function WebShare() {
  if (navigator.share === undefined) {
    return;
  }

  const title = "CCPatents";
  const text = "무료 특허 검색 소프트웨어";
  const url = "https://www.ccpatents.net";
  try {
    await navigator.share({
      title,
      text,
      url
    });
  } catch (error) {
    return;
  }
}