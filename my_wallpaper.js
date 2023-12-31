//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;

  let earHeight = 30;  // 30 is the norm
  let earWidth = 100; // 55 - 150 | 100 is the norm
  let eyeSize = 20; // 20 is the norm
  let eyeshineSize = 8; // 8 is the norm
  let mouthPosition = 115; // 115 is the norm && 115 - 125
  let pawWidth = 30; // 30 is the norm && 20 - 40
  let pawHeight = 15; // 15 is the norm

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 350;
  pWallpaper.grid_settings.cell_height = 300;
  pWallpaper.grid_settings.row_offset  = 130;
}

function wallpaper_background() {
  // background(240, 255, 240); //light honeydew green colour
  background(220, 239, 252);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  if(eyeSize > 20){
    eyeshineSize = eyeSize - 15;
  } // makes eye and eye shine proportionate to eachother (15 in size difference)
  

  if(pawWidth > 30) {
    pawHeight = pawWidth - 15;
  } // makes the paw width and height propotionate to eachother (15 in size difference)

 /* strokeWeight(1);
 point(150, 110);
 point(165, 80);
 point(190, 80);
 point(170, 110);
 point(130, 130);
 point(140, 130); */

 strokeWeight(0);
  fill(224, 224, 224);
  beginShape(); // tail
  curveVertex(150, 105);
  curveVertex(150, 105);
  curveVertex(165, 80);
  curveVertex(180, 70);
  curveVertex(190, 80);
  curveVertex(170, 110);
  curveVertex(130, 130);
  curveVertex(120, 140);
  curveVertex(120, 140);
  endShape(); 


  strokeWeight(0);
  fill(240, 240, 240);
  triangle(50, 100, 55, earHeight, 100, earWidth); // left ear
  triangle(100, earWidth, 145, earHeight, 150, 100); // right ear

  fill(252, 215, 220);
  triangle(55, 80, 85, 80, 57, 40); // left ear pink part
  triangle(105, 95, 147, 115, 143, 40); // right ear pink part 

  /* fill(224, 224, 224);
  strokeWeight(); // face shadow
  ellipse(99, 99, 103, 103); */ 
  
  fill(240, 240, 240);
  ellipse(100, 100, 100, 100); // the base of the head

  fill(112, 112, 112);
  ellipse(79, 88, eyeSize, eyeSize); //eye shadow/lash line
  ellipse(119, 88, eyeSize, eyeSize); 

 /* ellipse(80, 92, eyeSize, eyeSize); //bottom eye shadow/lash line
  ellipse(120, 92, eyeSize, eyeSize); */

  strokeWeight(0);
  fill(139, 213, 252);
  ellipse(80, 90, eyeSize, eyeSize); // left eye
  ellipse(120, 90, eyeSize, eyeSize); // right eye

  fill(86, 195, 252);
  ellipse(82, 89, eyeshineSize, eyeshineSize); // left eye shine shadow
  ellipse(122, 89, eyeshineSize, eyeshineSize); // right eye shine shadow

  fill(255,255,255);
  ellipse(83, 87, eyeshineSize, eyeshineSize); // left eye shine
  ellipse(123, 87, eyeshineSize, eyeshineSize); // right eye shine

  fill(252, 197, 204);
  triangle(92, 102, 108, 102, 100, 110); //nose

  /* fill(252, 215, 220);
  triangle(90, 100, 110, 100, 100, 110); //nose shadow */

  strokeWeight(0.3);
  fill(112, 112, 112);
  line(100, 110, 100, mouthPosition); //mouth
  line(100, mouthPosition, 95, 120);
  line(100, mouthPosition, 105, 120);
  line(95, 120, 90, 115);
  line(105, 120, 110, 115);

  
  strokeWeight(0.2);
  line(60, 100, 30, 85); //left side whiskers || 30 is the normal whisker length
  line(60, 105, 27, 105); // 27 is the normal whisker length
  line(60, 110, 30, 125); // 30 is the normal whisker length

  line(140, 100, 170, 85); // right side whiskers  || 170 is the normal whisker length
  line(140, 105, 172, 105);  // 172 is the normal whisker length
  line(140, 110, 170, 125);  // 170 is the normal whisker length

  fill(224, 224, 224);
  strokeWeight(0);
  ellipse(80, 147, pawWidth, pawHeight); // left paw shadow
  ellipse(120, 147, pawWidth, pawHeight); // right paw shadow

  fill(232, 232, 232);
  strokeWeight(0);
  ellipse(80, 145, pawWidth, pawHeight); // left paw
  ellipse(120, 145, pawWidth, pawHeight); // right paw


}
