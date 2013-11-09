var ArticleCollection = (function() {
	function ArticleCollection() {
		this.articles = [];
	}

	ArticleCollection.prototype.add = function(articleConfig) {
		var article = new Article(articleConfig);
		this.articles.push(article);
	};

	ArticleCollection.prototype.getPreviews = function(article) {
		var previewsHtml = '<div id="articles">';
		$.each(this.articles, function(index, article) {
			var previewHtml = article.getPreviewHtml();
			previewsHtml += previewHtml;
		});
		previewsHtml += '</div>';
		return previewsHtml;
	};

	ArticleCollection.prototype.getById = function(id) {
		return $.grep(this.articles, function(article) {
			return article.id == id;
		})[0];
	};


	return ArticleCollection;
})();