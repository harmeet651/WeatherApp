var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var request = require('request');
//init app
var app = express();

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set static path
app.use(express.static(path.join(__dirname, 'public')))

//home route
app.get('/', function (req, res) {
	res.render('public');
});

app.get("/allData", function (req, res) {
	console.log(req.url);
	console.log(req.query);
	var temp = req.query;
	var data = temp.newData;

	urlNp = "http://api.openweathermap.org/data/2.5/weather?lat=" + req.query.lat + "&lon=" + req.query.lon + "&appid=ba6ef401f6d70d1c7f50509ad91be1d0";

	var urlNew = urlNp.replace(/ /g, '+');
	console.log(urlNp);
	var urlNew = encodeURI(urlNp);
	request.get({
		url: urlNew,
		json: true,
		headers: { 'User-Agent': 'request' }
	}, (err, response, data) => {
		if (err) {
			console.log('Error:', err);
		}
		else if (res.statusCode !== 200) {
			console.log('Status:', response.statusCode);
		} else {

			console.log(data);
			res.setHeader('content-type', 'application/json');
			res.json(data);
		}
	});

});

app.get("/apiTwo", function (req, res) {
	console.log(req.url);
	console.log(req.query);
	var temp = req.query;
	var data = temp.newData;

	urlNp2 = "http://api.openweathermap.org/data/2.5/weather?q=" + req.query.name + "&appid=ba6ef401f6d70d1c7f50509ad91be1d0";

	var urlNew2 = urlNp2.replace(/ /g, '+');
	console.log(urlNp2);
	var urlNew2 = encodeURI(urlNp2);
	request.get({
		url: urlNew2,
		json: true,
		headers: { 'User-Agent': 'request' }
	}, (err, response, data) => {
		if (err) {
			console.log('Error:', err);
		}
		else if (res.statusCode !== 200) {
			console.log('Status:', response.statusCode);
		} else {

			console.log(data);
			res.setHeader('content-type', 'application/json');
			res.json(data);
		}
	});

});
app.get("/fullWeath", function (req, res) {
	console.log(req.url);
	console.log(req.query);
	var temp = req.query;
	var data = temp.newData;

	fullWeather = "http://api.openweathermap.org/data/2.5/forecast?lat=" + req.query.lat + "&lon=" + req.query.lon + "&appid=ba6ef401f6d70d1c7f50509ad91be1d0";

	var urlNew3 = fullWeather.replace(/ /g, '+');
	console.log(fullWeather);
	var urlNew3 = encodeURI(fullWeather);
	request.get({
		url: urlNew3,
		json: true,
		headers: { 'User-Agent': 'request' }
	}, (err, response, data) => {
		if (err) {
			console.log('Error:', err);
		}
		else if (res.statusCode !== 200) {
			console.log('Status:', response.statusCode);
		} else {

			console.log(data);
			res.setHeader('content-type', 'application/json');
			res.json(data);
		}
	});

});

app.get("/cityData", function(req, res){
	majorCityWeather = "http://dataservice.accuweather.com/currentconditions/v1/topcities/100?apikey=JXfluINrUxXR7xJ9sD3NFpCGEaAYt6J8";

	var urlForCities = majorCityWeather.replace(/ /g, '+');
	console.log(urlForCities); 
	var city = encodeURI(urlForCities);
	request.get({
			url: city,
			json: true,
			headers: {'user-Agent' : 'request'}
		},(err, response, data) => {
			if(err){
				console.log('Error:', err);
			}
			else if(res.statusCode!==200){
				console.log('Status:', response.statusCode);
			} else {
				console.log(data);
				res.setHeader('content-type', 'application/json');
				res.json(data);
			}
		});
});

//start server
app.listen(3000, function () {
	console.log('Server started on port 3000..')
});
