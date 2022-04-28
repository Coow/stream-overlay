//https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/
//https://github.com/krissnawat/simple-react-upload

var express = require('express');
var app = express();
var multer = require('multer')
var cors = require('cors');
app.use(cors())

var bodyParser = require('body-parser')
// create application/json parser
var jsonParser = bodyParser.json()

const fs = require('fs');

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, `public/${req.params.location}`)
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname)
	}
})

var upload = multer({ storage: storage }).single('file')

app.get('/', function (req, res) {
	return res.send('Hello Server!')
})

app.post('/uploadImage/:location', function (req, res) {

	upload(req, res, function (err) {

		if (err instanceof multer.MulterError) {
			return res.status(500).json(err)
			// A Multer error occurred when uploading.
		} else if (err) {
			return res.status(500).json(err)
			// An unknown error occurred when uploading.
		}

		return res.status(200).send(req.file)
		// Everything went fine.
	})
});

app.post('/saveConfig', jsonParser, function (req, res) {
	console.log(req.body)
	fs.writeFile('src/Pages/GameState.json', JSON.stringify(req.body), function (err, data) {
		if (err) {
			return res.status(500).json(err)
		}
		console.log(data)
		return res.status(200).send("OK")
	})
});

app.post('/saveTeam', jsonParser, function (req, res) {
	console.log(req.body)
	fs.writeFile(`public/Teams/${req.body.teamName}.json`, JSON.stringify(req.body.info), function (err, data) {
		if (err) {
			return res.status(500).json(err)
		}
		//console.log(data)
		return res.status(200).send("OK")
	})
});

app.get('/teams', function (req, res) {
	let teams = []

	fs.readdir('./public/Teams', (err, files) => {
		files.forEach(file => {
			teams.push(file);
		})

		return res.status(200).send(teams)
	})
});

app.get('/casters', function (req, res) {
	let casters = []

	fs.readdir('./public/Casters', (err, files) => {
		files.forEach(file => {
			casters.push(file);
		})

		return res.status(200).send(casters)
	})
});

app.post('/saveCaster', jsonParser, function (req, res) {
	console.log(req.body)
	casterName = req.body.casterName.replace(/[\p{L}-]+/ug, "")
	fs.writeFile(`public/Casters/${req.body.casterName}.json`, JSON.stringify(req.body.info), function (err, data) {
		if (err) {
			return res.status(500).json(err)
		}
		//console.log(data)
		return res.status(200).send("OK")
	})
});

app.get('/images/:folder', function (req, res) {
	let images = []

	fs.readdir(`./public/${req.params.folder}`, (err, files) => {
		files.forEach(file => {
			images.push(file);
		})

		return res.status(200).send(images)
	})
});

app.post('/css/:location', function (req, res) {

	upload(req, res, function (err) {

		if (err instanceof multer.MulterError) {
			return res.status(500).json(err)
			// A Multer error occurred when uploading.
		} else if (err) {
			return res.status(500).json(err)
			// An unknown error occurred when uploading.
		}

		return res.status(200).send(req.file)
		// Everything went fine.
	})
});

app.get('/css/:location', function (req, res) {
	let stylesheets = []

	fs.readdir(`./public/CSS/${req.params.location}`, (err, files) => {
		files.forEach(file => {
			stylesheets.push(file);
		})

		return res.status(200).send(stylesheets)
	})
});

app.listen(30061, function () {
	console.log('App running on port 30061');
});