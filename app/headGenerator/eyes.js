export default function eyes(ctx){
    let diff = Math.floor(Math.random()*20)+10;
    let lEyeX = 100 - diff;

    let rEyex = 100 + diff;
    let eyeY = Math.floor(Math.random()*30)+50;
    let centerX = 100;
    let eyeSize = (Math.random()*5)+4;
    let browWidth =5 *Math.floor(Math.random()*10);
    let browYStart = eyeY + Math.floor(Math.random()*10)+1;
    let browYEnd = browYStart + Math.floor(Math.random()*6);
    let browUpOrDown = Math.floor(Math.random()*10);
    let eyeWhite = Math.floor(Math.random()*10)+5;

    let pupilDiffY = (Math.random()*eyeSize+eyeWhite) - (Math.random()*eyeSize+eyeWhite);
    let pupilDiffX = (Math.random()*eyeSize+eyeWhite) - (Math.random()*eyeSize+eyeWhite);
    let Eyes = new Path2D();
    console.log('I am the eye function');
    //ctx (my) lefteye
    ctx.beginPath();
    ctx.moveTo(lEyeX,eyeY);
    ctx.arc(lEyeX,eyeY,eyeSize+eyeWhite,0,10);
    ctx.fillStyle='white';
    ctx.fill();

    //ctx (my) rightteye whites
    ctx.moveTo(rEyex,eyeY+pupilDiffY);
    ctx.arc(rEyex,eyeY,eyeSize+ eyeWhite,0,10);
    ctx.fillStyle='white';
    ctx.fill();
    ctx.closePath();
    //ctx (my) lefteye pupiml
    ctx.beginPath();
    ctx.moveTo(lEyeX+ pupilDiffX,eyeY+pupilDiffY);
    ctx.arc(lEyeX+ pupilDiffX,eyeY+pupilDiffY,eyeSize,0,10);
    ctx.fillStyle='black';
    ctx.fill();


    //ctx (my) rightteye pupiml
    ctx.moveTo(rEyex+ pupilDiffX,eyeY+pupilDiffY);
    ctx.arc(rEyex+ pupilDiffX,eyeY+pupilDiffY,eyeSize,0,10);
    ctx.fillStyle='black';
    ctx.fill();
    ctx.closePath();

    //l brow
    //ctx.clearRect(0, eyeY, 200, 50)
/*    ctx.beginPath();
    ctx.moveTo(,browYStart);
    ctx.closePath();*/
}