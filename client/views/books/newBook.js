Template.newBook.events({
	'submit form': function(e) {
		e.preventDefault();
		var $title = $(e.target).find('[name=title]');
		var $description = $(e.target).find('[name=description]');

		var book = {
			title: $title.val(),
			description: $description.val()
		}

		Meteor.call('createBook', book, function(error, id) {
			if(error) {
				// throwError(error.reason);
			} else {
				var page = {
					branches: null,
					bookId: id,
					content: null,
					pageTitle: "Introduction"
				};
				var pageId = null;
				Meteor.call('createPage', page, function(error, pageId) {
					if(error) {
						// TODO gestion erreur
					} else {
						Router.go('newPage', {_id: id, pageId: pageId});
					}
				});
			}
		})
	}
})