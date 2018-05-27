//bullet logic
let bullet = new Image();
bullet.src = "image/shadowBullet2.png";
bullet.onload = draw;
let fire=false;
let bullet2 = new Image();
bullet2.src = "image/shadowBullet.png";
bullet2.onload = draw;
let fire2=false;

 let fireCrack2 = 0;

 let fireCrack = 0;
let img = new Image();
img.src = "image/drifter.png"; //sprite sheet
let img2 = new Image();
img2.src = "image/drifter2.png"; //sprite sheet
img.onload = draw;
img2.onload = draw;
let time = Date.now();
let delay = 50; //trottle
let speed = 3; //skorost na dvijenie
let count = 0; //0 e purvi frame ot spritesheeta
let count2 = 0

let imgX=360; //nachalna poziciq
let imgY=300;

let img2X=260; //nachalna poziciq
let img2Y=200;

 let bullX=-50;
 let bullY=-50;
 let bull2X=-50;
 let bull2Y=-50;
 
let moveRight=false;
let moveLeft = false;
let moveUp = false;
let moveDown = false;


let moveRight2=false;
let moveLeft2 = false;
let moveUp2 = false;
let moveDown2 = false;

let bulletSpeed = 1;
let bulletSpeed2 = 1;





var cursorX;
var cursorY;
document.onmousemove = function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
}
	//moving keys 
  document.addEventListener('keydown', moveSelection);
		//wasd
          function moveSelection(event) {
              var key = event.keyCode;
              switch (key) {
                  case 68:
				  moveRight=true;
				   moveLeft=false;
				   moveUp = false;
				   moveDown = false;
				      if(fire){
			bulletSpeed+=0.1;
					  }
					count=36;
                  break;

                  case 65:
                 moveLeft=true;
				 moveRight=false;
				  moveUp = false;
				   moveDown = false;
				bulletSpeed+=0.1;
					count=24;
                  break;
				  
					case 83 :
				  moveDown = true;
				    moveUp = false;
				   moveLeft=false;
				 moveRight=false;
				    if(fire){
		bulletSpeed+=0.1;
					}
				  count=12;
				  
                     break;
                  case 87:
				   moveUp = true;
				   moveLeft=false;
				 moveRight=false;
				   moveDown = false;
				   if(fire){
		bulletSpeed+=0.1;
				   }
                    count=0;
                     break;
					 
				  case	70:

					fireCrack +=1;
					
					if(fireCrack<=1){
						fire=true;
							if(fire){
				// bullX=imgX+12;
				// bullY=imgY+10;
				bullX=imgX;
				bullY=imgY;
				
				// bullX=cursorX-190; 
				// bullY=cursorY-20;
					}
					} if(fireCrack >=2){
						fire = false;
						fireCrack=2;
						
					}
					
                break;
		
				
					 default:
					
					break;
              }
          }; 
		   document.addEventListener('keydown', moveSelection2);
function moveSelection2(event2) {
              var key2 = event2.keyCode;
              switch (key2) {
                  case 99 :
				  moveRight2=true;
				   moveLeft2=false;
				   moveUp2 = false;
				   moveDown2 = false;
				      if(fire2){
					bulletSpeed2+=0.1;
					  }
					count2=36;
                  break;

                  case 97:
                 moveLeft2=true;
				 moveRight2=false;
				  moveUp2 = false;
				   moveDown2 = false;
				   if(fire2){
				bulletSpeed2+=0.1;
				   }
					count2=24;
                  break;
				  
					case 98 :
				  moveDown2 = true;
				    moveUp2 = false;
				   moveLeft2=false;
				 moveRight2=false;
				 if(fire2){
		bulletSpeed2+=0.1;
				 }
				  count2=12;
				  
                     break;
                  case 101:
				   moveUp2 = true;
				   moveLeft2=false;
				 moveRight2=false;
				   moveDown2 = false;
				   if(fire2){
		bulletSpeed2+=0.1;
				   }
                    count2=0;
                     break;
					 
				  case	96:

					fireCrack2 +=1;
					
					if(fireCrack2<=1){
						fire2=true;
							if(fire2){
								
				// bull2X=img2X+12;
				// bull2Y=img2Y+10;
					bull2X=img2X;
				bull2Y=img2Y;
				// bullX=cursorX-190; 
				// bullY=cursorY-20;
					}
					} if(fireCrack2 >=2){
						fire2 = false;
						fireCrack2=2;
						
					}
					
                break;
		
				
					 default:
					
					break;
              }
          }; 
