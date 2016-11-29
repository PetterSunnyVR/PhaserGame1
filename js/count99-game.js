  //window/global scope
  var c99 = {};
  
  c99.Tile = (function(){
  	function Tile(number){
  		this.initialize();

  		this.number = number;

  		this.width = this.height = 80;

  		//shape variable - abstract object ?
  		var shape = new createjs.Shape();
  		//kreska - ustala grubość
  		shape.graphics.setStrokeStyle(1);
  		//kolor kreski
  		shape.graphics.beginStroke("#000");
  		shape.graphics.beginFill("#efefef");

  		//define the shape
  		shape.graphics.rect(0 ,0 ,this.width ,this.height);
  		//put the shape on the stage
  		this.addChild(shape);

  		var numberText = new createjs.Text(number, "24px Helverica","#ac1000");
  		numberText.x = this.width/2;
  		numberText.y = this.height/2;

  		//latter object covers earlier one
  		numberText.textAlign = "center";
  		numberText.textBaseline = "middle";

  		this.addChild(numberText);
  	}

  	//
  	var p = Tile.prototype = new createjs.Container();
  	return Tile;
  })();
  //Game is the name of a class
  c99.Game = (function(){
  	//constructor
  	function Count99Game(){
  		console.log("Count99 game starts.");

		//reference the canvas tag
  		this.canvas = document.getElementById('game-canvas');

  		//use EaselJS
  		this.stage = new createjs.Stage(this.canvas);

  		var totalTiles = 10;

  		var tileOnPress = function(event) {
  				this.stage.removeChild(event.target);
 				this.stage.update();
		};

  		var that = this;
  		for (var i = totalTiles; i >0; i--) {
  			var tile = new c99.Tile(i);
	  		this.stage.addChild(tile);

	  		tile.x = Math.random()*(this.canvas.width-tile.width);
	  		tile.y = Math.random()*(this.canvas.height-tile.height);

	  		tile.onPress = (tileOnPress).bind(this);
  		}


  		//refreshes the canvas view
  		this.stage.update();
  	}

  	return Count99Game
  })();

//window load event - initializes Game class 
  window.onload = function(){
  	//entry point
  	var game = new c99.Game();
  }