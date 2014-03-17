Template.listPages.helpers({
	pagesDone: function() {
		return Pages.find({bookId: this._id, content: {$ne: null}});
	},
	pagesToDo: function() {
		return Pages.find({bookId: this._id, content: null});
	}
});

Template.listPages.events({
	'click a.edit-page': function(e) {
		e.preventDefault();
		Router.go('newPage', {_id: this.bookId, pageId: this._id});
	}
})