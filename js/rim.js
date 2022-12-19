$(document).ready(function(){


    /* 메뉴랩 해당 섹션에 고정 */
    $(window).scroll(function(){

        sct = $(window).scrollTop();
        console.log(sct);


        if( sct >= 1980 && sct < 6787){

            $('.btn_wrap').css({
                position : 'fixed',
            });


        }else if( sct > 6787 ){

            $('.btn_wrap').css({
                position: 'absolute',
                bottom: '300',
            },2000);

        }else if( sct < 2200 ){

            $('.btn_wrap').css({
                position: 'absolute',
            },2000);
    
        };

    });




    /* 스크롤 시 해당 섹션마다 메뉴모양 바뀌기*/

    $(window).scroll(function(){

        sct02 = $(window).scrollTop();

        // 버튼2
        if( sct02 > 3475 && sct02 < 5271 ){

            $('#active01').removeClass('active');
            $('#active03').removeClass('active');
            $('#active02').addClass('active');

            $('#btn_hover02').css({
                opacity: 1,
                marginTop: '-14px',
            });

            $('#line02').css({
                opacity: 1,
                marginTop: '15px',
            });

            $('#active02').css({
                marginTop: '-10px',
            });

            $('#active03').css({
                marginTop: '-10px',
            });

            $('#btn_hover01,#btn_hover03').css({ opacity: 0, });
            $('#line01,#line03').css({ opacity: 0,});

        // 버튼3
        }else if( sct02 > 5272 && sct02 < 6787 ){

            $('#active02').removeClass('active');
            $('#active01').removeClass('active');
            $('#active03').addClass('active');

            $('#btn_hover03').css({
                opacity: 1,
                marginTop: '-35px',
            });

            $('#line03').css({
                opacity: 1,
                marginTop: '-10px',
            });

            $('#active03').css({
                marginTop: '-35px',
            });

            $('#active02').css({
                marginTop: '-10px',
            });


            $('#btn_hover01,#btn_hover02').css({ opacity: 0, });
            $('#line01,#line02').css({ opacity: 0,});

        // 버튼1
        }else if( sct02 > 1794 && sct02 < 3857 ){

            $('#active02').removeClass('active');
            $('#active03').removeClass('active');
            $('#active01').addClass('active');

            $('#btn_hover01').css({
                opacity: 1,
                marginTop: '9px',
            });

            $('#line01').css({
                opacity: 1,
                marginTop: '39px',
            });

            $('#active02').css({
                marginTop: '15px',
            });

            $('#active03').css({
                marginTop: '0',
            });

            $('#btn_hover02,#btn_hover03').css({ opacity: 0, });
            $('#line02,#line03').css({ opacity: 0,});
        }


    });

   
    // 클릭 시 해당 메뉴 이동 

    $("#active01").click(function(){
        $('html,body').animate({
            scrollTop: $("#sec03").offset().top},
            'slow');
    });

    $("#active02").click(function(){
        $('html,body').animate({
            scrollTop: $("#sec05").offset().top},
            'slow');
    });

    $("#active03").click(function(){
        $('html,body').animate({
            scrollTop: $("#sec07").offset().top},
            'slow');
    });


    

    // 상단메뉴 해당되는 섹션에 자동으로 따라서 표시되기

    $(window).scroll(function(){

        sct03 = $(window).scrollTop();

// intro
        if( sct03 >= 0 && sct03 < 849){

            $('#menu01').css({
                width : '64px',
            });

            $('#menu_wrap01>.menu_pen').css({
                display : 'block',
            });

            $('#menu02,#menu03,#menu04').css({
                width : '0',
            });

            $('#menu_wrap02>.menu_pen,#menu_wrap03>.menu_pen,#menu_wrap04>.menu_pen').css({
                display : 'none',
            });


// skill
        }else if( sct03 > 850 && sct03 < 1696 ){

            $('#menu02').css({
                width : '64px',
            });

            $('#menu_wrap02>.menu_pen').css({
                display : 'block',
            });

            $('#menu01,#menu03,#menu04').css({
                width : '0',
            });

            $('#menu_wrap01>.menu_pen,#menu_wrap03>.menu_pen,#menu_wrap04>.menu_pen').css({
                display : 'none',
            });

            
// portfolio 
        }else if( sct03 > 1697 && sct03 < 7074 ){

            $('#menu03').css({
                width : '106px',
            });

            $('#menu_wrap03>.menu_pen').css({
                display : 'block',
            });

            $('#menu01,#menu02,#menu04').css({
                width : '0',
            });

            $('#menu_wrap01>.menu_pen,#menu_wrap02>.menu_pen,#menu_wrap04>.menu_pen').css({
                display : 'none',
            });



// work
        }else if( sct03 > 7075 && sct03 < 7881 ){

            $('#menu04').css({
                width : '64px',
            });

            $('#menu_wrap04>.menu_pen').css({
                display : 'block',
            });

            $('#menu02,#menu03,#menu01').css({
                width : '0',
            });

            $('#menu_wrap02>.menu_pen,#menu_wrap03>.menu_pen,#menu_wrap01>.menu_pen').css({
                display : 'none',
            });

// 마지막페이지 형광펜 효과
        }else if( sct03 > 7882 ){

            $('#menu04').css({
                width : '0',
            });

            $('#menu_wrap04>.menu_pen').css({
                display : 'none',
            });

            $('#sec10_pen_line').css({
                width : 281,
            });

        }

    });



// section05 이미지 모달창
$('#sec07_left_btn').click(function (){

    // $('#sec07_site').css({
    //     display : 'block',
    // });

    $('.sec07_site').fadeIn(300);

});



$('#close,#close2').click(function(){

    $('.sec07_site').fadeOut(500);

});




    




























}); //end