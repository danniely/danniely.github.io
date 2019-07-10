$(document).ready(function(){

  $("#flip").click(function(){
      $(".close").hide();
    $("#panel").slideToggle("fast");
  });
   $("#flip2").click(function(){
       $(".close").hide();
       $("#panel2").slideToggle("fast");

  });
     $("#flip3").click(function(){
         $(".close").hide();
    $("#panel3").slideToggle("fast");
  });
     $("#flip4").click(function(){
         $(".close").hide();
    $("#panel4").slideToggle("fast");
  });

  $('.service').click(function(e) {
    e.preventDefault();
});
});
