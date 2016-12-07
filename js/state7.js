
demo.state7 = function(){};
var arrow, startPoitX, startPoitY, endPointX, endPointY, swipeDirection, leeWay=10;
demo.state7.prototype = {
	preload: function(){
        game.load.image('arrow',"images/arrow.png");
    },
	create: function(){
        game.stage.background = '#a6ff4d';
		addEventStateListener();
        
        arrow = game.add.sprite(700,500, 'arrow');
        arrow.anchor.setTo(0.5);
        
        game.input.onDown.add(this.startSwipe);
        game.input.onUp.add(this.getSwipeDirection)
	},
    
    startSwipe: function(){
        //console.log(game.input.x+' '+game.input.y);  
        startPoitX = game.input.x;
        startPoitY = game.input.y;
    },
    
    getSwipeDirection: function(){
        //console.log(game.input.x+' '+game.input.y); 
        endPointX = game.input.x;
        endPointY = game.input.y;
        
        if(Math.abs(endPointX-startPoitX) < leeWay && Math.abs(endPointY-startPoitY)< leeWay){
            return false;
        }
        
        if(Math.abs(endPointX-startPoitX)>Math.abs(endPointY-startPoitY)){
            console.log('horizonral');
            if(endPointX>startPoitX){
                swipeDirection=90;
            }else{
                swipeDirection=270;
            }
        }else{
            console.log('vertical');
            if(endPointY>startPoitY){
                swipeDirection=180;
            }else{
                swipeDirection=0;
            }
        }
        
        arrow.angle = swipeDirection;
    },
    
	update: function(){
        
	}
};