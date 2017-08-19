// event click
$('.page-scroll').on('click', function(e){

	// isi href
	var tujuan = $(this).attr('href');
	//tangkap elemen
	var elemenTujuan = $(tujuan);
	
	$('body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1000, 'swing');

	e.preventDefault();

	//pindah scroll
	//$('body').scrollTop(elemenTujuan.offset().top);

	//console.log($('body').scrollTop());
	
	//console.log(elemenTujuan.offset().top);
});

//parallax
//about
$(window).on('load',function(){
	$('.pKiri').addClass('pMuncul');
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	//jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});



	//portofolio
	if( wScroll > $('.portfolio').offset().top - 250){
		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function(){
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});
	}
});

// event click
$('.page-scroll').on('click', function(e){

	// isi href
	var tujuan = $(this).attr('href');
	//tangkap elemen
	var elemenTujuan = $(tujuan);
	
	$('body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1000, 'swing');

	e.preventDefault();

	//pindah scroll
	//$('body').scrollTop(elemenTujuan.offset().top);

	//console.log($('body').scrollTop());
	
	//console.log(elemenTujuan.offset().top);
});

//parallax
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	//jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});



	//portofolio
	if( wScroll > $('.portfolio').offset().top - 250){
		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function(){
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});
	}
});