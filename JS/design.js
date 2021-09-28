

$(document).ready(function(){
        $("#showcase h3").hide();
        $("#showcase").mouseover(function(){
        $("#showcase h3").show();
        });
        $("#showcase").mouseout(function(){
        $("#showcase h3").hide();
    });

    $("#panel_disc h3").hide();
        $("#panel_disc").mouseover(function(){
        $("#panel_disc h3").show();
        $("#panel_disc").animation({'color':'Yellow'})
        });
        $("#panel_disc").mouseout(function(){
        $("#panel_disc h3").hide();
        });

    $("#create h3").hide();
            $("#create").mouseover(function(){
            $("#create h3").show();
            });
            $("#create").mouseout(function(){
            $("#create h3").hide();
            });

    
        //     $("#hbtn-howyl").click(function(){
        //      $("#create h3").hide();

        // });
        //     $("#create").mouseout(function(){
        //     $("#create h3").hide();
        // });
    });

    


    