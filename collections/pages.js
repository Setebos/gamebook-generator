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
			pageTitle: page.pageTitle,
			content: page.content,
			branches: page.branches,
			bookId: page.bookId
		}

		var pageExists = false;
		Pages.find().forEach(function (page) {
			if(page.pageTitle == newPage.pageTitle) {
				pageExists = true;
			}
		});

		if(!pageExists) {
			var pageId = Pages.insert(newPage);
		}

		return pageId;
	},
	updatePage: function(page) {
		var user = Meteor.user();

		if(!user) {
			throw new Meteor.Error(401, "Vous devez être connecté pour créer un livre");
		}

		var pageId = Pages.update({_id: page._id}, {$set: {branches: page.branches, content: page.content}});

		return pageId;
	}
})