$(document).ready(function(){


    // section02 클릭 슬라이드 효과
    var i = 0;
    var mask_w = $('.bread02').width();

    $('#sec02_right').click(function(){

        $('.01').animate({
            left : -(mask_w + '2.038%') * 2,
        },800,function(){

            $('.01').css({
                left : -(mask_w + '2.038%'),
            }).find('.bread02').first().appendTo('.01');
        });
    });

    
    $('#sec02_left').click(function(){

        $('.01').animate({
            left : 0,
        },800,function(){

            $('.01').css({
                left : -(mask_w + '2.038%'),
            }).find('.bread02').last().prependTo('.01');
        });
    });



    $('#sec02_right').click(function(){

        $('.02').animate({
            left : -(mask_w + '2.038%') * 2,
        },800,function(){

            $('.02').css({
                left : -(mask_w + '2.038%'),
            }).find('.bread02').first().appendTo('.02');
        });
    });

    
    $('#sec02_left').click(function(){

        $('.02').animate({
            left : 0,
        },800,function(){

            $('.02').css({
                left : -(mask_w + '2.038%'),
            }).find('.bread02').last().prependTo('.02');
        });
    });




    $('#sec02_right').click(function(){

        $('.03').animate({
            left : -(mask_w + '2.038%') * 2,
        },800,function(){

            $('.03').css({
                left : -(mask_w + '2.038%'),
            }).find('.bread02').first().appendTo('.03');
        });
    });

    
    $('#sec02_left').click(function(){

        $('.03').animate({
            left : 0,
        },800,function(){

            $('.03').css({
                left : -(mask_w + '2.038%'),
            }).find('.bread02').last().prependTo('.03');
        });
    });




    // section06 자동 슬라이드 효과

    var mask_w06 = $('#sec06_bottom_left img').width();

    $('#sec06_right').click(function(){

        i++;

        if( i > 2 ){
            i = 0;
        }

        $('#sec06_bottom_left').animate({
            left : -mask_w06 * i,
        });
        

    });

        var si = setInterval(function(){

            $('#sec06_right').trigger('click');

        },2000);
        

    $('#sec06_left').click(function(){

        i--;

        if( i > 0 ){
            i = 2;
        }

        $('#sec06_bottom_left').animate({
            left : -mask_w06 * i,
        });

    });






    // top 버튼 효과

    $(window).scroll(function(){

        sct = $(window).scrollTop();

        if( sct > 100 ){

            $('#top_btn').css('opacity',1);

        }else{

            $('#top_btn').css('opacity',0);

        }

    });

    $('#top_btn').click(function(){

        $('html,body').animate({
            scrollTop : 0,
        },500);




    });

});  //end