(function() {
  'use strict';

	var Inbox;

	Inbox.user = function(){
		this.getEmail = function(){
			return 'randalmaia@gmail.com';
		};
	};


	if (typeof exports !== 'undefined') {
		module.exports = Inbox;
	} else {
		window.Inbox = Inbox;
	}
}).call(this);