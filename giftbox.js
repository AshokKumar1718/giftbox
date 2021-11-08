const check = document.getElementById('submitted');
let giftbox = document.getElementById('giftbox')
let count = document.getElementById('count');


check.addEventListener('click', (event) => {
console.log(giftbox);

for( let v=0;v<parseInt(count.value, 10);v++){
    var image = new Image(40,40);
    image.src = "gifts.png"
    giftbox.append(image);
}
count.value = 0;

})

