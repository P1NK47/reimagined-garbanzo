import { Application, Loader, Sprite } from 'pixi.js'

const app = new Application<HTMLCanvasElement>({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});


//Loader.shared.add({url: "dino.jpg", name: "myDino"});

const clampy: Sprite = Sprite.from("./dino.jpg");

console.log("Hola mundo",clampy.width, clampy.height);

//clampy.anchor.set(0);

clampy.x = 0;
clampy.y = 0;

app.stage.addChild(clampy);