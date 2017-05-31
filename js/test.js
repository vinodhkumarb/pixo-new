  $(document).ready(function (e) {

      $("#logout , #sign-in").click(function (e) {
           $(".reveal , .reveal-overlay").show();
// $('#exampleModal'+$(this).attr('data-open')).show();
          e.stopPropagation();
      });
      
      $(".close-button").click(function () {
          $(".reveal , .reveal-overlay ").hide();
      });
      
      $(".reveal").click(function (e) {
          e.stopPropagation();
      });

      $(document).click(function () {
          $(".reveal , .reveal-overlay ").hide();
      });


      
      
      
     // reveal right-click
    
$(document).bind("right-click", function (event) {
    
    event.preventDefault();
    
    $(".right-click").finish().toggle(100).
    
        css({
        top: event.pageY + "px",
        left: event.pageX + "px"
    });
});



$(document).bind("mousedown", function (e) {
    

    if (!$(e.target).parents(".right-click").length > 0) {
        

        $(".right-click").hide(100);
    }
});


      
      
      
      
      
      

      //      
      //      $(document).click(function (e) {
      //          var container = new Array();
      //          container.push($('.reveal'));
      //
      //          $.each(container, function (key, value) {
      //              if (!$(value).is(e.target) && $(value).has(e.target).length === 0) {
      //                  $(value).hide();
      //                  $(".reveal-overlay ").hide();
      //                  
      //              }
      //          });
      //      });
      //          



      //      
      //      $(function(){
      //        $('#logout , #sign-in , #logout').click(function(){
      //              $('.reveal').hide();
      //              $('#exampleModal'+$(this).attr('data-open')).show();
      //        });
      //     });
      //       




  });