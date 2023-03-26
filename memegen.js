let topTextinput, bottomTextinput, imageInput, generateBtn, canvus, ctx;

function generateMeme(img, topText, bottomText){
canvus.width = img.width
canvus.height = img.height

ctx.clearRect(0,0, canvus.width, canvus.height);
ctx.drawImage(img,0,0)

let fontsz= canvus.width / 15;
ctx.font= fontsz + 'px Impact'
ctx.fillStlye ='black'
ctx.strokeStyle = 'white'
ctx.lineWidth = fontsz /15;
ctx.textAlign = 'center'

ctx.textBaseline = 'top';
ctx.fillText(topText, canvus.width/2, fontsz, canvus.width)
ctx.strokeText(topText, canvus.width/2, fontsz, canvus.width)

ctx.textBaseline = 'bottom';
ctx.fillText(bottomText, canvus.width/2, canvus.height, canvus.width)
ctx.strokeText(bottomText, canvus.width/2, canvus.height, canvus.width)

}


function init (){
topTextinput = document.getElementById('toptext')
bottomTextinput = document.getElementById('bottomtext')
imageInput = document.getElementById('imginput')
generateBtn = document.getElementById('genbutton')
canvus = document.getElementById('memecanvus')
;
ctx = canvus.getContext('2d');

canvus.width = canvus.height = 0;

generateBtn.addEventListener('click', function(){
    let reader = new FileReader()
    reader.onload =function(){
        let img = new Image;
        img.src = reader.result;
        generateMeme(img, topTextinput.value, bottomTextinput.value);
    }
    reader.readAsDataURL(imageInput.files[0]);
})
}

init();