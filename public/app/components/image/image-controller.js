function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?

	var imageService = new ImageService();

	imageService.getImage(function (image) {
		drawImage(image);
	})

	function drawImage(image) {
		
		//console.log(image);
		var template = `url('${image.url}')`;
		document.getElementById("body").style.backgroundImage = template;
		document.getElementById("image-info").innerHTML = `site: ${image.site}`;
	}









}


