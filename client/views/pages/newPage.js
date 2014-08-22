var msinput = null;

// Template.newPage.helpers({
// 	page: function() {
// 		if(this.page) {
// 			return this.page;
// 		}
// 	}
// })

Template.newPage.events({
	'click #new-branch': function(e) {
		e.preventDefault();
		var clone = $('.branch').first().clone();
		clone.find('input').val('');
		clone.appendTo('#branches');
	},
	'submit form': function(e, template) {
		e.preventDefault();
		// _.each(msinput.getValue(), function(branch) {
		// 	console.log(branch);
		// });
		var branches = msinput.getValue();
		var $content = $(e.target).find('[name=content]');
		var pageTest = Pages.findOne(template.data.page._id);

		var page = {
			_id: pageTest._id,
			bookId: template.data.book._id,
			content: $content.val(),
		}

		Meteor.call('updatePage', page, function(error, id) {
			if(error) {
				// TODO gestion erreur
			} else {
				_.each(branches, function(branch) {
					var newPage = {
						branches: null,
						bookId: template.data.book._id,
						content: null,
						pageTitle: branch,
						isFirst: false
					}
					Meteor.call('createPage', newPage, template.data.page._id);
				});
				Router.go('listPages', {_id: template.data.book._id});
			}
		});
	}
})

Template.newPage.rendered = function() {
	if(Pages.find()) {
		msinput = $('#magicsuggest').magicSuggest({
			data: Pages.find().fetch(),
			displayField: "pageTitle",
			useZebraStyle: true
		});
	}	
}