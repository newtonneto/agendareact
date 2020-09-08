import $ from 'jquery';

$(document).ready(function() {
	var max_fields      = 3; //maximum input boxes allowed
	var wrapper   		= $(".input_fields_wrap"); //Fields wrapper
	var add_button      = $(".add_field_button"); //Add button ID
	var i = 2;

	var x = 1; //initlal text box count
	$(add_button).click(function(e){ //on add input button click
		e.preventDefault();
		if(x < max_fields){ //max input box allowed
			x++; //text box increment
			$(wrapper).append(
				'<div>'
                	+'<input type="text" placeholder="Number" name="number' + i + '" id="number' + i + '" />'
					+'<br/>'
					+'<a href="#" class="remove_field">X</a>'
				+'</div>'
			); //add input box
			i++;
		}
	});
	
	$(wrapper).on("click",".remove_field", function(e){ //user click on remove text
		e.preventDefault(); $(this).parent('div').remove(); x--;
	})
});