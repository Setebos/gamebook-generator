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
				Router.go('newPage', {_id: id});
			}
		})
	}
})