$(function(){
	$('document').ready(function(){
		$.ajax({
			url:'/article',
			contentType:'application/json',
			success: function(response){
				var listEl = $('li');
				li.html('');
				response.article.forEach(function(comhandle){
						li.append('\
							<li>'+ comhandle.name + '</li>\
							<li>'+ comhandle.comment+'</li>\
						');
				});
			}
		});
	});
	$('#commentsubmit').on('submit', function(event){
		event.preventDefault();

		var name = $('#name');
		var comments = $('#comment');
		$.ajax({
			url: '/comment',
			method: 'POST',
			contentType: 'application/json',
			data: JSON.stringify({name:name.val(), comments:comment.val()}),
			success: function(response){
				console.log(respose);
				name.val('');
				comment.val('');
				$('#commentsubmit').click();
			}
		});
	});

});
