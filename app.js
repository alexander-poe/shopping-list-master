// document ready function 
// onclick css strike through
// onclick remove
// click function append 
// capture value of text input

$(document).ready(function() {
	

	$('#js-shopping-list-form').submit(function(event){
		var item=$('#shopping-list-entry').val()
		$('.shopping-list').append(
			'<li>'+ 
				'<span class="shopping-item">'+ item +'</span>' +
				'<div class="shopping-item-controls">' + 
					'<button class="shopping-item-toggle">' + ' <span class="button-label">check</span></button>' +
					
					'<button class="shopping-item-delete">' + ' <span class="button-label">delete</span></button>'+
				'</div>'+
				'</li>'
		);
		$('#shopping-list-entry').val('');
		event.preventDefault();
	});	


		$(".shopping-list").on("click",".shopping-item-delete", function(event){
			console.log($(this))

			$(".shopping-item-delete").closest("li").remove();
		});

		$(".shopping-list").on("click",".shopping-item-toggle", function(event){
			

			$(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
		});


});
