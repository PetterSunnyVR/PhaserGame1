demo.state6 = function(){};
demo.state6.prototype = {
	preload: function(){
        game.load.image('volcano','images/volcano.png');
        game.load.image('redBall','images/redBall.png');
        game.load.image('orangeBall','images/orBall.png');
    },
	create: function(){
		addEventStateListener();
        
        var volcano = game.add.sprite(750, 1000, 'volcano');
        volcano.anchor.setTo(0.5, 1);
	
        var emitter = game.add.emitter(750,500,2000);
        emitter.makeParticles(['redBall','orangeBall'], 0, 500, false, true);
        emitter.maxParticleSpeed.set(300,-300);
        emitter.minParticleSpeed.set(-300,-100);
        emitter.gravity = 300;
        
        
        game.time.events.add(2000, function(){
            emitter.start(false,5000,20);
            game.time.events.loop(500, function(){
               if(emitter.on) {
                   emitter.on = false;
               }else{
                   emitter.on = true;
               }
            });
        });
    },
	update: function(){
        
	}
};