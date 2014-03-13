Session.set('branches', null);

Template.newPage.helpers({
	test: function() {
		return Session.get('branches');
	}
})

Template.newPage.events({
	// 'click #validate-branch': function(e) {
	// 	e.preventDefault();
	// 	if($('#branch').val() > 0 && $('#branch').val() < 6) {
	// 		Session.set('branches', $('#branch').val());
	// 	}
	// }
	'click #new-branch': function(e) {
		e.preventDefault();
		$('.branch').first().clone().appendTo('#branches');
	},
	'submit form': function(e, template) {
		e.preventDefault();
		var branches;
		var $content = $(e.target).find('[name=content]');
		$(e.target).find('[name=title]').each(function() {
			branches[] = this.val();
		});
		var page = {
			branches: branches,
			bookId: template.data._id,
			title: intro
		}
	}
})