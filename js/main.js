WebFont.load({
  google: {
    families: ["Montserrat:400,500,600,700,800,900:cyrillic"]
  }
});

$(document).ready(function($) {
  var isMobile = false;
  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      navigator.userAgent
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      navigator.userAgent.substr(0, 4)
    )
  )
    isMobile = true;

  // $section = $('section')

  if (isMobile == false) {
    $("#pagepiling").pagepiling({
      anchors: [
        "Main",
        "Exchanges",
        "Features",
        "Coininfo",
        "RoadMap",
        "For",
        "Support",
        "Team",
        "Price"
      ],
      menu: ".menu-list",
      direction: "vertical",
      sectionSelector: ".section",
      // loopBottom: true,
      // css3: false,
      scrollingSpeed: 200,
      verticalCentered: true,
      navigation: {
        bulletsColor: "rgba(132, 142, 156, .15)",
        position: "left"
        // 'tooltips': ['section1', 'section2', 'section3', 'section4']
      },
      onLeave: function(index, nextIndex, direction) {
        // console.log(nextIndex)
        $(".link--logo img").toggleClass("rotate");

        $(".section.active")
          .find(".anim")
          .addClass("animated fadeInUp");

        if (nextIndex == 2 || nextIndex == 5) {
          // console.log('2')
          $(".header").addClass("custom");
          $("#pp-nav").addClass("custom");
        } else {
          $(".header").removeClass("custom");
          $("#pp-nav").removeClass("custom");
        }
      },
      afterLoad: function(anchorLink, index) {},
      afterRender: function() {
        $(".section.active")
          .find(".animl")
          .addClass("animated fadeInLeft");
        $(".table-scroll").mCustomScrollbar({
          theme: "dark"
        });
        $(".faq-items").mCustomScrollbar({
          theme: "dark"
        });
        $("body").addClass("load");
      }
    });
  } else {
    $("body").addClass("load");
    $(".link--menu").on("click", function(event) {
      event.preventDefault();
      if (
        $(this)
          .parent()
          .attr("data-menuanchor")
      ) {
        var id = $(this)
            .parent()
            .attr("data-menuanchor"),
          top = $("[data-anchor=" + id + "]").offset().top;
        $("body,html").animate(
          {
            scrollTop: top - 30
          },
          800
        );
        $(".menu-list").removeClass("open");
        $(".link--toggle").removeClass("active");
      }
    });

    $(".link--open").on("click", function(event) {
      event.preventDefault();
      /* Act on the event */
      $(".social-links ul li:not(:last-child)").toggleClass("active");
    });
  }

  $(".link--tooltip").on("click", function(event) {
    return false;
  });

  $(".link--tooltip").hover(
    function() {
      $(".roadmap-road__item").removeClass("open");
      $(this)
        .parent()
        .addClass("open");
    },
    function() {
      $(this)
        .parent()
        .removeClass("open");
    }
  );

  $(".tooltip-block .close").on("click", function(event) {
    event.preventDefault();
    $(this)
      .parent()
      .removeClass("open");
  });

  $(".faq-item__title, .link--close").on("click", function(event) {
    event.preventDefault();
    $parent = $(this).parent();
    $content = $parent.find(".faq-item__content");
    $parent
      .toggleClass("active")
      .siblings()
      .removeClass("active");
    $parent
      .siblings()
      .find(".faq-item__content")
      .slideUp(400);
    $content.slideToggle(400);
  });

  function animateCss(element, animationName, callback) {
    const node = document.querySelector(element);
    // node.style.position = "absolute";
    node.classList.add("animated", "faster", animationName);

    function handleAnimationEnd() {
      node.classList.remove("animated", "faster", animationName);
      node.removeEventListener("animationend", handleAnimationEnd);

      if (typeof callback === "function") callback();
    }

    node.addEventListener("animationend", handleAnimationEnd);
  }

  wrapper = $(".wrapper");
  marginLeftWrapper = parseInt(wrapper.css("marginLeft"));
  paddingLeftWrapper = parseInt(wrapper.css("paddingLeft"));

  var sliderFeatures = new Swiper(".features-slider", {
    speed: 800,
    loop: true,
    slidesPerView: 4,
    normalizeSlideIndex: false,
    spaceBetween: 20,

    slideToClickedSlide: true
  });

  var sliderTeam = new Swiper(".team-slider", {
    speed: 800,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".team-next",
      prevEl: ".team-prev"
    },
    pagination: {
      el: ".team-dot",
      type: "bullets"
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 30
      }
    }
  });

  var sliderFeaturesBig = new Swiper(".features-big", {
    speed: 800,

    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 20,
    loop: true,
    loopedSlides: 4,
    pagination: {
      el: ".features-pagination",
      type: "bullets"
    }
  });

  sliderFeaturesBig.controller.control = sliderFeatures;
  sliderFeatures.controller.control = sliderFeaturesBig;

  var sliderSupport = new Swiper(".support-work", {
    speed: 800,
    slidesPerView: 7,
    grabCursor: true,
    normalizeSlideIndex: false,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 2000
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 30
      }
    }
  });

  $(".link--toggle").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $(".menu-list").toggleClass("open");
  });

    $('.language-select').click(function(){
  $(this).toggleClass('open');

})

$('.language-select li').click(function(){    
  $('ul li').removeClass('active');
  lang = $(this).data('lang')
  if (lang == 'cn') {
    window.location = 'https://cn.oneexbit.com/'
  } else if (lang == 'kr') {
    window.location = 'https://kr.oneexbit.com/'
  } else {
    window.location = 'https://oneexbit.com/'
  }
  $(this).toggleClass('active');
})
  
});
