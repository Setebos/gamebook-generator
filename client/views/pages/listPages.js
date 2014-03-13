Template.listPages.helpers({
	pages: function() {
		console.log(this._id);
		return Pages.find({bookId: this._id});
	}
})