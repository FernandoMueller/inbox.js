;(function( should, sum, undefined ) {
  'use strict';

  describe( 'User', function() {
    beforeEach(function() {
		window = {};
		window.BT_SharedWorkerName = 'shared_sync_worker#randalmaia@gmail.com';
	});

	it("get user email", function () {
		var inbox = new Inbox();
		var email = inbox.getEmail();
		email.should.equal('randalmaia@gmail.com');
	});
  });
})( chai.should(), window.sum );