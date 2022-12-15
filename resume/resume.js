// JavaScript Document
$(document).ready(function () {
	var article = $('.question .article');

    //항목 클릭시 여닫기!
    $('.question li .a').hide();
    $('.topMove').hide(); 
    $('.question li:eq(0) .a').slideDown(100);  

    article.find('.q>span').html('<i class="fas fa-chevron-down"></i>');
    $('.question .article:first').find('.a').slideDown(100);
    $('.question .article:first').find('.q>span').html('<i class="fas fa-chevron-up"></i>');
	
	$('.question .article .trigger').click(function(e){ 
	    e.preventDefault(); 
        var myArticle = $(this).parents('.article'); 
	
        if(myArticle.hasClass('hide')){  
            article.find('.a').slideUp(100);
            article.removeClass('show').addClass('hide'); 
            article.find('.q>span').html('<i class="fas fa-chevron-down"></i>');

            myArticle.removeClass('hide').addClass('show'); 
            myArticle.find('.a').slideDown(100); 
            myArticle.find('.q>span').html('<i class="fas fa-chevron-up"></i>');
        } else { 
            myArticle.removeClass('show').addClass('hide'); 
            myArticle.find('.a').slideUp(100);  
            myArticle.find('.q>span').html('<i class="fas fa-chevron-down"></i>');
        }  
  });
  
  //모두 여닫기 처리
  $('.all').toggle(function(e){
        e.preventDefault(); 
        article.find('.a').slideDown(100);
        article.removeClass('hide').addClass('show');
        article.find('.q>span').html('<i class="fas fa-chevron-up"></i>');
        $(this).html('<span class="hidden">모두 닫기</span><i class="fa-solid fa-minus"></i>');
        $('.topMove').fadeIn();
  },function(e){
        e.preventDefault(); 
        article.find('.a').slideUp(100);
        article.removeClass('show').addClass('hide');
        article.find('.q>span').html('<i class="fas fa-chevron-down"></i>');
        $(this).html('<span class="hidden">모두 열기</span><i class="fa-solid fa-plus"></i>');
        $('.topMove').hide();
  });

    //   

}); 
