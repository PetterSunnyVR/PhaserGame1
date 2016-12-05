var demo = {}; //game object created 1 time

var deidraChar;
var backgroundsArray = [];
var bg_wdith;
var speed = 4;
//var upKey;
demo.state0 = function(){};
demo.state0.prototype = {
	preload: function(){
		//game.load.spritesheet('mummy', 'images/deidara.png', 90, 93, 12);
		game.load.spritesheet('deidra',"images/deidra_walk1.png",51,60,12); //,
		game.load.image('background',"images/road1.png");
	},
	create: function(){
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.stage.backgroundColor = '#800080';
		//alert('state0');
		//upKey = 
		addEventStateListener();
		this.game.world.setBounds(0,0,5454,1000);
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; //resizes the image to fit avaliable space keeping original ratio - global

		//images are drawn on top of each other so the order matters
	
		bg_wdith = game.cache.getImage('background').width; // GET THE BACKGROUND WIDTH FROM THE PHASERS' LOADED IMAGE CACHE
		for (var i=0; i<3; i++) { // CREATE OUR THREE BACKGROUND SPRITES AND THEN STORE THEM IN AN ARRAY FOR ANY FUTURE USE
				this['background' + i] = game.add.sprite(i * bg_wdith, -200, 'background');
				backgroundsArray.push(this['background' + i]);
		}

		createDeidra();
        
        
	    this.game.camera.deadzone = new Phaser.Rectangle(400,0,800, 1000);
		//addKey(50,this.changeState,2);
		//console.log(upKey);
		//upKey.onDown.add(this.changeState, null, null, 1); //call changeState and pass it '1' as arg
		//upKey.onDown.add(this.changeState, null, null, 2);
		
	},

	/*changeState: function(i,stateNum){
		console.log(i); //i=keyPressed
		this.game.state.start('state'+stateNum);
	},*/

	movementInput: function(){
		if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
			console.log("RIGHT");
			deidraChar.x+=speed;
			//deidraChar.animations.stop('Stand');
			deidraChar.animations.play('WalkRight',12,true);
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			console.log("LEFT");
			deidraChar.x-=speed;
			//deidraChar.animations.stop('Stand');
			deidraChar.animations.play('WalkLeft',12,true);
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
			console.log("UP");
			deidraChar.y-=speed;
			//deidraChar.animations.stop('Stand');
			deidraChar.animations.play('WalkUp',12,true);
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
			console.log("UP");
			deidraChar.y+=speed;
			//deidraChar.animations.stop('Stand');
			deidraChar.animations.play('WalkDown',12,true);
		}
		else{
			//console.log("STANDING");
			//deidraChar.animations.stop('Walk');
			//deidraChar.animations.play('Stand',1,true);
			deidraChar.frame = 9;
		}
		if(deidraChar.y < 648){
			deidraChar.y =  648;
		}
	},

	update: function(){
		this.movementInput();
		/*if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
			console.log("RIGHT");
			deidraChar.x+=4;
			deidraChar.animations.stop('Stand');
			deidraChar.animations.play('Walk',6,true);
		}*/
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

function createDeidra(){
    //var road = game.add.sprite(0,-200,'background');
		deidraChar = game.add.sprite(300, game.world.centerY+150, 'deidra');
		
		this.game.physics.enable(deidraChar);
		deidraChar.body.collideWorldBounds = true;

		deidraChar.anchor.set(0.5);
	    deidraChar.scale.set(2);
	    deidraChar.smoothed = false;

	    deidraChar.animations.add('Stand',[9]);
	    deidraChar.animations.add('WalkRight',[0,1,2]);
	    deidraChar.animations.add('WalkLeft',[3,4,5]);
	    deidraChar.animations.add('WalkUp',[6,7,8]);
	    deidraChar.animations.add('WalkDown',[9,10,11]);
	    //deidraChar.animations.play('Stand', 1, false);
	    deidraChar.frame = 9;

	    this.game.camera.follow(deidraChar);
}

