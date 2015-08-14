;(function( should, sum, undefined ) {
  'use strict';

  describe( 'Get email', function() {
    beforeEach(function() {
		window.BT_SharedWorkerName = 'shared_sync_worker#randalmaia@gmail.com';
	});

	it("get user email", function () {
		var inbox = new Inbox();
		var email = inbox.getEmail();
		email.should.equal('randalmaia@gmail.com');
	});
  });

  describe( 'Get Username', function() {
	var nameContainer;
    beforeEach(function() {
		nameContainer= document.createElement('div');
		nameContainer.setAttribute('class','gb_Xa');
		nameContainer.innerHTML = "Randal Maia";
		document.body.appendChild(nameContainer);
	});

	it("get user name", function () {
		var inbox = new Inbox();
		var username = inbox.getUsername();
		console.log( document.querySelector('.gb_Xa').innerHTML);
		username.should.equal('Randal Maia');
	});
  });
})( chai.should(), window.sum );