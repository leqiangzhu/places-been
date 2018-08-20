function places(location,landmarks,time,notes){
    this.location=location;
    this.landmarks=landmarks;
    this.time=time;
    this.notes=notes;
}

places.prototype.fullInfomation = function () {
  return this.location.toUpperCase() + " " + this.landmarks + " " + this.time + " "+ this.notes;
};



$(document).ready(function(){
	$("form#new-places").submit(function(event){
		event.preventDefault();

    var inputLocation = $("#location").val();
    var inputLandmarks = $("#landmarks").val();
    var inputTime = $("#time").val();
    var inputNotes = $("#notes").val();

    var newPlaces=new places(inputLocation,inputLandmarks,inputTime,inputNotes);
    $("ul#places").append("<li><span class='contact'>"+ newPlaces.fullInfomation() + "</li></span>");


  //  newPlaces.prototype.fullInfomation


	});
});
