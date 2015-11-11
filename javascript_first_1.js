
                $("#stop").click(function(){
                      player=document.getElementById('player_audio');
player.pause();
player.currentTime = 0;
            $("#stop").fadeOut();
    $("#play").fadeIn();
      });
            $("#play").click(function(){
                      player=document.getElementById('player_audio');
player.play();
                          $("#play").fadeOut();
    $("#stop").fadeIn();
      });

                $("#recalculer").click(function(){
 btntest_onclick();
      });
                $("#exit").click(function(){
 parent.close();
      });