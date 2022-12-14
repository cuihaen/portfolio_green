$(document).ready(function(){
    
    //변수선언
    var cnt = 0;
    var ht = $(window).height();
    var wt = $(window).width();
    var section = [];
    var sectionLen = $('section').length;
    var scroll = $(window).scrollTop();
    
    $("html,body").scrollTop(0); // 스크롤 맨 위로
    
    //브라우저 높이에 따른 section 높이 값 변화
    if(wt>1024){
        $("section").height(ht);
    } else {
        //$("section").height('auto');
        $(".main_page").height(ht);
    }

    //브라우저가 사이즈가 변할 때마다 브라우저와 section의 높이값 재설정
    $(window).on("resize",function(){
        ht = $(window).height();
        wt = $(window).width();

        // scroll = $(window).scrollTop();
        if(wt>1024){
            $("section").height(ht);
        } else {
            //$("section").height(750);
            $(".main_page").height(ht);

        }
        sectionTop();
        scrollMove(cnt); 
    });

    //메인페이지 원 움직임
	$(".main_page").on("mousemove",function(e){		
	
		//변수 posX에 마우스 커서의 x축 위치 저장
		var posX= e.pageX;
		//변수 posY에 마우스 커서의 y축 위치 저장
		var posY= e.pageY;

        //console.log(posX , posY );
		
		//우측하단
		$(".p11").css({"right":550-(posX/40) , "bottom":-190-(posY/40) });
		$(".p12").css({"left":750+(posX/40) , "bottom":90+(posY/40) });
		$(".p13").css({"left":50+(posX/20) , "bottom":-200+(posY/20) });		
		$(".p21").css({"right":-150-(posX/30) , "bottom":-150-(posY/30)});
		$(".p22").css({"right":300+(posX/50) , "top":180+(posY/50) });
		
		//좌측상단
		$(".p31").css({"left":-80-(posX/30) , "top":-250-(posY/30) });
		$(".p32").css({"left":-60+(posX/60) , "top":-120+(posY/60) });
		$(".p33").css({"left":500+(posX/50) , "top":-280+(posY/50) });	
	});

    //메뉴 버튼 클릭시
	$("#menu li").on("click",function(){
    //     $('#menu li').removeClass('on');
    //     $(this).addClass('on');
        cnt = $(this).index(); 
	});

    // 섹션 높이값 저장
    function sectionTop(){
        scroll = $(window).scrollTop();
        section = [];
        section = $('section');

        for(var i=0; i<sectionLen; i++){
            section[i] = Math.round(section.eq(i).offset().top);
        }
    }
    sectionTop();

    function scrollMove(cnt){
        // nowTop = ht * cnt;
        // section[cnt];
        if(wt>1024){
            $("html,body").stop().animate({"scrollTop":section[cnt]},500);
            //console.log('scrollMove Call');
        }

        $("#menu li").removeClass('on');
        $("#menu li").eq(cnt).addClass("on");
    }
    scrollMove(cnt);

	//section위치에 따른 메뉴 활성화
    $(window).on("scroll",function(){	
        //console.log(section);
        //console.log(cnt);

        sectionTop();
        for(var i=0; i<sectionLen; i++){
            if(scroll>= section[i]-100 && scroll < section[i]-100+ht){
                cnt = i;
                $("#menu li").removeClass('on');
                $("#menu li").eq(cnt).addClass("on");
                
            }
           
        }
        
        //서브페이지 로고 색상 변경!
        if(scroll>=ht){
            $("#headerArea h1 a").addClass('sub_logo');
        }else{
            $("#headerArea h1 a").removeClass('sub_logo');
        }
        
	});

    //section위에서 마우스 휠을 움직이면
    $("section").on("mousewheel",function(event,delta){    
    
        //마우스 휠을 올렸을때	
        if (delta > 0 && cnt > 0 && wt>1024 && window.matchMedia("(min-width: 1024px)").matches) {  
        
            //var prev = $(this).prev().offset().top; //변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
            // $("html,body").stop().animate({"scrollTop":prev},'slow'); //문서 전체를 prev에 저장된 위치로 이동
            cnt --;
            scrollMove(cnt);
            return false;

        //마우스 휠을 내렸을때	 
        }else if (delta < 0 && cnt < sectionLen-1 && wt>1024 && window.matchMedia("(min-width: 1024px)").matches) {  
        
            //var next = $(this).next().offset().top; //변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
            //$("html,body").stop().animate({"scrollTop":next},'slow'); //문서 전체를 next에 저장된 위치로 이동
            cnt ++;
            scrollMove(cnt);
            return false;                                      
        }
            
    });

    //반응형 네비!
    var documentHeight =  $(document).height();

    if(wt > 1024){
        $('.close').css('display','none');
    }else if(wt <= 1024){
        $('.close').css('display','block');
    }

    $(".btn").click(function(e) {
        e.preventDefault();

        $("#nav").animate({right:0,opacity:1}, 'fast').css('height',documentHeight);
        $("#nav").fadeIn();
    });
    
    $(".close").click(function(e) {
        e.preventDefault();
        
        $("#nav").animate({right:'-100%',opacity:0}, 'fast').css('height',80);
        $("#nav").hide();
    });
    
    var current=0;
    $(window).resize(function(){

        wt = $(window).width();

        if( wt > 1024){
        current=1;
        $("#nav").css({right:0,opacity:1}).show();
        }
        if(current==1 && wt <= 1024){
            $("#nav").css({right:'-100%',opacity:0});
            current=0;
        }
    }); 
});