import jQuery from "jquery";
// import "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";

console.log('there is');

jQuery(function() {

  let $navListItem  = $('.b-nav__li');
  let $navCloseIcon = $('.b-nav__dropdown-menu-close');

  $navListItem.on('click', function() {
    console.log( $(this).data('nav-item') )
    $navListItem.removeClass('b-nav__li_state-active');
    $(this).addClass('b-nav__li_state-active');
    $('.b-nav__dropdown-block').removeClass('b-nav__dropdown-block_state-active');
    $( '[data-dropdown="' + $( this ).data('nav-item') + '"]' ).addClass('b-nav__dropdown-block_state-active');
  });

  $navCloseIcon.on('click', function() {
    $(this).parents('.b-nav__dropdown-block').removeClass('b-nav__dropdown-block_state-active');
    $navListItem.removeClass('b-nav__li_state-active');
  });

});