function draw(){
	 playerHit();
	document.onkeydown = function(evt) {
    evt = evt || window.event;
if (evt.keyCode == 71){
			if(imgX-bullX>=-32 && imgX-bullX<=32 && imgY-bullY>=-32 && imgY-bullY<=32){
        console.log('gotcha');
		fireCrack=0;
		bullX=-50;
		bullY=-50;
		bulletSpeed=1;
			}
    }
	if (evt.keyCode == 110){
			if(img2X-bull2X>=-32 && img2X-bull2X<=32 && img2Y-bull2Y>=-32 && img2Y-bull2Y<=32){
        console.log('gotcha2');
		fireCrack2=0;
		bull2X=-50;
		bull2Y=-50;
		bulletSpeed2=1;
			}
    }
};
		// document.onkeydown = function(evt) {
    // evt = evt || window.event;
// if (evt.keyCode == 110){
			// if(img2X-bull2X>=-32 && img2X-bull2X<=32 && img2Y-bull2Y>=-32 && img2Y-bull2Y<=32){
        // console.log('gotcha2');
		// fireCrack2=0;
		// bull2X=-50;
		// bull2Y=-50;
			// }
    // }
// };			
	
	
	
requestAnimationFrame(draw);
let ctx = document.getElementById('mycanvas').getContext('2d');
let ctx2 = document.getElementById('mycanvas').getContext('2d');	
borders(0,578,0,778);
borders2(0,578,0,778);
ctx.clearRect(0,0,800,600);
ctx2.clearRect(0,0,800,600);
// % /- kolkoto sa na red, * razmera na 1 faza v px
// v sluchaq 12 sa na vseki red & razmera im e 32 na faza.
x = (count%12)*32;
y = Math.floor(count/12)*32;
x2 = (count2%12)*32;
y2 = Math.floor(count2/12)*32;



ctx.drawImage(bullet,x,y,32,32,bullX,bullY,32,32);
fireBullet();
fireBullet2();

ctx.drawImage(img,x,y,32,32,imgX,imgY,32,32);

ctx2.drawImage(bullet2,x2,y2,32,32,bull2X,bull2Y,32,32	);
ctx2.drawImage(img2,x2,y2,32,32,img2X,img2Y,32,32);


if(Date.now() - time >= delay){ //trottle
playerOneMove();
playerTwoMove();
	 function playerOneMove(){
		 
	if(moveRight){
		count++;
		 imgX+= speed;
		 	
			if(count==47){
				count=36;		
					 
			}
		  
	}else if(moveLeft){ 
	     count++;
		 imgX-= speed;
	
			if(count==35){
                count=24;
					
			}
				
		  }else if(moveDown){ 
	     count++;
		 imgY+= speed;
 
			if(count==23){
                count=12;
				
			}
				
		  }else if(moveUp){ 
	     count++;
		 imgY-= speed;
			
			if(count==11){
                count=0;
			
			}
				
		  }	
				  
				
				
	 }
	 function playerTwoMove(){
	   if(moveRight2){
		count2++;
		 img2X+= speed;
		 	
			if(count2==47){
				count2=36;		
					 
			}
		  
	}else if(moveLeft2){ 
	     count2++;
		 img2X-= speed;
	
			if(count2==35){
                count2=24;
					
			}
				
		  }else if(moveDown2){ 
	     count2++;
		 img2Y+= speed;
 
			if(count2==23){
                count2=12;
				
			}
				
		  }else if(moveUp2){ 
	     count2++;
		 img2Y-= speed;
			
			if(count2==11){
                count2=0;
			
			}
				
		  }	else{
							 
                    //tuka moi da slojim idle.
                     //count++;
                  }
	 }
	 
	 
if ((Date.now() - time - delay) > delay){  //trottle
  time = Date.now();
  } else {
   time += delay;
                }
            }
}
				// primerno (0,  600-razmera na personaja,   0,  800- razmera na personaja);
function borders(north,south,east,west){
	if (imgY<=north){
		imgY=north;
	}if (imgY>=south){
		imgY=south;
	}if (imgX<=east){
		imgX=east;
	}if (imgX>=west){
		imgX=west;
	}else if(bullX>west||bullY<north||bullX<east||bullY>south){
	fire=false;
}
}

function borders2(north,south,east,west){
	if (img2Y<=north){
		img2Y=north;
	}if (img2Y>=south){
		img2Y=south;
	}if (img2X<=east){
		img2X=east;
	}if (img2X>=west){
		img2X=west;
	}else if(bull2X>west||bull2Y<north||bull2X<east||bull2Y>south){
	fire2=false;
}
}

function fireBullet(){

	borders(0,600,0,800);
	
	if(fire&&moveUp){
		bullY-=bulletSpeed;
		
	}if(fire&&moveDown){
		bullY+=bulletSpeed;
		
	}if(fire&&moveLeft){
		bullX-=bulletSpeed;
	
		
	}if(fire&&moveRight){
		bullX+=bulletSpeed;
		
		
		 // if(bullX<imgX&&bullY>imgY){
		// bullX=cursorX-190; 
		 // bullY=cursorY-20;
		 // }
	
	}
}


function fireBullet2(){

	borders2(0,600,0,800);
	
	if(fire2&&moveUp2){
		bull2Y-=bulletSpeed2;
		
	}if(fire2&&moveDown2){
		bull2Y+=bulletSpeed2;
	
	}if(fire2&&moveLeft2){
		bull2X-=bulletSpeed2;
	
		
	}if(fire2&&moveRight2){
		bull2X+=bulletSpeed2;
		
		
		 // if(bullX<imgX&&bullY>imgY){
		// bullX=cursorX-190; 
		 // bullY=cursorY-20;
		 // }
	
	}
}
function playerHit(){
if(img2X-bullX>=-5 && img2X-bullX<=5 && img2Y-bullY>=-5 && img2Y-bullY<=5){
						alert('LIGHT WINS');
					img2X-=2;
					img2Y+=2;
				}if(imgX-bull2X>=-5 && imgX-bull2X<=5&& imgY-bull2Y>=-5 && imgY-bull2Y<=5){
					imgX+=2;
					imgY-=2;
					alert('DARK WINS');
				}
}



