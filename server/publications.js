Meteor.publish('books', function() {
	return Books.find();
});

Meteor.publish('myBooks', function() {
    return Books.find({userId: this.userId});
});

Meteor.publish('singleBook', function(id) {
	return Books.find({_id: id});
});

Meteor.publish('pages', function() {
	return Pages.find();
});

Meteor.publish('singlePage', function(id) {
	return Pages.find({_id: id});
});