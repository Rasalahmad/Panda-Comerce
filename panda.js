const titles = document.getElementsByTagName('h2');
for (const title of titles) {
    title.style.color = 'lightblue';
    title.style.textAlign = 'center';
    title.style.padding = '50px';
    title.style.fontWeight = 'bold';
}
// backpack background color add
const backpack = document.getElementById('backpack');
backpack.style.backgroundColor = 'gray';

// card border radius
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}

// add console log in a button
function printBtn() {
    console.log('Add card to buy this product');
}

// footer background color change with double click
const subscribe = document.getElementById('subscribe');
subscribe.addEventListener('dblclick', function() {
        subscribe.style.backgroundColor = 'pink';
    })
    // email type and enable submit
document.getElementById('floatingInput').addEventListener('keyup', function(event) {
    const submitbtn = document.getElementById('submit-btn')
    if (event.target.value == 'submit') {
        submitbtn.removeAttribute('disabled');
    } else {
        submitbtn.setAttribute('disabled', true);
    }
})

// remove button if click
const shoes = document.getElementsByClassName('shoe-btn');
for (const shoe of shoes) {
    shoe.addEventListener('click', function(event) {
        event.target.parentNode.removeChild(event.target);
    })
}

// change image when mouse enter
/* const image = document.getElementById('image');
image.addEventListener('mouseover', function(event) {

}) */