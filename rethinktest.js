r = require('rethinkdb');
var connection = null;
r.connect({ host: "localhost", port: 28015 }, function(err, conn) {
	if (err) throw err;
	connection = conn;
	r.dbCreate("runClubTest").run(connection, function(err, result) {
		if (err) throw err;
		console.log(result);
		r.db("runClubTest").tableCreate("testData").run(connection, function(err, result) {
			if (err) throw err;
			console.log(JSON.stringify(result, null, 2));
			r.db("runClubTest").table("testData").insert([
				{ name: "Alice", id: 1 }]).run(connection, function(err, result) {
				if (err) throw err;
				console.log(JSON.stringify(result, null, 2));
			});
		});
	});
});