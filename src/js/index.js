import jQuery from "jquery";
// import "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";

console.log('there is');

jQuery(function() {

  let $navListItem = $('.b-nav__li');

  $navListItem.on('click', function() {
    console.log( $(this).data('nav-item') )
    $('.b-nav__dropdown-block').removeClass('b-nav__dropdown-block_state-active');
    $( '[data-dropdown="' + $( this ).data('nav-item') + '"]' ).addClass('b-nav__dropdown-block_state-active');
  });

});
