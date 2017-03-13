$(function(){
	$('.list-group-item').children('i').hide();
	$('.ad').hide();
	$('.hobby').hide()
		$(".edit a").on("click",function(){
			if($(this).hasClass("showDel")){
				$(this).removeClass("showDel")
				$('.list-group-item').children('i').hide();
				$('.ad').hide();
				$('.hobby').hide()
			}else{
				$(this).addClass("showDel")
				$('.list-group-item').children('i').show()
				$(".ad").show()
				$(".ad").on("click",function(){
					$(this).show()
					$('.hobby').show()
				})
			}
		})

	
	

	$(".sub").on("click",function(){
		var val=$.trim($('.hoby').val())
		if(val){
			$('<li class="list-group-item"><i class="icon-remove-circle"></i>'+val+'</li>')
			.appendTo(".list-group")
			$('.list-group-item').children('i').show();
		}
	})

	$('.list-group').on('click','li i',function(){
		$(this).parent("li").remove()
	})
})