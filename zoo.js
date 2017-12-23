

$(document).ready(function() {

	
	var speed = 8000;
	var run = setInterval('rotate()', speed);	
	
	var item_width = $('#pics li').outerWidth(); 
	var left_value = item_width * (-1); 
        
    
	$('#pics li:first').before($('#pics li:last'));

	$('#pics ul').css({'left' : left_value});
	$('#prev').click(function() {

		          
		var left_indent = parseInt($('#pics ul').css('left')) + item_width;

	          
		$('#pics ul').animate({'left' : left_indent}, 200,function(){    
                     	
			$('#pics li:first').before($('#pics li:last'));           
				$('#pics ul').css({'left' : left_value});
		
			});

	       
					return false;
            
		});

 

	$('#next').click(function() 

	{
		
		var left_indent = parseInt($('#pics ul').css('left')) - item_width;
		
		$('#pics ul').animate({'left' : left_indent}, 200, function () {
            
     			$('#pics li:last').after($('#pics li:first'));                 	
			
				$('#pics ul').css({'left' : left_value});
		
		

				});
		         

					return false;
		
	});        
	

	$('#pics').hover(
		
		function() {


			clearInterval(run);
		}, 

		function() {

				run = setInterval('rotate()', speed);	
		}
	); 
        
});


function rotate() {



	$('#next').click();
}




$(document).ready(function() {

	
	var speed = 7000;
	var run = setInterval('rotate()', speed);	
	
	var item_width = $('#pic2 li').outerWidth(); 
	var left_value = item_width * (-1); 
        
    
	$('#pic2 li:first').before($('#pic2 li:last'));

	$('#pic2 ul').css({'left' : left_value});
	$('#prev').click(function() {

		          
		var left_indent = parseInt($('#pic2 ul').css('left')) + item_width;

	          
		$('#pic2 ul').animate({'left' : left_indent}, 200,function(){    
                     	
			$('#pic2 li:first').before($('#pic2 li:last'));           
				$('#pic2 ul').css({'left' : left_value});
		
			});

	       
					return false;
            
		});

 

	$('#next').click(function() 

	{
		
		var left_indent = parseInt($('#pic2 ul').css('left')) - item_width;
		
		$('#pic2 ul').animate({'left' : left_indent}, 200, function () {
            
     			$('#pic2 li:last').after($('#pic2 li:first'));                 	
			
				$('#pic2 ul').css({'left' : left_value});
		
		

				});
		         

					return false;
		
	});        
	

	$('#pic2').hover(
		
		function() {


			clearInterval(run);
		}, 

		function() {

				run = setInterval('rotate()', speed);	
		}
	); 
        
});


function rotate() {



	$('#next').click();
}




$(document).ready(function() {

	
	var speed = 8000;
	var run = setInterval('rotate()', speed);	
	
	var item_width = $('#pic3 li').outerWidth(); 
	var left_value = item_width * (-1); 
        
    
	$('#pic3 li:first').before($('#pic3 li:last'));

	$('#pic3 ul').css({'left' : left_value});
	$('#prev').click(function() {

		          
		var left_indent = parseInt($('#pic3 ul').css('left')) + item_width;

	          
		$('#pic3 ul').animate({'left' : left_indent}, 200,function(){    
                     	
			$('#pic3 li:first').before($('#pic3 li:last'));           
				$('#pic3 ul').css({'left' : left_value});
		
			});

	       
					return false;
            
		});

 

	$('#next').click(function() 

	{
		
		var left_indent = parseInt($('#pic3 ul').css('left')) - item_width;
		
		$('#pic3 ul').animate({'left' : left_indent}, 200, function () {
            
     			$('#pic3 li:last').after($('#pic3 li:first'));                 	
			
				$('#pic3 ul').css({'left' : left_value});
		
		

				});
		         

					return false;
		
	});        
	

	$('#pic3').hover(
		
		function() {


			clearInterval(run);
		}, 

		function() {

				run = setInterval('rotate()', speed);	
		}
	); 
        
});


function rotate() {



	$('#next').click();
}




		



