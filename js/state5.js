demo.state5 = function(){};
var acc = 400;
var platformGroup;
demo.state5.prototype = {
	preload: function(){
        game.load.spritesheet('deidra',"images/deidra_walk1.png",51,60,12); //,
        game.load.image('platform',"images/sand.png");
    },
	create: function(){
		addEventStateListener();
        
        deidraChar = game.add.sprite(300, game.world.centerY+150, 'deidra');
        platformGroup = game.add.group();
        platform = game.add.sprite(0,800,'platform')
        platform.scale.set(5);
        platformGroup.create(650,400, 'platform');
        platformGroup.create(1300,400, 'platform');
       
        game.physics.enable([deidraChar, platform, platformGroup]);
        platformGroup.setAll('scale.x',3);
        platformGroup.setAll('scale.y',3);
        platformGroup.setAll('body.immovable',true);
        //deidraChar.frame = 9;
        deidraChar.body.gravity.y = 500;
        deidraChar.body.bounce.y = 0.3;
        deidraChar.body.collideWorldBounds = true;
        deidraChar.anchor.set(0.5);
        deidraChar.scale.set(2);
        
        deidraChar.animations.add('Stand',[9]);
	    deidraChar.animations.add('WalkRight',[0,1,2]);
	    deidraChar.animations.add('WalkLeft',[3,4,5]);
	    deidraChar.animations.add('WalkUp',[6,7,8]);
	    deidraChar.animations.add('WalkDown',[9,10,11]);
	    //deidraChar.animations.play('Stand', 1, false);
	    deidraChar.frame = 9;
        deidraChar.body.drag.x = 400;
        
        platform.body.immovable = true;
    },
	update: function(){
        this.movementInput();
        game.physics.arcade.collide(deidraChar, [platform, platformGroup]);
        //game.physics.arcade.collide(deidraChar, platformGroup);
	},
    movementInput: function(){
		if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
			console.log("RIGHT");
			deidraChar.body.acceleration.x = acc;
			//deidraChar.animations.stop('Stand');
			deidraChar.animations.play('WalkRight',12,true);
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			console.log("LEFT");
			deidraChar.body.acceleration.x = -acc;
			//deidraChar.animations.stop('Stand');
			deidraChar.animations.play('WalkLeft',12,true);
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
			console.log("UP");
			deidraChar.body.velocity.y = -300;
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
            deidraChar.body.acceleration.x = 0;
		}
        if(deidraChar.x > 1464){
            deidraChar.x = 1464;
            deidraChar.body.acceleration.x = 0;
        }
	}
};