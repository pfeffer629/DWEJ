var dollarAmount;
var firstName;
var lastName;
var addressLine1;
var addressLine2;
var zipCode;
var city;
var state;
var homePhone;

$(document).ready(function() {

  $(".amount-submit").click(function(event){
    if ($('.editable-value:checked').length > 0){
      dollarAmount = $('.editable-amount').val()
      $(".donate-button").val("DONATE $" + dollarAmount)
    }
    else if ($('input[name=dollarAmount]:checked')) {
      dollarAmount = $('input[name=dollarAmount]:checked').val();
      $(".donate-button").val("DONATE $" + dollarAmount)
    }

    if (dollarAmount){
      $(".amount-container").fadeOut(function(){
        $(".details-container").fadeIn();
      })

      $(".header-nav li:first-child div").css({"border": "none", "color": "#CED3DE"});
      $(".header-nav li:nth-child(2) div").css({"border-bottom": "2px solid #4A90E2", "color": "#4A90E2"});
    }
  })

  $(".details-back-button").click(function(event){
    $(".details-container").fadeOut(function(){
      $(".amount-container").fadeIn();
    })

    $(".header-nav li:first-child div").css({"border-bottom": "2px solid #4A90E2", "color": "#4A90E2"});
    $(".header-nav li:nth-child(2) div").css({"border": "none", "color": "#CED3DE"});
  })

  $("select").change(function() {
    $("select").css('color','#4A4A4A')
  })

  $('.details').submit(function(e){
    e.preventDefault();
  })

  $(".next-step-button").click(function(event){
    firstName = $('input[name=firstName]').val();
    lastName = $('input[name=lastName]').val();
    addressLine1 = $('input[name=addressLine1]').val();
    addressLine2 = $('input[name=addressLine2]').val();
    zipCode = $('input[name=zipCode]').val();
    city = $('input[name=city]').val();
    state = $('select').val();
    homePhone = $('input[name=homePhone]').val();

    if (firstName && lastName && addressLine1 && zipCode && city && homePhone){
      $(".details-container").fadeOut(function(){
        $(".payment-container").fadeIn();
      })

      $(".header-nav li:nth-child(2) div").css({"border": "none", "color": "#CED3DE"});
      $(".header-nav li:nth-child(3) div").css({"border-bottom": "2px solid #4A90E2", "color": "#4A90E2"});
    }

  })

  $(".payment-back-button").click(function(event){
    $(".payment-container").fadeOut(function(){
      $(".details-container").fadeIn();
    })

    $(".header-nav li:nth-child(2) div").css({"border-bottom": "2px solid #4A90E2", "color": "#4A90E2"});
    $(".header-nav li:nth-child(3) div").css({"border": "none", "color": "#CED3DE"});
  })

  // inputMask
  $("input[name=homePhone").inputmask({
    mask: "(999) 999-9999",
    showMaskOnHover: false
  });

  $('input[name=cardNumber]').payment('formatCardNumber');
  $('input[name=expiration]').payment('formatCardExpiry');
  $('input[name=cvc]').payment('formatCardCVC');

  $('.editable-amount').click(function(event){
    $('.wide-dollar-amount input[type=radio]').prop('checked', true)
  })

  // Input field animation
  $('.field-container input').focus(function(){
    $(this).animate({
      'padding-top':12
    }, "slow");
    $(this).parent().parent().find('label').fadeIn();
  })

  $('.field-container input').focusout(function(){
    if ($(this).val() == "") {
      $(this).animate({
        'padding-top':0
      }, "slow");
      $(this).parent().parent().find('label').fadeOut();
    }
  })
})