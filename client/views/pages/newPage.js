Template.newPage.events({
	'click #new-branch': function(e) {
		e.preventDefault();
		var clone = $('.branch').first().clone();
		clone.find('input').val('');
		clone.appendTo('#branches');
	},
	'submit form': function(e, template) {
		e.preventDefault();
		var branches = new Array();
		var $content = $(e.target).find('[name=content]');

		$(e.target).find('[name=title]').each(function() {
			branches.push(this.value);
		});

		var page = {
			branches: branches,
			bookId: template.data._id,
			title: "Introduction"
		}

		Meteor.call('createPage', page, function(error, id) {
			if(error) {
				// TODO gestion erreur
			} else {
				Router.go('listPages', {_id: template.data._id});
			}
		})
	}
})