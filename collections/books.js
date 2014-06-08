Books = new Meteor.Collection('books');

Meteor.methods({
	createBook: function(book) {
		var user = Meteor.user();

		if(!user) {
			throw new Meteor.Error(401, "Vous devez être connecté pour créer un livre");
		}

		if(!book.title || !book.description) {
			throw new Meteor.Error(422, 'Veuillez renseigner tous les champs');
		} 

		var newBook = {
			userId: user._id,
			author: user.username,
			title: book.title,
			description: book.description,
			pages: []
		}

		var bookId = Books.insert(newBook);

		return bookId;
	}
})