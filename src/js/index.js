import jQuery from "jquery";
// import "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";

console.log('there is');

jQuery(function() {

  let $navListItem = $('.b-nav__li');

  $navListItem.on('click', function() {
    console.log( $(this) )
  });

});
