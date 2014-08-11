Template.newPage.helpers({
	page: function() {
		return Pages.findOne();
	}
})

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

		page = Pages.findOne();

		var page = {
			_id: page._id,
			// branches: branches,
			bookId: template.data._id,
			content: $content.val(),
		}

		Meteor.call('updatePage', page, function(error, id) {
			if(error) {
				// TODO gestion erreur
			} else {
				_.each(branches, function(branch) {
					var newPage = {
						branches: null,
						bookId: template.data._id,
						content: null,
						pageTitle: branch
					}
					Meteor.call('createPage', newPage);
				});
				Router.go('listPages', {_id: template.data._id});
			}
		});
	}
})

Template.newPage.rendered = function() {
	if(Pages.find()) {
		console.log(Pages.find().fetch());
		$('#magicsuggest').magicSuggest({
			data: Pages.find().fetch(),
			displayField: "pageTitle",
			useZebraStyle: true
		});
	}	
}