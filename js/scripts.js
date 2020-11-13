  window.addEventListener('load', function(){
    // Glider Slider Cards
    new Glider(document.querySelector('.glider'), {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      dots: '.dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      }, 
      responsive: [
        {
          // screens greater than >= 600px
          breakpoint: 600,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '1',
          }
        },{
          // screens greater than >= 850px
          breakpoint: 850,
          settings: {
            slidesToShow: '3',
            slidesToScroll: 1,
          }
        }
        ,{
          // screens greater than >= 1100px
          breakpoint: 1100,
          settings: {
            slidesToShow: '4',
            slidesToScroll: 1,
          }
        }
      ]
    })
  });
  
  $(document).ready(function(){
    // sidenav
    $('.sidenav').sidenav();
    // scrollSpy
    $('.scrollspy').scrollSpy( {
      scrollOffset: 20
    });
    // scroll to
    $(".the-card").click(function (){
      $('html, body').animate({
          scrollTop: $("#resultado").offset().top
      }, 500);
    });
    
    // cards Home
    $("#card-digestivo").on("click", function(){
      $(".container-resultado").delay(2000).load('inc/digestivo.html');
      
    });
    $("#card-prevencion").on("click", function(){
      $(".container-resultado").load('inc/prevencion.html');
    });
    
    $("#card-huesos").on("click", function(){
      $(".container-resultado").load('inc/huesos.html');
      
    });
    $("#card-cardio").on("click", function(){
      $(".container-resultado").load('inc/cardio.html');
      
    });
    $("#card-femenina").on("click", function(){
      $(".container-resultado").load('inc/femenina.html');
      
    });
    $("#card-masculina").on("click", function(){
      $(".container-resultado").load('inc/masculina.html');
      
    });
    $("#card-memoria").on("click", function(){
      $(".container-resultado").load('inc/memoria.html');
      
    });
    $("#card-energia").on("click", function(){
      $(".container-resultado").load('inc/energia.html');
    });

    $("#card-dieta").on("click", function(){
      $(".container-resultado").load('inc/dieta.html');
      
    });
    $("#card-antioxidante").on("click", function(){
      $(".container-resultado").load('inc/antioxidantes.html');
      
    });
    $("#card-relajacion").on("click", function(){
      $(".container-resultado").load('inc/relajacion.html');
    });

    // Categorias
    $(".cat-prevencion").on("click", function(){
      $(".container-sabana").load('cat/cat-prevencion.html');
    });
    $(".cat-digestivo").on("click", function(){
      $(".container-sabana").load('cat/cat-digestivo.html');
    });
    $(".cat-huesos").on("click", function(){
      $(".container-sabana").load('cat/cat-huesos.html');
    });
    $(".cat-cardio").on("click", function(){
      $(".container-sabana").load('cat/cat-cardio.html');
    });
    $(".cat-femenina").on("click", function(){
      $(".container-sabana").load('cat/cat-femenina.html');
    });
    $(".cat-masculina").on("click", function(){
      $(".container-sabana").load('cat/cat-masculina.html');
    });
    $(".cat-memoria").on("click", function(){
      $(".container-sabana").load('cat/cat-memoria.html');
    });
    $(".cat-energia").on("click", function(){
      $(".container-sabana").load('cat/cat-energia.html');
    });
    $(".cat-dieta").on("click", function(){
      $(".container-sabana").load('cat/cat-dieta.html');
    });
    $(".cat-antioxidantes").on("click", function(){
      $(".container-sabana").load('cat/cat-antioxidantes.html');
    });
    $(".cat-relajacion").on("click", function(){
      $(".container-sabana").load('cat/cat-relajacion.html');
    });
    $(".cat-todo").on("click", function(){
      $(".container-sabana").load('cat/cat-todo.html');
    });
    
 
    // ZOOM Producto Ficha 
    // $(".img-ficha").attr("src", "img/home-fishoil.png");
    $(".img_miniatura").on("click", function(){
      buscar = $(this).attr("src");
      $(".img-ficha").attr("src", buscar).blowup({
        background : "transparent",
        scale      : 1.1,
        width      : 400,
        height     : 400,
      });
    })
    
    
  });

    // Swiper Resultado
    var swiper = new Swiper('.slider-resultado', {
      slidesPerView: 1,
      spaceBetween: 10,
      freeMode: true,
      loop: true,
      navigation: {
        nextEl: '.icon-navigate_next',
        prevEl: '.icon-navigate_before',
      },
      autoplay: {
        delay: 1000,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }
    });

    // Slider Header
    var swiper = new Swiper('.swiper-header', {
      autoplay: {
        delay: 2000,
      },
      spaceBetween: 500,
      effect: 'fade',
    });








