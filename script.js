//For navbar section - profile button dropdown
$(document).ready(function() {
  $('.user-profile').click(function(event) {
    const profileDropdown = $('.user-profile ul');
    if (profileDropdown.hasClass('profile-dropdown')) {
      profileDropdown.removeClass('profile-dropdown');
      profileDropdown.addClass('prof-dropdown-vis');
    } else {
      profileDropdown.removeClass('prof-dropdown-vis');
      profileDropdown.addClass('profile-dropdown');
    }
    event.stopPropagation();
  });
  


});

// For removing opened profile dropdown when clicked anywhere outside the profile dropdown
 $(document).click(function(event) {
    const openProfileDropdown = $('.prof-dropdown-vis');
    
      if (!$(event.target).closest('.prof-dropdown-vis').length) {
        openProfileDropdown.addClass('profile-dropdown');
        openProfileDropdown.removeClass('prof-dropdown-vis');
        
      }
    
  });










// For Categories section
// Add 'category-item-active' class to the default button
// console.log(document.getElementById("category-item-1").classList)
$("#category-item-1").addClass("category-item-active");

// Add event listener to each category button
let categoryButtons = $(".category-item");
categoryButtons.on("click", function() {
  // Remove 'category-item-active' class from all buttons
  categoryButtons.removeClass("category-item-active");

  // Add 'category-item-active' class to the clicked button
  $(this).addClass("category-item-active");
});





// //For filter section

//for rooms and beds filter
//for bedrooms
const filterNumberBtns = (filterCategory) => {
  $(document).ready(function() {
    $(`.${filterCategory}`).click(function() {
      $(`.${filterCategory}`).removeClass('num-btn-clicked').addClass('num-btn-unclicked');
      $(this).removeClass('num-btn-unclicked').addClass('num-btn-clicked');
    });
  });
}

filterNumberBtns("bedrooms-filter-btn")
//for beds filter
filterNumberBtns("beds-filter-btn")
//for bathrooms filter
filterNumberBtns("bathrooms-filter-btn")
//for ratings filter
filterNumberBtns("rating-filter-btn")




//for property filter
$(document).ready(function() {
  // console.log($('.property-filter'))
  $('.property-filter').addClass('property-filter-unclicked')
  $('.property-filter').click(function() {
    if ($(this).hasClass('property-filter-unclicked')) {
        $(this).removeClass('property-filter-unclicked').addClass('property-filter-clicked');
    } else {
        $(this).removeClass('property-filter-clicked').addClass('property-filter-unclicked');
    }
});
});

//for show places filter button
$(document).ready(function() {
  $('.show-places-btn').click(function() {
    $(this).css({
      'border': '1px solid #000',
      'background-color': '#000',
      'color': '#fff'
    });
  });
});


/* for Filter button and modal for filter section */
$(document).ready(function() {
  const openButton = $("#open-filter-btn");
  const closeButton = $("#close-filter-btn");
  const modal = $("#filter-modal");

  openButton.on("click", function() {
    modal[0].showModal(); // jQuery object to DOM element
  });

  closeButton.on("click", function() {
    modal[0].close(); // jQuery object to DOM element
  });

  modal.on("click", function(e) {
    const modalDimensions = modal[0].getBoundingClientRect(); // jQuery object to DOM element
    if (
      e.clientX < modalDimensions.left ||
      e.clientX > modalDimensions.right ||
      e.clientY < modalDimensions.top ||
      e.clientY > modalDimensions.bottom
    ) {
      modal[0].close(); // jQuery object to DOM element
    }
  });
});
