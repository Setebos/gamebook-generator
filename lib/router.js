Router.configure({
	layoutTemplate: 'layout',
	waitOn: function() {
		return [Meteor.subscribe('books'), Meteor.subscribe('pages')]
	}
});

Router.map(function() {
	this.route('homepage', {
		path: '/'
	});
	
	this.route('newBook', {
		path: '/new/book'
	});

	this.route('newPage', {
		path: '/new/page/:_id',
		data: function() { return Books.findOne(this.params._id);}
	});
});