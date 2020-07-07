function isNumber(event){
    var keycode = event.keyCode;
    if(keycode > 48 && keycode < 57) {
        return true;
    } else {
        return false;
    }
}

var selectElement = document.getElementById('years');


  selectElement.add(new Option("        "));
  var year =2020
  for (var i = 0; i <= 30; i++) {
    selectElement.add(new Option(year));
    year++;
  }

$(document).ready(function(){

    $("#expMonth").select2();
    $('#but_read').click(function(){
      var username = $('#expMonth option:selected').text();
      var userid = $('#expMonth').val();
  
      $('#result').html("id : " + userid + ", name : " + username);
  
    });
  });

$(document).ready(function (){


    var $regexname=/^((?:[A-Za-z]+ ?){1,2})\w{1}$/;
    $('.cardName').on('keypress keydown keyup',function(){
             if (!$(this).val().match($regexname)) {
              // there is a mismatch, hence show the error message
                 $('.emsg').removeClass('hidden');
                 $('.emsg').show();
             }
           else{
                // else, do not display message
                $('.emsg').addClass('hidden');
               }
         });


})

$(document).ready(function () {
      $('select').selectize({
      });
  });



