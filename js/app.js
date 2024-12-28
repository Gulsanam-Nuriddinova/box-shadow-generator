


const elBox = document.getElementById('box');
const elColor = document.getElementById('input-color');
const elInputHorizontal = document.getElementById('horizontal-shadow');
const elVertical = document.getElementById('vertical-shadow');
const elOppacity = document.getElementById('oppacity');
const elBlur = document.getElementById('blur');
const elSpread = document.getElementById('spread');
const elBox2 = document.getElementById('box2')

function updateBoxShadow() {
    const color = elColor.value;
    const horizontal = elInputHorizontal.value + 'px';
    const vertical = elVertical.value + 'px';
    const blur = elBlur.value + 'px';
    const spread = elSpread.value + 'px';
    const opacity = elOppacity.value / 100;  

    
    elBox.style.boxShadow =` ${horizontal} ${vertical} ${blur} ${spread} rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, ${opacity})`;
}


elColor.addEventListener('input', updateBoxShadow)
elColor.addEventListener('input' , elBox2);
elInputHorizontal.addEventListener('input', updateBoxShadow);
elVertical.addEventListener('input', updateBoxShadow);
elBlur.addEventListener('input', updateBoxShadow);
elSpread.addEventListener('input', updateBoxShadow);
elOppacity.addEventListener('input', updateBoxShadow);

updateBoxShadow();