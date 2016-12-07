WebFontConfig = {
  google: {families: ['Candal','Indie Flower']}  
};

demo.state8 = function(){};
var text, sentence;
demo.state8.prototype = {
	preload: function(){
        game.load.script('webfonts','//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js')
    },
	create: function(){
        game.stage.backgroundColor = '#99e6e6';
		addEventStateListener();
        
        text = 'Find me still searching For someone to lead me Can you guide me To the revolt inside me, Promise Surviving The Breach, Promise Surviving The Breach In the sky, Templar Igniting Fire inside me, Maker Remind me //Gone are the days Of our peace, Now we reside In the great divide, No promise Surviving The Breach In the sky.';
        
        //game.add.text(100,400,'Hello world', {fontSize: '100px', fill});
        this.spellOutText(100,100, 1000, text, 30, 40, '#ffffff', 'Indie Flower');
	},
    spellOutText: function(x, y, width, text, fontSize, speed, fill, font){
        //empty string set with a specyfic {font}
        sentence = game.add.text(x,y, '', {fontSize: fontSize+ 'px', fill: fill, font: font});
        var currentLine = game.add.text(10,10, '', {fontSize: fontSize+ 'px', font: font});
        currentLine.alpha = 0;
        //loops through text and appends words to above string
        var loop = game.time.events.loop(speed, addChar);
        
        //where are we in text
        var index = 0;
        
        function addChar(){
            sentence.text += text[index];
            currentLine.text += text[index];

            if(currentLine.width > width && text[index] == ' '){
                sentence.text += "\n";
                currentLine.text = '';
            }
            
            if(index >= text.length-1){
                game.time.events.remove(loop);
                console.log('stop');
            }
            index++;
            
            
        }
    },
	update: function(){

	}
};