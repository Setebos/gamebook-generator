if(Meteor.users.find().count() === 0) {
	var setebosId = Accounts.createUser({
		username: 'Setebos',
		password: 'password'
	});

	var setebos = Meteor.users.findOne(setebosId);

	Books.insert({
		userId: setebos._id,
		author: setebos.username,
		title: 'Livre 1'
	});

	Books.insert({
		userId: setebos._id,
		author: setebos.username,
		title: 'Livre 2'
	});

	Books.insert({
		userId: setebos._id,
		author: setebos.username,
		title: 'Livre 3'
	});
}