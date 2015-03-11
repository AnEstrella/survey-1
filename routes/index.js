// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;



module.exports = function Route(app){
	app.get('/', function(req, res){
		res.render('index', {title: "Welcome Page"});
	});

	app.get('/results', function(req, res){
		console.log('POST INFO', req.body);
		res.render('results', {title: 'Results', session_data:req.session});
	});

	app.post('/result', function(req,res){
		console.log('POST INFO', req.body);
		req.session.name = req.body.name;
		req.session.location = req.body.location;
		req.session.language = req.body.language;
		req.session.comment = req.body.comment;
		req.session.sessionID = req.sessionID;
		req.session.save(function(){
			res.redirect('/results');
		});
	})

}