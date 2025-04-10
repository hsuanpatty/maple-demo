//goTop按鈕
var goTopButton = $('#goTop');
goTopButton.click(function(){ /*點擊.go-top-btn 滾動至body頂端*/
	$('html,body').animate({scrollTop: 0},800)
}
);
$(window).on('scroll resize reload',function(){ /*當視窗滾動的時候*/
	if($(window).scrollTop() > $(window).height()) /*如果視窗距離頂部的距離大於視窗的高度，則backButton淡入 否則 backButton淡出*/
	{goTopButton.show();}
	else
	{goTopButton.fadeOut();}
});

let scrollTarget = $('.scroll-target');
let scrollItem = $('.scroll-target').children('section');//改children
let menuHeight = $('.menu-height').outerHeight();
console.log(`nav高: ${menuHeight}px`);

scrollItem.each(function(){
		let _this = $(this);
		$(window).on('scroll resize reload', function(){
			let scrollItemT = _this.offset().top,
          scrollTargetT = scrollTarget.offset().top,
          scrollTargetH = scrollTarget.outerHeight(),
				  windowH = $(window).scrollTop(),
				  thisIndex = _this.index();
			console.log(`main距頂: ${scrollTargetT} px`);
      console.log(`windowH距頂${windowH}px`)
			// console.log(`第${thisIndex}個距頂${scrollItemT - windowH}px`);
      if( (scrollTargetT - menuHeight) > windowH){
        $('.scroll-tag').find('li').removeClass('on');
      }
			if( scrollItemT - windowH - 5 <= menuHeight ){
				$('.scroll-tag').find('li').removeClass('on');
				$('.scroll-tag').find('li').eq(thisIndex).addClass('on');
			}
		});
		
	});

	$('.scroll-tag').find('li').click(function(){
		let clickNum = $(this).index();
		// console.log(`點擊的li序號${clickNum}`);
		let menuHeight = $('.menu-height').outerHeight(),
			targets = $('.scroll-target').children('section');//改children

		//切換點擊或滑動的li
		$('.scroll-tag').find('.section').removeClass('on');
		$(this).addClass('on');

		//找相對應的區塊
		console.log(`nav高度${menuHeight}`);
		$('html,body').stop().animate({scrollTop: targets.eq(clickNum).offset().top - menuHeight} , 800);
  
	})


//tabs
const tabs = document.querySelectorAll(".tabs li");
const contents = document.querySelectorAll(".tab-content");

function showTab(tabId) {
  contents.forEach((content) => (content.style.display = "none"));
  document.getElementById(tabId).style.display = "block";

  tabs.forEach((tab) => tab.classList.remove("active"));
  document.querySelector(`[data-tab="${tabId}"]`).classList.add("active");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    showTab(this.getAttribute("data-tab"));
  });
});

showTab("tab1");	
	


//美加東
'use strict';

const carouselItems = document.querySelectorAll('.carousel__item');
console.log(carouselItems)
let currentItem = document.querySelector('.carousel__item--main');
const leftBtn = document.querySelector('#leftBtn');
const rightBtn = document.querySelector('#rightBtn');


rightBtn.addEventListener('click', function() {
    currentItem = document.querySelector('.carousel__item--right');
    const leftItem = document.querySelector('.carousel__item--main');
    carouselItems.forEach((item,i) => {
        item.classList = 'carousel__item';
    });
    currentItem.classList.add('carousel__item--main');
    leftItem.classList.add('carousel__item--left');
    const currentId = Array.from(carouselItems).indexOf(currentItem);
    const rightItem = currentId === carouselItems.length -1 ? carouselItems[0] : carouselItems[currentId +1];
    rightItem.classList.add('carousel__item--right');
});

leftBtn.addEventListener('click', function() {
    currentItem = document.querySelector('.carousel__item--left');
    const rightItem = document.querySelector('.carousel__item--main');
    carouselItems.forEach((item,i) => {
        item.classList = 'carousel__item';
    });
    currentItem.classList.add('carousel__item--main');
    rightItem.classList.add('carousel__item--right');
    const currentId = Array.from(carouselItems).indexOf(currentItem);
    const leftItem = currentId === 0 ? carouselItems[carouselItems.length-1] : carouselItems[currentId-1];
    leftItem.classList.add('carousel__item--left');
});



//tabs熱門行程
(function($) {
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

  $.fn.attrchange = function(callback) {
    if (MutationObserver) {
      var options = {
        subtree: false,
        attributes: true
      };

      var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(e) {
          callback.call(e.target, e.attributeName);
        });
      });

      return this.each(function() {
        observer.observe(this, options);
      });

    }
  }
})(jQuery);

$('.details-item').attrchange(function(attribute){
  if(attribute == "open" && $(this).attr("open")) {
    $(this).siblings(".details-item").removeAttr("open");
  }
});

$('.details-tab').on("keydown", function(e) {
  if(e.keyCode == 32 || e.keyCode == 13) {
    if($(this).parent().attr("open")) {
      e.preventDefault();
    }
  } 
});

$('.details-tab').on("click", function(e) {
  if($(this).parent().attr("open")) {
    e.preventDefault();
  }
});
