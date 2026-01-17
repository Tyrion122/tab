const buttons = [
    document.getElementById('First'),
    document.getElementById('Second'),
    document.getElementById('Third'),
    document.getElementById('Fourth'),
];

const texts = [
    document.getElementById('FirstContent'),
    document.getElementById('SecondContent'),
    document.getElementById('ThirdContent'),
    document.getElementById('FourthContent')
];

function textDisapear(index){
    texts.forEach(text =>{
        text.hidden = true;
    });
    texts[index].hidden = false;
}

document.getElementById('First').addEventListener('click', () => textDisapear(0));
document.getElementById('Second').addEventListener('click', () => textDisapear(1));
document.getElementById('Third').addEventListener('click', () => textDisapear(2));
document.getElementById('Fourth').addEventListener('click', () => textDisapear(3));
