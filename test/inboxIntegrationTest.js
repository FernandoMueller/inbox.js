var links = [];
var casper = require('casper').create();

casper.start('http://www.google.com/inbox/', function() {
	this.click('.learn-more-btn');
});

casper.then(function() {
	
	this.fill('#gaia_loginform',{
		'Email':'randalmaia@gmail.com'
	});

	this.click('.rc-button-submit');
});

casper.then(function() {
	console.log(document.querySelector('#Passwd'));
	
	console.log(this.getTitle());
});

	

casper.run();
