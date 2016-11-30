demo.state2 = function(){};
demo.state2.prototype = {
	preload: function(){},
	create: function(){
		this.game.stage.backgroundColor = '#FF5733';
		alert('Changing to state2');

		addEventStateListener();
	},
	update: function(){

	}
};