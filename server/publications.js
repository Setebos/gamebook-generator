Meteor.publish('books', function() {
	return Books.find({userId: this.userId});
});

Meteor.publish('singleBook', function(id) {
	return Books.find({_id: id});
});

Meteor.publish('pages', function(id) {
	return Pages.find({bookId: id});
});

Meteor.publish('singlePage', function(id) {
	return Pages.find({_id: id});
});