
demo.state1 = function(){};
var obstacleSign;
var obstacleTree;
var trees;
var ground;
var vel = 500;
demo.state1.prototype = {
	preload: function(){
        
        //load tilemap
		this.game.load.tilemap('field','images/tilemap.json', null, Phaser.Tilemap.TILED_JSON); //default is CSV thats why we need last argument
		this.game.load.image('cactus',"images/cactus.png");
        this.game.load.image('sand',"images/sand.png");
        
        game.load.spritesheet('deidra',"images/deidra_walk1.png",51,60,12); //,
	},
	create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.stage.backgroundColor = '#DDDDDD';
		//alert('Changing to state1');
        
		//this.game.world.setBounds(0,0,1344,1000);
		//game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; //resizes the image to fit avaliable space keeping original ratio - global
		addEventStateListener();
		//game.state.start('state2');
		//var road = game.add.sprite(0,-200,'background');
        
        //add tilemap to canvas
		var map = this.game.add.tilemap('field');
		map.addTilesetImage('sand');
        map.addTilesetImage('cactus');

        //layers
        ground = map.createLayer('Ground');
		trees = map.createLayer('trees');
		
        
        map.setCollision(2,true, 'trees');
        
        //char
        deidraChar = game.add.sprite(300, game.world.centerY+150, 'deidra');
        deidraChar.scale.set(0.7);
        deidraChar.anchor.setTo(0.5,0.5);
        game.physics.arcade.enable(deidraChar);
        deidraChar.body.velocity.x = 0;
        deidraChar.body.velocity.y = 0;
        
        curs
	},
	update: function(){
        
        this.deidraWalk();
        
	},
    
    deidraWalk: function(){
        game.physics.arcade.collide(deidraChar, trees,function(){console.log('trees');});
        
        
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
			console.log("RIGHT");
			deidraChar.body.velocity.x = vel;
            deidraChar.body.velocity.y = 0;
			//deidraChar.animations.stop('Stand');
			deidraChar.animations.play('WalkRight',12,true);
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			console.log("LEFT");
			deidraChar.body.velocity.x = -vel;
            deidraChar.body.velocity.y = 0;
			deidraChar.animations.stop('Stand');
			deidraChar.animations.play('WalkLeft',12,true);
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
			console.log("UP");
			deidraChar.body.velocity.y = -vel;
            deidraChar.body.velocity.x = 0;
			//deidraChar.animations.stop('Stand');
			deidraChar.animations.play('WalkUp',12,true);
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
			console.log("DOWN");
			deidraChar.body.velocity.y = vel;
            deidraChar.body.velocity.x = 0;
			//deidraChar.animations.stop('Stand');
			deidraChar.animations.play('WalkDown',12,true);
		}
		else{
            deidraChar.body.velocity.x = 0;
            deidraChar.body.velocity.y = 0;
            //deidraChar.body.veolcity.y = 0;
			//console.log("STANDING");
			//deidraChar.animations.stop('Walk');
			//deidraChar.animations.play('Stand',1,true);
			deidraChar.frame = 9;
		}
	}
};