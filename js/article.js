var Article = (function() {
	var currArticleId = 0;

	function Article(config) {
		this.title = config.title;
		this.body = config.body;
		this.width = config.width || 50;
		this.previewLength = config.previewLength || 30;
		this.id = currArticleId;
		++currArticleId;
	}

	Article.prototype.getPreviewHtml = function() {
		var previewTemplate = $('#articlePreviewTemplate').html();
		var shortenedBody = shorten(this.body, this.previewLength) + '...';
		var template = previewTemplate.format(this.title, this.id, shortenedBody, this.width);
		return template;
	};

	Article.prototype.getFullHtml = function() {
		var fullTemplate = $('#articleFullTemplate').html();
		var template = fullTemplate.format(this.title, this.body);
		return template;
	};

	var shorten = function(toShorten, numWords) {
		return toShorten.split(' ').slice(0, numWords).join(' ');
	};

	return Article;
})();