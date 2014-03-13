Pages = new Meteor.Collection('pages');

Meteor.methods({
	createPage: function(page) {
		var user = Meteor.user();

		if(!user) {
			throw new Meteor.Error(401, "Vous devez être connecté pour créer un livre");
		}

		var newPage = {
			userId: user._id,
			author: user.username,
			title: page.title,
			content: page.content,
			branches: page.branches,
			bookId: page.bookId
		}

		var pageId = Pages.insert(newPage);

		return pageId;
	}
})