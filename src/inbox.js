(function() {
  'use strict';

	var Inbox = function(){
		this.getEmail = function(){
			var userInfo = window.BT_SharedWorkerName.split('#');
			return userInfo[1];
		};
	};

	
	
	window.Inbox = Inbox;
	
}).call(this);