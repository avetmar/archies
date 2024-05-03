$(document).ready(function(){
    $('.carousel').slick({
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        arrows: false
      });

    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
      }).done(function() {
          $(this).find("input").val("");
          // $('#consultation, #order').fadeOut();
          // $('.overlay, #thanks').fadeIn('slow');

          $('form').trigger('reset');
      });
      return false;
    });
  });