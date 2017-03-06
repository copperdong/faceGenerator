import headGenerator from './headGenerator';

function generateColor(){
    let reds =Math.floor(Math.random()*255);
    let greens = Math.floor(Math.random()*255);
    let blues = Math.floor(Math.random()*255);
    return reds + ',' + greens + ',' + blues;
}


let canvases = document.getElementsByTagName('canvas');
console.log(canvases);
for(let i=0;i<canvases.length;i++){
    let canvas = canvases[i];

    const ctx = canvas.getContext('2d');
        ctx.fillStyle= 'rgb(' + generateColor() + ')';
        ctx.fillRect(0,0,200,200);
        ctx.save();
        headGenerator(ctx);
    canvas.addEventListener('click', (canvas=>{
    return ()=>{
        const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        window.location.href=image;
    }
    })(canvas))
};
