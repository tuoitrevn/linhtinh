(function ($) {
   $(function () {
       $("nav").headroom({
           // vertical offset in px before element is first unpinned
           offset : 100,
           // or you can specify tolerance individually for up/down scroll
           tolerance : {
               up : 20,
               down : 20
           },           classes : {               // when element is initialised
               initial : "headroom",
               // when scrolling up
               pinned : "headroom--pinned",
               // when scrolling down
               unpinned : "headroom--unpinned",
           }
       });
   }); // end of document ready
})(jQuery); // end of jQuery name space
