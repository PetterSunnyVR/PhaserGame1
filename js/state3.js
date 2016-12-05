demo.state3 = function(){};
var b1, b2, b3, sound;
demo.state3.prototype = {
	preload: function(){
        game.load.image('button1','images/button1.png');
        game.load.image('button2','images/button2.png');
        game.load.image('button3','images/button3.png');
        game.load.audio('pops','sounds/buttonPops.mp3')
        
    },
	create: function(){
		addEventStateListener();
        
        sound = game.add.audio('pops');
        sound.addMarker('low',0.15,0.3);
        sound.addMarker('high',1.1,1.5);
        
        b1 = game.add.button(100,100,'button1', function(){
            changeState(null,1);
        });
        b2 = game.add.button(600,400,'button2', function(){
            changeState(null,2);
        });
        b3 = game.add.button(1100,700,'button3');
        
        b1.onInputDown.add(this.tint, b1);
        b2.onInputDown.add(this.tint, b2);
        b3.onInputDown.add(this.tint, b3); //function,context
        
        b1.onInputUp.add(this.unTint, b1);
        b2.onInputUp.add(this.unTint, b2);
        b3.onInputUp.add(this.unTint, b3);
	},
	update: function(){

	},
    tint: function(){
        this.tint = 0xbbbbbb;
        sound.play('low');
    },
    unTint: function(){
        this.tint = 0xffffff;
        sound.play('high');
    }
};