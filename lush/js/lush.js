$(document).ready(function(){


// section01 클릭 이벤트


    var i = 0;

    $('#sec01_btn').click(function(){

        if( i == 0){

            $('#sub_photo').animate({
            width : '70%',
            },1000);

            $('#main_photo').animate({
                width : '30%',
            },1000); 

            $('#sub_photo').css({
                backgroundPosition : 'center',
            });


            $('#sub_photo_on').css({
                opacity : 0,
            });
            i++;
        }else if( i == 1){

            $('#sub_photo').animate({
            width : '30%',
            },1000);

            $('#main_photo').animate({
                width : '70%',
            },1000); 

            $('#sub_photo').css({
                backgroundPosition : 'right',
            });


            $('#sub_photo_on').css({
                opacity : 0.4,
            });
            i = 0;
        }

    });



    // section01 메인사진 자동 슬라이드

    var mask_w02 = $('.img').width();
    var a = 0;

    $('#sec01_img_wrap').click(function(){

        a++;

        if( a > 2 ){
            a = 0;
        }

        $('#sec01_img_wrap').animate({
            left : -mask_w02,
        },3000,function(){

            $('#sec01_img_wrap').css({
                left : 0,
            }).find('.img').first().appendTo('#sec01_img_wrap');

        });

    });

    var si = setInterval(function(){

    $('#sec01_img_wrap').trigger('click');

    },4000);

    

    
   





    // section03 클릭 슬라이드 효과

    /* shower */ 

    var mask_w = $('.sec03_con li').width();
    var b = 0;

    $('#right01').click(function(){

        $('#sec03_con01').animate({
            left : -(mask_w + 20) ,
        },800,function(){

            $('#sec03_con01').css({
                left : 0,
            }).find('li').first().appendTo('#sec03_con01');
        });

    });


    $('#left01').click(function(){

        $('#sec03_con01').animate({
            left : 0,
        },800,function(){

            $('#sec03_con01').css({
                left : -(mask_w + 20),
            }).find('li').last().prependTo('#sec03_con01');
        });

    });



    /* product */ 

    $('#right02').click(function(){

            $('#sec03_con02').animate({
                left : -(mask_w + 20),
            },800,function(){

                $('#sec03_con02').css({
                    left : 0,
                }).find('li').first().appendTo('#sec03_con02');
            });

        });


        $('#left02').click(function(){

            $('#sec03_con02').animate({
                left : 0,
            },800,function(){

                $('#sec03_con02').css({
                    left : -(mask_w + 20),
                }).find('li').last().prependTo('#sec03_con02');
            });

        });







    // sec07 자동 슬라이드 효과
    

    var mask_w07 = $('#sec07_con_wrap li').width();
    var c = 0;

    $('.sec07_btn02').click(function(){

        c++;

        if( c > 2 ){
            c = 0;
        }

        $('#sec07_con_wrap').animate({
            left : -(mask_w07 + 20 ),
        },1000,function(){

            $('#sec07_con_wrap').css({
                left : 0
            }).find('li').first().appendTo('#sec07_con_wrap');   

        });   

    });

        var si = setInterval(function(){

            $('.sec07_btn02').trigger('click');

        },2000);
        





}); //end