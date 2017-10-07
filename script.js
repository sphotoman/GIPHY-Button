

//array of animals as the basis for the button

var animals;
animals = ['dog', 'pony', 'cat', 'cow', 'pig', 'duck', 'lemming'];
// makeNewButtons();

//putting animal name buttons on the page

// function makeNewButtons(){

	for (i=0; i<animals.length; i++){
		$("#animalButtons").append();
		var newButton = $("<button>");
		newButton.attr('id', animals[i]);

		newButton.text(animals[i]);

		// console.log(newButton.attr[i]);
		$("#animalButtons").append(newButton);

	};
// }

//get form info and push into array
$(document).ready(function() {
    $('#myButton').click(function() {
       event.preventDefault()
       console.log("form value: " + $('#formValueId').val());
    // add to array
	animals.push($('#formValueId').val());
	// clear text field on form
    console.log('appended animal array? ' + animals)

    });

});

 
// on button click go search for - 
$('button').on("click",function(){
event.preventDefault()
	var x = this.id;
	var queryURL = "https://api.giphy.com/v1/gifs/search?q="+x+"&api_key=sesCV57AalUOKGDVjmD7XOPNIxMhcJ6z&limit=10"

	// console.log(this.id);
	// console.log(x);
	// console.log(queryURL);
	$.ajax({url:queryURL,method:'get'})
			.done(function(response){
				// console.log(response);
							
				for (var i=0;i<response.data.length;i++) {
				
				// console.log(rated);

				$('#giphyDisplay').prepend("<p>Rating: " +response.data[i].rating+"</p>");
				// $('#giphyDisplay').prepend("<img src="+response.data[i].images.fixed_height_small.url+">");	
				
			$('#giphyDisplay').prepend("<img src="+response.data[i].images.fixed_height_small_still.url+" data-still="+response.data[i].images.fixed_height_small_still.url+" data-animate="+response.data[i].images.fixed_height_small.url+" class='gif'"+" data-state='still'"+">");

			

		   $(".gif").on("click", function() {
		      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
		      var state = $(this).attr("data-state");
		      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
		      // Then, set the image's data-state to animate
		      // Else set src to the data-still value
		      if (state === "still") {
		        $(this).attr("src", $(this).attr("data-animate"));
		        $(this).attr("data-state", "animate");
		      } else {
		        $(this).attr("src", $(this).attr("data-still"));
		        $(this).attr("data-state", "still");
				}
			});



		} 
	})
	
})
