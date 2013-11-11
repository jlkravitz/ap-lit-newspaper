var Article = (function() {
	var currArticleId = 0;

	function Article(config) {
		this.title = config.title;
		this.character = config.character;
		this.author = config.author;
		this.inspiration = config.inspiration;
		this.body = config.body;
		this.width = config.width || 50;
		this.previewLength = config.previewLength || 30;
		this.id = currArticleId;
		++currArticleId;
	}

	Article.prototype.getPreviewHtml = function() {
		var previewTemplate = $('#articlePreviewTemplate').html();
		var shortenedBody = shorten(this.body, this.previewLength);
		formatedBody = shortenedBody.stripHtml(); // we don't want extraneous html tags in this string
		var template = previewTemplate.format(this.title, this.author, this.character, this.id, formatedBody, this.width);
		return template;
	};

	Article.prototype.getFullHtml = function() {
		var fullTemplate = $('#articleFullTemplate').html();
		console.log(this.body)
		var template = fullTemplate.format(this.title, this.author, this.character, this.inspiration, this.body);
		return template;
	};

	var shorten = function(toShorten, numWords) {
		return toShorten.split(' ').slice(0, numWords).join(' ');
	};

	return Article;
})();