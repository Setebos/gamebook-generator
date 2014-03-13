Meteor.publish('books', function() {
	return Books.find({userId: this.userId});
});

Meteor.publish('pages', function() {
	return Books.find({userId: this.userId});
});