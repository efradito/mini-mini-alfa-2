var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"man","sourceUrl":null,"frameSize":{"x":221,"y":541},"frameCount":1,"looping":true,"frameDelay":12,"version":"_22HSx4zS.tMWxPSZkLlwAsJaHgxuMQl","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":221,"y":541},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":418,"y":749},"frameCount":1,"looping":true,"frameDelay":12,"version":"6RYHF4V7o8nKyuXo8hm_5rJmrv_6iZYE","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":418,"y":749},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy2","sourceUrl":null,"frameSize":{"x":86,"y":193},"frameCount":1,"looping":true,"frameDelay":12,"version":"CxB2gyF_adpW_eFCtbmlJZL3CeBJss81","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":193},"rootRelativePath":"assets/dfc53be7-786c-4305-b8eb-81fa595e9903.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"personaje","sourceUrl":null,"frameSize":{"x":484,"y":299},"frameCount":1,"looping":true,"frameDelay":12,"version":"JdgwDBbO5jPec8gEzoB8tbRSbMa4eSng","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":484,"y":299},"rootRelativePath":"assets/47fade86-5bd1-4789-87af-896fb1433a7b.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"personaje2","sourceUrl":null,"frameSize":{"x":454,"y":279},"frameCount":1,"looping":true,"frameDelay":12,"version":"jmviJkO80xi6Vwu_Ef5JSundG.LQPs1F","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":454,"y":279},"rootRelativePath":"assets/043deebf-64b8-4795-be8d-db5055414f2f.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"personaje3","sourceUrl":null,"frameSize":{"x":193,"y":504},"frameCount":1,"looping":true,"frameDelay":12,"version":"hfZHBP_2G64l5i7tXrLA0QX9YlGuHiEy","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":193,"y":504},"rootRelativePath":"assets/c26b6449-0b6c-4483-8486-107c0091c26e.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"personaje4","sourceUrl":null,"frameSize":{"x":193,"y":504},"frameCount":1,"looping":true,"frameDelay":12,"version":"9JU8vbbhbbRUQB4rPACG2B7Gzc.mXct8","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":193,"y":504},"rootRelativePath":"assets/3221caad-ae37-4eec-92a8-56bae4769e66.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"WHNbIDbxY8.toGt7kwWjD2lrMEB4cXTh","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var frontBorder = createSprite(400,200,10,400);
var backBorder = createSprite(0,200,10,400);
var enemy
var lives = 0;
var score = 0;
var gamestate = "serve";
var roomvalue = 1; 
var personaje = createSprite(200,200,100,100);
personaje.shapeColor = "purple";
personaje.scale = 0.1;
var downBorder = createSprite(200,400,400,10);
var upBorder = createSprite(200,0,400,10);
backBorder.shapeColor = "green";
frontBorder.shapeColor = "yellow";
downBorder.shapeColor = "blue";
upBorder.shapeColor = "red";

function draw() {
    
  background("white");
  personaje.collide(backBorder);
  personaje.collide(frontBorder);
  personaje.collide(downBorder);
  personaje.collide(upBorder);
  personajeMovement();
  roomAdministration();
   drawSprites();
  
  
}
function personajeMovement(){
   if (keyDown("up")){
    personaje.y=personaje.y-5;
  }
  if (keyDown("down")){
    personaje.y=personaje.y+5;
  }
  if (keyDown("left")){
    personaje.x=personaje.x-5;
  }
  if (keyDown("right")){
    personaje.x=personaje.x+5;
  }
}


function principalteleport1(){
  if(personaje.isTouching(backBorder) && roomvalue === 2){
    personaje.x = 390;
    principalRoom();
    roomvalue = 1;
   }
}
function principalteleport2(){
  if(personaje.isTouching(frontBorder) && roomvalue === 3){
    personaje.x = 10;
    principalRoom();
    roomvalue = 1;
   }
}
function principalteleport3(){
  if(personaje.isTouching(upBorder) && roomvalue === 4){
    personaje.y = 390;
    principalRoom();
    roomvalue = 1;
   }
}
function principalteleport4(){
  if(personaje.isTouching(downBorder) && roomvalue === 5){
    personaje.y = 10;
    principalRoom();
    roomvalue = 1;
   }
}
function teleportFront(){
  if(personaje.isTouching(frontBorder)){
    personaje.x = 10;
    yellowRoom();
    roomvalue = 2;
   }  
}
function teleport2(){
  if(personaje.isTouching(backBorder)){
    personaje.x = 390;
    greenRoom();
    roomvalue = 3;
   }
}
function teleport3(){
  if(personaje.isTouching(downBorder)){
    personaje.y = 10;
    blueRoom();
    roomvalue = 4;
   }
}

function teleport4(){
  if(personaje.isTouching(upBorder)){
    personaje.y = 390;
    redRoom();
    roomvalue = 5;
   }
}

function principalRoom(){
  upBorder.shapeColor = "red";
  backBorder.shapeColor = "green";
  downBorder.shapeColor = "blue";
  frontBorder.shapeColor = "yellow";
}

function yellowRoom(){
  upBorder.shapeColor = "yellow";
  backBorder.shapeColor = "gray";
  downBorder.shapeColor = "yellow";
  frontBorder.shapeColor = "yellow";
}
function greenRoom(){
  upBorder.shapeColor = "green";
  backBorder.shapeColor = "green";
  downBorder.shapeColor = "green";
  frontBorder.shapeColor = "gray";
}
function blueRoom(){
  upBorder.shapeColor = "gray";
  backBorder.shapeColor = "blue";
  downBorder.shapeColor = "blue";
  frontBorder.shapeColor = "blue";
}
function redRoom(){
  upBorder.shapeColor = "red";
  backBorder.shapeColor = "red";
  downBorder.shapeColor = "gray";
  frontBorder.shapeColor = "red";
}

function roomAdministration(){
  if(roomvalue === 1){
  teleportFront();
  teleport2();
  teleport3();
  teleport4();
  }
  if(roomvalue === 2){
  principalteleport1();
  }
  if(roomvalue === 3){
  principalteleport2();
  }
  if(roomvalue === 4){
  principalteleport3();
  }
  if(roomvalue === 5){
  principalteleport4();
  }
}






















//¿enserio estas aqui?, ¿que haces aqui?
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
