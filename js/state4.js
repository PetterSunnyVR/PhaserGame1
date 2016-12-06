

demo.state4 = function(){};

var a1,a2,a3,a4,a5;
var tween1;

demo.state4.prototype = {
	preload: function(){
        game.load.spritesheet('deidra',"images/deidra_walk1.png",51,60,12); //,
    },
	create: function(){
		addEventStateListener();
        
        a1 = game.add.sprite(50,100,'deidra');
        a2 = game.add.sprite(350,100,'deidra');
        a3 = game.add.sprite(650,100,'deidra');
        a4 = game.add.sprite(950,100,'deidra');
        a5 = game.add.sprite(1250,100,'deidra');
        
        
        game.add.tween(a1).to({y: 400}, 2000, 'Linear', true);
        tween1 = game.add.tween(a2).to({x: 100, y: 0}, 1000, 'Elastic.easeOut');
        game.add.tween(a3).from({y: 1000}, 1500, 'Circ.easeOut', true);
        game.add.tween(a4.anchor).to({x: 1}, 1000, 'Elastic.easeOut', true, 1000, 2 , true);
        game.add.tween(a4.anchor).to({x: 1}, 1000, 'Elastic.easeOut', true, 1000, 2 , true);
        game.add.tween(a5).to({alpha: 0}, 1000, 'Bounce', true, 100, 2 , true);
	},
	update: function(){

	}
};