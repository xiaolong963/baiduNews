$(function(){
	//添加一条数据
	/*$('#sub').click(function(){
		var success = 1;
		if($('#newsTitle').val()==''){
			$('#newsTitle').css('borderColor','red');
			success = 0;
		}
		if($('#newsContent').val()==''){
			$('#newsContent').css('borderColor','red');
			success = 0;
		}
		if($('#imgSrc').val()==''){
			$('#imgSrc').css('borderColor','red');
			success = 0;
		}
		if($('#newsFrom').val()==''){
			$('#newsFrom').css('borderColor','red');
			success = 0;
		}
		if($('#newsDate').val()==''){
			$('#newsDate').css('borderColor','red');
			success = 0;
		}
		if(success == 1){
			$.ajax({
				url:'/addNews',
				type:'post',
				data:{
					newsTitle:$('#newsTitle').val(),
					newsContent:$('#newsContent').val(),
					imgSrc:$('#imgSrc').val(),
					newsFrom:$('#newsFrom').val(),
					newsDate:$('#newsDate').val(),
					newsTag:$('#newsTag').val()
				},
				success:function(data){
					/*$(`<li text="${data.id}" count="${data.length}" class="list-group-item panel-body1-ul-li  clearFix">
					  	<span>&nbsp</span>
					  	<span>${data.newsTitle}</span>
					  	<span>${data.newsDate}</span>
					  	<span class="del"><b class='btn btn-danger'>删除</b></span>
					  	<div class="panel-body1-ul-modal">
					  		<p>您确定要删除这条新闻吗？</p>
					  	    <div class="panel-body1-ul-modal-btn">
						        <button type="button" class="btn btn-default cancel">取消</button>
						        <button type="button" class="btn btn-primary affirmDel">确定</button>
						      </div>
					  	</div>
					  </li>`).insertAfter('.panel-body1-ul-li1');
					$('li').detach('.panel-body1-ul-li');*/
					/*getNews();
					alert('添加成功！');
				},
				error:function(err){
					console.log(err);
				}
			});
		}
	});*/
	//查询一页数据
	function toDou(num){
		return num<10? '0'+num:''+num;
	}
	var iNow = 1;
	function getNews(){
		$.ajax({
			url:'/selectNews',
			type:'get',
			data:{
				page:iNow
			},
			success:function(data){
				var dataNews = '';
				for (var i = 0; i < data.length; i++) {
					dataNews+=`<li text="${data[i].id}" count="${data.length}" class="list-group-item panel-body1-ul-li  clearFix">
					  	<span>${(i+1)}</span>
					  	<span>${data[i].newsTitle}</span>
					  	<span>${new Date(Date.parse(data[i].newsDate)).getFullYear()}-${toDou(new Date(Date.parse(data[i].newsDate)).getMonth()+1)}-${toDou(new Date(Date.parse(data[i].newsDate)).getDate())}</span>
					  	<span class="del"><b class='btn btn-danger'>删除</b></span>
					  	<div class="panel-body1-ul-modal">
					  		<p>您确定要删除这条新闻吗？</p>
					  	    <div class="panel-body1-ul-modal-btn">
						        <button type="button" class="btn btn-default cancel">取消</button>
						        <button type="button" class="btn btn-primary affirmDel">确定</button>
						      </div>
					  	</div>
					  </li>`;
				};
				$('.panel-body1-ul').html(dataNews);
			}
		});
	}
	getNews();
	//显示页码
	function getPages(){
		$.ajax({
			url:'/selectCount',
			type:'get',
			success:function(data){
				var count;
				var getpages = '';
				if(data.length<8){
					count = 1;
				}else{
					if(data.length%8 == 0){
						count = data.length/8;
					}else{
						count = parseInt(data.length/8)+1;
					}
				}
				for(var i = 0;i<count;i++){
					getpages+=`<a class="getPage">${(i+1)}</a>`;
				}
				$('.panel-body-count').html(getpages);
				$('.getPage').eq(iNow-1).addClass('on');
			}
		});
	}
	getPages();
	//实现换页
	$('.panel-body-count').on('click','.getPage',function(){
		iNow = $(this).html();
		//$('li').detach('.panel-body1-ul-li');
		getNews();
		$('.getPage').removeClass('on');
		$(this).addClass('on');
	});
	//显示删除模态框
	$('.panel-body1-ul').on('click','.del',function(event) {
		$(this).next('.panel-body1-ul-modal').css('display','block');
		var height = $('.box').css('height');
		$('.bac').css('height',height);
		$('.bac').css('display','block');
		event.preventDefault();
	});
	//点击取消让模态框隐藏
	$('.panel-body1-ul').on('click','.cancel',function(event) {
		$(this).parents('.panel-body1-ul-modal').css('display','none');
		$('.bac').css('display','none');
		event.preventDefault();
	});
	//点击确认删除相应的一条数据
	$('.panel-body1-ul').on('click','.affirmDel',function(event) {
		$.ajax({
			url:'/delNews',
			type:'get',
			data:{
				idNews:$(this).parents('.panel-body1-ul-li').attr('text')
			},
			success:function(data){
				//$('.panel-body-count').html('');
				getPages();
			},
			error:function(err){
				console.log(err);
			}
		});
		//$('li').detach('.panel-body1-ul-li');
		getNews();
		//$(this).parents('.panel-body1-ul-li').remove();
		$(this).parents('.panel-body1-ul-modal').css('display','none');
		$('.bac').css('display','none');
		event.preventDefault();
	});
	//根据id查询一条数据
	function getToday(){
		var date = new Date();
		var y = date.getFullYear();
		var m = date.getMonth()+1;
		var d = date.getDate();
		var h = date.getHours();
		var mm = date.getMinutes();
		var today = y+'-'+toDou(m)+'-'+toDou(d)+'T'+toDou(h)+':'+toDou(mm);
		console.log(today);
		$('#newsDate').val(today);
	}
	getToday();
	var id;
	$('.panel-body1-ul').on('click','.panel-body1-ul-li',function(){
		$('.panel-body1-ul-li').removeClass('onLi');
		$(this).addClass('onLi');
		$.ajax({
			url:'/selectOneNews',
			type:'get',
			data:{
				idNews:$(this).attr('text')
			},
			success:function(data){
				$('#newsTitle').val(data[0].newsTitle);
				$('#newsContent').val(data[0].newsContent);
				$('#imgSrc').val(data[0].imgSrc);
				$('#newsFrom').val(data[0].newsFrom);
				//$('#newsDate').val(data[0].newsDate);
				$('#newsDate').val(data[0].newsDate);
				$('#newsTag').val(data[0].newsTag);
				id = data[0].id;
				getToday();
				//alert(new Date(Date.parse(data[0].newsDate)).toLocaleDateString());
			},
			error:function(err){
				console.log(err);
			}
		});
	});
	$(document).dblclick(function(){
		if(id){
			$('#newsTitle').val('');
			$('#newsContent').val('');
			$('#imgSrc').val('');
			$('#newsFrom').val('');
			//$('#newsDate').val('');
			$('#newsTag').val('推荐');
			id='';
		}
	});
	$('#newsTitle').blur(function(){
		if($('#newsTitle').val()!=''){
			$('#newsTitle').css('borderColor','#ccc');
		}
	});
	$('#newsContent').blur(function(){
		if($('#newsContent').val()!=''){
			$('#newsContent').css('borderColor','#ccc');
		}
	});
	$('#imgSrc').blur(function(){
		if($('#imgSrc').val()!=''){
			$('#imgSrc').css('borderColor','#ccc');
		}
	});
	$('#newsFrom').blur(function(){
		if($('#newsFrom').val()!=''){
			$('#newsFrom').css('borderColor','#ccc');
		}
	});
	$('#sub').click(function(){
		if(id){
			$.ajax({
					url:'/updateNews',
					type:'post',
					data:{
						newsTitle:$('#newsTitle').val(),
						newsContent:$('#newsContent').val(),
						imgSrc:$('#imgSrc').val(),
						newsFrom:$('#newsFrom').val(),
						newsDate:$('#newsDate').val(),
						newsTag:$('#newsTag').val(),
						id:id
					},
					success:function(data){
						getNews();
						$('#newsTitle').val('');
						$('#newsContent').val('');
						$('#imgSrc').val('');
						$('#newsFrom').val('');
						//$('#newsDate').val('');
						$('#newsTag').val('推荐');
						alert(data);
					},
					error:function(err){
						console.log(err);
					}
				});
		}else{
			//添加一条数据
			var success = 1;
			if($('#newsTitle').val()==''){
				$('#newsTitle').css('borderColor','red');
				success = 0;
			}
			if($('#newsContent').val()==''){
				$('#newsContent').css('borderColor','red');
				success = 0;
			}
			if($('#imgSrc').val()==''){
				$('#imgSrc').css('borderColor','red');
				success = 0;
			}
			if($('#newsFrom').val()==''){
				$('#newsFrom').css('borderColor','red');
				success = 0;
			}
			if($('#newsDate').val()==''){
				$('#newsDate').css('borderColor','red');
				success = 0;
			}
			if(success == 1){
				$.ajax({
					url:'/addNews',
					type:'post',
					data:{
						newsTitle:$('#newsTitle').val(),
						newsContent:$('#newsContent').val(),
						imgSrc:$('#imgSrc').val(),
						newsFrom:$('#newsFrom').val(),
						newsDate:$('#newsDate').val(),
						newsTag:$('#newsTag').val()
					},
					success:function(data){
						getNews();
						//$('.panel-body-count').html('');
						getPages();
						alert('添加成功！');
					},
					error:function(err){
						console.log(err);
					}
				});
				$('#newsTitle').val('');
				$('#newsContent').val('');
				$('#imgSrc').val('');
				$('#newsFrom').val('');
				//$('#newsDate').val('');
				$('#newsTag').val('推荐');
	}
		};
	});
})