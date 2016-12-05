demo.state2 = function(){};

var shuriken, bullets;
var log, logGroup;
var velocity = 700;
var nextFire = 0, fireRate = 200;
var bullet;
demo.state2.prototype = {
	preload: function(){
        this.game.load.image('shuriken',"images/shuriken.png");
        this.game.load.image('log',"images/wood_Icon.png");
        
        game.load.spritesheet('deidra',"images/deidra_walk1.png",51,60,12); //,
        
    },
	create: function(){
		this.game.stage.backgroundColor = '#FF5733';
		alert('Changing to state2');
        
		addEventStateListener();
        
        bullets = game.add.group();
        bullets.enableBody = true;
        bullets.enableBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(50,'shuriken');
        
        
        //checkWorldBounds - property
        bullets.setAll('checkWorldBounds', true);
        bullets.setAll('outOfBoundsKill', true);
        bullets.setAll('anchor.y', 0.5);
        bullets.setAll('scale.x',0.8);
        bullets.setAll('scale.y',0.8);
        
        deidraChar = game.add.sprite(700, game.world.centerY, 'deidra');
        deidraChar.rotation = 
        deidraChar.scale.set(2);
        deidraChar.anchor.setTo(0.5,0.5);
        deidraChar.frame = 7;
        
        //game.physics.arcade.enable(deidraChar);
        
        log = game.add.sprite(200,400,'log');
        game.physics.enable(log);
        
        logGroup = game.add.group();
        logGroup.enableBody = true;
        logGroup.physicsBodyType = Phaser.Physics.ARCADE;
        
        for(var i = 0; i<10; i++){
            logGroup.create(1300, 100*i+100, 'log')
        }

	},
	update: function(){
        deidraChar.rotation = game.physics.arcade.angleToPointer(deidraChar);
        if(game.input.activePointer.isDown){
            this.fire();
        }
        
        game.physics.arcade.overlap(bullets, log, this.hitLog);
        game.physics.arcade.overlap(bullets, logGroup, this.hitGroup);
	},
    
    fire: function(){
        if(game.time.now > nextFire){
            
            nextFire = game.time.now + fireRate;
            console.log('fire');
            //set to a dead bullet
            bullet = bullets.getFirstDead();
            //reset to loc of cannon
            bullet.reset(deidraChar.x,deidraChar.y);

            game.physics.arcade.moveToPointer(bullet, velocity)
        }
        
    },
    
    hitLog: function(){
        console.log('hit');
        log.kill();
        bullet.kill();
    },
    
    hitGroup: function(b, e){
        console.log('hit Group');
        b.kill();
        e.kill();
    }
};