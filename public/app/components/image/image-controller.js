function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?

	var imageService = new ImageService();

	function getImage() {
		imageService.getImage(draw);

	}


	function draw(imageArr) {
		var imageElem = document.getElementById("book-list")
		var template = '<ul>'
// 		for (var i = 0; i < bookArr.length; i++) {
// 			var book = bookArr[i];
// 			template += `
// <li>${book.title}: ${book.currentPage}</li> <button type="button" onclick="app.controllers.bookmarkController.deleteBook('${book._id}')">Delorted</button>
// <button type="button" onclick="app.controllers.bookmarkController.editBook('${book._id}')">READ</button>
// `
// 		}

		template += '</ul>'
		imageElem.innerHTML = template
	}









}


