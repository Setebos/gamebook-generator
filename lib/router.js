Router.configure({
	layoutTemplate: 'layout'
	// waitOn: function() {
	// 	return [Meteor.subscribe('books'), Meteor.subscribe('pages')]
	// }
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
		waitOn: function() {
			return Meteor.subscribe('singleBook', this.params._id);
		},
		data: function() { return Books.findOne(this.params._id);}
	});
	
	this.route('listPages', {
		path: '/view/book/:_id',
		waitOn: function() {
			return [ 
				Meteor.subscribe('singleBook', this.params._id),
				Meteor.subscribe('pages', this.params._id),
			]
		},
		data: function() { 
			return Books.findOne(this.params._id);
		}
	});
});