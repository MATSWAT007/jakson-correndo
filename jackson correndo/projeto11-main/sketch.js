var homem,homem_correndo;
var rua,rua_imagem;

function preload(){
  homem_correndo = loadAnimation("runner-1.png","runner-2.png");
  estrada_imagem = loadImage("path.png"); 
}

function setup(){
  createCanvas(400,400);
  
  rua = createSprite(190,20);
  rua.addImage("ground",estrada_imagem);
  rua.scale = 1.4;
  rua.width/2;
  rua.velocityY = 8
  
  homem = createSprite(190,335);
  homem.addAnimation("running",homem_correndo);
  homem.scale = 0.08;
}

function draw(){
  background("black");

   if (keyDown("RIGHT")){
     homem.x = homem.x +3;
   }
   if (keyDown("LEFT")){
     homem.x = homem.x -3;
   }

   if (rua.y > 400){
     rua.y = rua.width/2;
   }


   if(homem.x < 60){
     homem.x = 60;
   }
    
   if(homem.x > 340){
     homem.x = 340;
   }

  drawSprites();
}