var demo = {}; //game object created 1 time
//var upKey;
demo.state0 = function(){};
demo.state0.prototype = {
	preload: function(){},
	create: function(){
		this.game.stage.backgroundColor = '#DDDDDD';
		alert('state0');
		//upKey = 
		addEventStateListener();
		
		
		//addKey(50,this.changeState,2);
		//console.log(upKey);
		//upKey.onDown.add(this.changeState, null, null, 1); //call changeState and pass it '1' as arg
		//upKey.onDown.add(this.changeState, null, null, 2);
		
	},

	/*changeState: function(i,stateNum){
		console.log(i); //i=keyPressed
		this.game.state.start('state'+stateNum);
	},*/

	update: function(){

	}
};

function changeState(i,stateNum){
	console.log(i); //i=keyPressed
	this.game.state.start('state'+stateNum);
};

function addKey(key, fn, args){
	
	game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
};

function addEventStateListener(){
	for(var i = 0; i<10; i++ ){
			addKey(48+i,changeState,i);
		}
}