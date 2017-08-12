function QuoteController() {
	var qs = new QuoteService();

	qs.getQuote(function (quote) {
		drawQuote(quote);
	})

	function drawQuote(quote) {
		var template = '';

		template += `
				<div onmouseover="app.controllers.quoteController.showAuthor()" onmouseout="app.controllers.quoteController.hideAuthor()" >${quote.quote}</div>
				<div id="author" style="display:none;">Author: ${quote.author}</div>
			`
		document.getElementById("quote").innerHTML = template;
	}

	this.showAuthor = function(){
		var authorElem = document.getElementById('author');
		authorElem.style.display = 'block';
	}

	this.hideAuthor = function(){
		var authorElem = document.getElementById('author');
		authorElem.style.display = 'none';
	}
}
