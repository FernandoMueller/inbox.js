(function() {
  'use strict';

	var Inbox = function(){
		this.getEmail = function(){
			var userInfo = window.BT_SharedWorkerName.split('#');
			return userInfo[1];
		};

		this.getUsername = function(){
			return document.querySelector('.gb_Xa').innerHTML;
		};
	};
	
	window.Inbox = Inbox;
	
}).call(this);