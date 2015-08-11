(function() {
  'use strict';

	var Inbox = function(){
		this.getEmail = function(){
			var user = window.window.BT_WorkerInitMessage;
			var findMail = /[a-z0-9._%+-]+@+[a-z0-9._%+-]+.[a-z]{2,4}/g;
			return user.match(findMail);
		};
	};

	if (typeof exports !== 'undefined') {
		module.exports = Inbox;
	} else {
		window.Inbox = Inbox;
	}
}).call(this);