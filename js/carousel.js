$('.gallery').slick({
  autoplay: true,
  arrows: false,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1920,
      settings: "unslick"
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
       
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('.about-us__gallery').slick({
  autoplay: true,
  arrows: false,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1920,
      settings: "unslick"
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});