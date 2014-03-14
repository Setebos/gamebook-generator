Template.listPages.helpers({
	pagesDone: function() {
		return Pages.find({bookId: this._id, content: {$ne: null}});
	},
	pagesToDo: function() {
		return Pages.find({bookId: this._id, content: null});
	}
})