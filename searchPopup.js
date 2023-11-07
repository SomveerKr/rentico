$(document).ready(() => {
  // Click event for searchForm-attr-container
  $('.searchForm-attr-container').click(function() {
    $('.searchForm-attr-container').removeClass('attr-box-clicked');
    $(this).addClass('attr-box-clicked');
  });

  // Click events for tabs
  $('#location').click(function() {
    $('#location-section').show();
    $('#days-section, #guests-section').hide();
  });

  $('#days').click(function() {
    $('#location-section, #guests-section').hide();
    $('#days-section').show();
  });

  $('#guests').click(function() {
    $('#location-section, #days-section').hide();
    $('#guests-section').show();
  });

  // SearchPopup Modal
 
  $('#open-searchPopup-big').click(function() {
    $('#search-popup').get(0).showModal();
  });
  $('#open-searchPopup-sm').click(function() {
    $('#search-popup').get(0).showModal();
  });

  $('#close-searchPopup').click(function() {
    $('#search-popup').get(0).close();
  });

  // Close modal when clicking outside
  $('#search-popup').click(function(e) {
    const modalDimensions = $(this).get(0).getBoundingClientRect();
    if (
      e.clientX < modalDimensions.left ||
      e.clientX > modalDimensions.right ||
      e.clientY < modalDimensions.top ||
      e.clientY > modalDimensions.bottom
    ) {
      $(this).get(0).close();
    }
  });
});



// For selecting region
$(document).ready(function() {
  $(".reg-img-card").click(function() {
    if ($(this).hasClass("reg-img-click")) {
      $(this).removeClass("reg-img-click").addClass("reg-img-unclick");
    } else {
      $(this).removeClass("reg-img-unclick").addClass("reg-img-click");
    }
    $(".reg-img-card").not(this).removeClass("reg-img-click");
  });
});

// For increasing decresing guests
// For Adults
$(document).ready(function() {
  var numberDisplay = $("#a-guests");
  var currentValue = 0;

  $("#a-plus-btn").click(function() {
      currentValue++;
      numberDisplay.text(currentValue);
  });

  $("#a-minus-btn").click(function() {
      if (currentValue > 0) {
          currentValue--;
          numberDisplay.text(currentValue);
      }
  });
});
//For Children
$(document).ready(function() {
  var numberDisplay = $("#c-guests");
  var currentValue = 0;

  $("#c-plus-btn").click(function() {
      currentValue++;
      numberDisplay.text(currentValue);
  });

  $("#c-minus-btn").click(function() {
      if (currentValue > 0) {
          currentValue--;
          numberDisplay.text(currentValue);
      }
  });
});
//For Infants
$(document).ready(function() {
  var numberDisplay = $("#i-guests");
  var currentValue = 0;

  $("#i-plus-btn").click(function() {
      currentValue++;
      numberDisplay.text(currentValue);
  });

  $("#i-minus-btn").click(function() {
      if (currentValue > 0) {
          currentValue--;
          numberDisplay.text(currentValue);
      }
  });
});

// For selecting pets
$(document).ready(function() {
  $(".pets-btn").click(function() {
    if ($(this).hasClass("pets-btn-click")) {
      $(this).removeClass("pets-btn-click").addClass("pets-btn-unclick");
    } else {
      $(this).removeClass("pets-btn-unclick").addClass("pets-btn-click");
    }
    $(".pets-btn").not(this).removeClass("pets-btn-click");
  });
});