SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
  SC.stream('/tracks/557856666',function(sound){
    $('#start1').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop1').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
  });
  $(document).ready(function() {
    SC.stream('/tracks/322255084',function(sound){
      $('#start2').click(function(e) {
             e.preventDefault();
             sound.start();
           });
           $('#stop2').click(function(e) {
                      e.preventDefault();
                      sound.stop();
                    });
    });
    $(document).ready(function() {
      SC.stream('/tracks/480614625',function(sound){
        $('#start3').click(function(e) {
               e.preventDefault();
               sound.start();
             });
             $('#stop3').click(function(e) {
                        e.preventDefault();
                        sound.stop();
                      });
      });
      $(document).ready(function() {
        SC.stream('/tracks/571882998',function(sound){
          $('#start4').click(function(e) {
                 e.preventDefault();
                 sound.start();
               });
               $('#stop4').click(function(e) {
                          e.preventDefault();
                          sound.stop();
                        });
        });
        $(document).ready(function() {
          SC.stream('/tracks/602050692',function(sound){
            $('#start5').click(function(e) {
                   e.preventDefault();
                   sound.start();
                 });
                 $('#stop5').click(function(e) {
                            e.preventDefault();
                            sound.stop();
                          });
          });
          $(document).ready(function() {
            SC.stream('/tracks/615375408',function(sound){
              $('#start6').click(function(e) {
                     e.preventDefault();
                     sound.start();
                   });
                   $('#stop6').click(function(e) {
                              e.preventDefault();
                              sound.stop();
                            });
            });
            $(document).ready(function() {
              SC.stream('/tracks/340282793',function(sound){
                $('#start7').click(function(e) {
                       e.preventDefault();
                       sound.start();
                     });
                     $('#stop7').click(function(e) {
                                e.preventDefault();
                                sound.stop();
                              });
              });
              $(document).ready(function() {
                SC.stream('/tracks/615320520',function(sound){
                  $('#start8').click(function(e) {
                         e.preventDefault();
                         sound.start();
                       });
                       $('#stop8').click(function(e) {
                                  e.preventDefault();
                                  sound.stop();
                                });
                });
});
