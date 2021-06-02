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
		cb(null, 'public/TeamImages')
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname)
	}
})

var upload = multer({ storage: storage }).single('file')

app.get('/', function (req, res) {
	return res.send('Hello Server!')
})

app.post('/upload', function (req, res) {

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

app.get('/images', function (req, res) {
	let images = []

	fs.readdir('./public/TeamImages', (err, files) => {
		files.forEach(file => {
			images.push(file);
		})

		return res.status(200).send(images)
	})
});

app.listen(30061, function () {
	console.log('App running on port 30061');
});