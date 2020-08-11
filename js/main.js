$(function () {
  $(".ham").on("click", function () {
    $(".menu__list").slideToggle();
  });

  $(".auto__inner-slider, .edge__inner-slider").slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
  });

  $(function () {
    $(".acc__title").click(function (j) {
      var dropDown = $(this).closest(".acc__card").find(".acc__panel");
      $(this).closest(".acc").find(".acc__panel").not(dropDown).slideUp();

      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(this)
          .closest(".acc")
          .find(".acc__title.active")
          .removeClass("active");
        $(this).addClass("active");
      }

      dropDown.stop(false, true).slideToggle();
      j.preventDefault();
    });
  });

  $(function () {
    $('a[href^="#"]').on("click", function (event) {
      event.preventDefault();
      var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
      $("html, body").animate({ scrollTop: dn }, 1000);
    });
  });

  $(".slick-dots li button").empty();

  var $range = $(".js-range"),
    $input = $(".js-input"),
    instance,
    min = 1,
    max = 5;

  $range.ionRangeSlider({
    min: min,
    max: max,
    from: 2,
    onStart: function (data) {
      $input.prop("value", data.from);
    },
    onChange: function (data) {
      $input.prop("value", data.from);
    },
  });

  instance = $range.data("ionRangeSlider");

  $input.on("change keyup", function () {
    var val = $(this).prop("value");

    if (val < min) {
      val = min;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      from: val,
    });
  });

  const ajaxSend = (formData) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => alert("Сообщение отправлено"))
      .catch((error) => console.error(error));
  };

  const forms = document.querySelector("form");
  // for (let i = 0; i < forms.length; i++) {
  //   forms[i].addEventListener("submit", function (e) {
  //     e.preventDefault();

  //     let formData = new FormData(this);
  //     formData = Object.fromEntries(formData);

  //     ajaxSend(formData);
  //     this.reset();
  //   });
  // }

  document.forms["form-contact"].addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = document.querySelectorAll("input");

    const message = {
      loading: "images/spinner.svg",
      success: "Спасибо! С вами скоро свяжуться",
      error: "Что-то пошло не так...",
    };

    const contact = {
      name: document.forms["form-contact"].name.value,
      phone: document.forms["form-contact"].phone.value,
    };
    async function postData(url = "", data = {}) {
      Loader = document.createElement("img");
      Loader.src = message.loading;
      formContactError.append(Loader);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return await response.json(); // parses JSON response into native JavaScript objects
    }

    const clearInputs = () => {
      inputs.forEach((item) => {
        item.value = "";
      });
    };

    postData("https://jsonplaceholder.typicode.com/posts", { contact })
      .then(() => {
        formContactError.innerHTML = message.success;
        setTimeout(() => {
          formContactError.innerHTML = "";
        }, 3000);
      })
      .catch(() => {
        formContactError.innerHTML = message.error;
        setTimeout(() => {
          formContactError.innerHTML = "";
        }, 3000);
      })
      .finally(() => {
        clearInputs();
      });

    // fetch().then(() => {
    //   formContactError.innerHTML = "Te12312st";

    // }).catch(() => {
    //   formContactError.innerHTML = "Te12312st";

    // })

    // console.log(data);
  });
});
(function(){

  var rol = document.querySelector('.rol');
  var innerItem = document.querySelectorAll('.auto__inner-item');
  innerItem.forEach((item) =>{
    item.addEventListener('mouseover', () =>{
        rol.style.left = (item.getBoundingClientRect().left - 150) +'px';
    })
  })

})();
(function(){
  var selectedAuto = document.querySelector('#select')
  var autoCalculatorView = document.querySelector('.advantages__inner-view img');
  var firstpay = document.querySelector('.first-pay')
  var montsPay = document.querySelector('.monsts-pay')
  var summ = document.querySelector('.summ')
  var creditTerm = 2;
 



  document.addEventListener('click', () => {
    var jsInputTime = document.querySelector('.irs-single');
    creditTerm = jsInputTime.textContent;
    calculate(summ.textContent)
    return creditTerm
  }
    )

  
function calculate(summ){
  firstpay.textContent = summ.replace(/[^\d;]/g, '') * 6.5 / 100 + " сум";
  montsPaysumm = (((summ.replace(/[^\d;]/g, '') - 
  summ.replace(/[^\d;]/g, '') * 6.5 / 100) / creditTerm) + '').split('.')

  console.log(montsPaysumm[0])
 console.log(montsPaysumm)
  montsPay.textContent = montsPaysumm[0] + ' сум'

}
calculate('100000 сум')

  selectedAuto.addEventListener('click', () => {
       if(selectedAuto.value == 1){
       summ.textContent = '100000 сум'
        calculate(summ.textContent)

     setOpacity(autoCalculatorView)  
      autoCalculatorView.src = './images/malibu.jpg'
    } else if(selectedAuto.value == 2){

      
      summ.textContent = '50000 сум'
      calculate(summ.textContent)


      autoCalculatorView.src = './images/lacetti.jpg'
      setOpacity(autoCalculatorView)


    } else if(selectedAuto.value == 3){

      summ.textContent = '80000 сум'
      calculate(summ.textContent)
      autoCalculatorView.src = './images/nexia.jpg'
      setOpacity(autoCalculatorView)
    } else if(selectedAuto.value == 4){

      summ.textContent = '70000 сум'
      calculate(summ.textContent)

      autoCalculatorView.src = './images/Cobalt.jpg'
      setOpacity(autoCalculatorView)
    } else if(selectedAuto.value == 5){
      summ.textContent = '35000 сум'
      calculate(summ.textContent)

      autoCalculatorView.src = './images/spark.jpg'
      setOpacity(autoCalculatorView)
    }
  })
  function setOpacity(el) {
    autoCalculatorView.style.opacity = 0;
    var op = 0;
    while (op <= 1) {
        (function(_op) {
            setTimeout(function() { el.style.opacity = _op; }, 60 + op * 600);
        })(op);
        op += 0.1;
    }
}



  
})();