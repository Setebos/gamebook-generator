Router.configure({
	layoutTemplate: 'layout'
	// waitOn: function() {
	// 	return [Meteor.subscribe('books'), Meteor.subscribe('pages')]
	// }
});

Router.map(function() {
	this.route('homepage', {
		path: '/',
		waitOn: function() {
			return Meteor.subscribe('myBooks');
		},
	});
	
	this.route('newBook', {
		path: '/new/book'
	});

	this.route('newPage', {
		path: '/new/page/:_id/:pageId',
		waitOn: function() {
			return [
				Meteor.subscribe('singleBook', this.params._id),
				Meteor.subscribe('pages')
			]
		},
		data: function() { 
			return Books.findOne(this.params._id)
		}
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

	this.route('showBook', {
		path: '/show/book/:_id',
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