(function (win,doc){
	function changeSize(){
		doc.documentElement.style.fontSize=doc.documentElement.clientWidth/320*50+'px';
	}
	changeSize();
	win.addEventListener('resize',changeSize,false);
})(window,document);
//轮播图

/*document.addEventListener('DOMContentLoaded',function(){
	var oUl = document.querySelector('.box ul');
	var aLi = oUl.children;
	var x = 0;
	var iNow = 0;
	var bOk = false;
	oUl.addEventListener('touchstart',function(ev){
		if(bOk)return;
		bOk = true;
		var oldX = ev.targetTouches[0].pageX - x;
		var downX = ev.targetTouches[0].pageX;
		function fnMoev(ev){
			x = ev.targetTouches[0].pageX - oldX;
			oUl.style.left = x +'px';
		}
		function fnEnd(ev){
			document.removeEventListener('touchmove',fnMoev,false);
			document.removeEventListener('touchend',fnEnd,false);
			var upX = ev.changedTouches[0].pageX;
			if(Math.abs(upX-downX)>20){
				if(downX>upX){
					iNow ++;
					if(iNow == aLi.length)iNow=0;
				}else{
					iNow--;
					if(iNow==-1)iNow=aLi.length-1;	
				}
			}
			oUl.style.left = -aLi[0].offsetWidth*iNow + 'px';
		}
		document.addEventListener('touchmove',fnMoev,false);
		document.addEventListener('touchend',fnEnd,false);
		oUl.addEventListener('transitionend',function(){
			bOk = false;
		},false);
	},false);
},false);*/
function toDou(num){
	return num<10? '0'+num:''+num;
}
function getTime(date){
	var now = new Date();
	var times = now.getTime()-date.getTime();
	if(parseInt(times/1000/60)<1){
		//alert(parseInt(times/1000/60));
		//alert('刚刚');
		return '刚刚';
	}else if(parseInt(times/1000/60)>=1&&parseInt(times/1000/60)<=60&&parseInt(times/1000/60/60)<1){
		//alert(parseInt(times/1000/60)+'分钟前');
		return parseInt(times/1000/60)+'分钟前';
	}else if(parseInt(times/1000/60/60)>=1&&parseInt(times/1000/60/60)<24){
		return parseInt(times/1000/60/60)+'小时前';
		//alert(parseInt(times/1000/60/60)+'小时前');
	}else if(parseInt(times/1000/60/60)>=24){
		var ss = date.toLocaleDateString().replace(/\//g,'-');
		return ss;
		//alert(date.toString());
	}
}
window.onresize = window.onscroll = function(){

	var winHeight = document.documentElement.clientHeight;
	var scrolHeight = document.body.scrollTop;
	var aImg = document.getElementsByClassName('images');
	//alert(scrolHeight);
	for(var i = 0;i<aImg.length;i++){
		//alert(1);
		if(winHeight+scrolHeight>aImg[i].offsetTop){
			aImg[i].src = aImg[i].getAttribute('-src');
		}
	}
};
$(function(){
	setTimeout(function(){
		var winHeight = document.documentElement.clientHeight;
		var scrolHeight = document.body.scrollTop;
		var aImg = document.getElementsByClassName('images');
		//var aImg = document.getElementsByTagName('img');
		//console.log(aImg);
		for(var i = 0;i<aImg.length;i++){
			if(winHeight+scrolHeight>aImg[i].offsetTop){
				aImg[i].src = aImg[i].getAttribute('-src');
			}
		}
	},50);
	var mySwiper = new Swiper('.swiper-container',{
		loop:true, 						
		pagination:'.swiper-pagination',	//生成小圆点
		paginationClickable:true,			//小圆点可点击
		autoplay:2000,//自动播放
	});
	$(".swiper-container").mouseenter(function () {//滑过悬停
	    mySwiper.stopAutoplay();//mySwiper 为上面你swiper实例化的名称
	}).mouseleave(function(){//离开开启
	    mySwiper.startAutoplay();
	});
	$.ajax({
		url:'/users/selectNews',
		type:'get',
		success:function(data){
			if(localStorage.getItem('name')!=null){
				$('.login').css('background','#3e98f0').css('font-size','0.22rem').css('color','#fff');
				$('.login').html(localStorage.getItem('name'));
				$('.login').attr('href','javascript:;');
				$('.login').click(function(){
					$('.quit').css('display','block');
				});
				$('.cancel').click(function(){
					$('.quit').css('display','none');
				});
				$('.affirmDel').click(function(){
					$('.login').attr('href','/users/login');
					$('.login').off('click');
					$('.quit').css('display','none');
					$('.login').css('background','url(/images/2.png) no-repeat');
					$('.login').html('');
					$.ajax({
						url:'/users',
						type:'get',
						data:{
							usersName:localStorage.getItem('name')
						},
						success:function(data){

						},
						error:function(err){
							console.log(err);
						}
					});
					localStorage.removeItem('name');
				});
			}else{
				//location.href = 'users/login';
				$('.login').css('background','url(/images/2.png) no-repeat');
			}
			
			for(var i = 0;i<data.length;i++){				
				$(`<li class="clearFix">
					<div>
						<img class="images" -src="${data[i].imgSrc}" alt="">
					</div>
					<div class="content-right">
						<p>${data[i].newsTitle}</p>
						<p>${getTime(new Date(Date.parse(data[i].newsDate)))}</p>
					</div>
				</li>`).appendTo('.content-ul');
			}
		},
		error:function(err){
			console.log(err);
		}
	});
	
	var bOk = false;
	var oNavUl = document.getElementById('nav-ul');
	var oNavP = document.getElementById('nav-p');
	var oNav = document.getElementById('nav');
	
	oNavUl.addEventListener('touchstart',function(ev){
		var oldX = ev.targetTouches[0].pageX - oNavUl.offsetLeft;
		function fnMove(ev){
			var newX = ev.targetTouches[0].pageX-oldX;
			if(newX>0){
				newX = 0;
			}else if(newX<(-oNavUl.offsetWidth+document.documentElement.clientWidth)){
					newX = -oNavUl.offsetWidth+document.documentElement.clientWidth;
			}
			oNavUl.style.left = newX/100+'rem';
		}
		function fnEnd(ev){
			document.removeEventListener('touchmove',fnMove,false);
			document.removeEventListener('touchend',fnEnd,false);
			
		}
		document.addEventListener('touchmove',fnMove,false);
		document.addEventListener('touchend',fnEnd,false);
		//ev.preventDefault();
	},false);
	
	$('#nav-ul li').on({
		click:function(){
			var index = $(this).index();
			if($(this).index()>=4 && $(this).index()<=($('.nav li').length-4)){
				var x = -(index-4)*0.72;
				//$('.nav ul').css('transform','translateX('+x+'rem)');
				$('.nav ul').css('left',x+'rem');
			}
		}
	});
	$('.nav li a').on({
		click:function(ev){
		$('.nav li a').removeClass('on');
		$(this).addClass('on');
		var newsTag = $(this).html();
		$.ajax({
			url:'users/selectTag',
			type:'get',
			data:{
				newsTag:newsTag
			},
			success:function(data){
				$('.content-ul').html('');
				//<p>${new Date(Date.parse(data[i].newsDate)).getFullYear()}-${toDou(new Date(Date.parse(data[i].newsDate)).getMonth()+1)}-${toDou(new Date(Date.parse(data[i].newsDate)).getDate())}</p>
				for(var i = 0;i<data.length;i++){				
					$(`<li class="clearFix">
						<div>
							<img src="${data[i].imgSrc}" alt="">
						</div>
						<div class="content-right">
							<p>${data[i].newsTitle}</p>
							<p>${getTime(new Date(Date.parse(data[i].newsDate)))}</p>
						</div>
					</li>`).appendTo('.content-ul');
				}
			},
			error:function(err){
				console.log(err);
			}
		});
	}
		
	});
});
