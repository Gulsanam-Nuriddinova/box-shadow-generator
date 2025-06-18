const elBox = document.getElementById('box');
const elColor = document.getElementById('input-color');
const elInputHorizontal = document.getElementById('horizontal-shadow');
const elVertical = document.getElementById('vertical-shadow');
const elOppacity = document.getElementById('oppacity');
const elBlur = document.getElementById('blur');
const elSpread = document.getElementById('spread');
const elBox2 = document.getElementById('box2');

function updateBoxShadow() {
    const color = elColor.value;
    const horizontal = elInputHorizontal.value + 'px';
    const vertical = elVertical.value + 'px';
    const blur = elBlur.value + 'px';
    const spread = elSpread.value + 'px';
    const opacity = elOppacity.value / 100;

    elBox.style.boxShadow = `${horizontal} ${vertical} ${blur} ${spread} rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, ${opacity})`;

    elBox2.innerHTML = `
   
        <p>box-shadow: ${horizontal} ${vertical} ${blur} ${spread} rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, ${opacity});</p>
        <button onclick="copyText()" style="background-color: #6f1728; margin-top:7px; margin-left:224px;  color: white; border: none; padding: 10px 20px; font-size: 16px; cursor: pointer; border-radius: 5px; transition: background-color 0.3s ease;">Copy</button>
    `;
}

function copyText() {
    const textToCopy = elBox2.querySelector("p").innerText;
    const tempInput = document.createElement("textarea");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    const message = document.createElement("div");
    message.textContent = "Code copied! ✅";
    message.style.position = "fixed";
    message.style.bottom = "25px";
    message.style.left = "900px";
    message.style.background = "#6f1728";
    message.style.color = "white";
    message.style.padding = "10px 20px";
    message.style.borderRadius = "5px";
    message.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    message.style.zIndex = "1000";

    document.body.appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 3000);
}

elColor.addEventListener('input', updateBoxShadow);
elInputHorizontal.addEventListener('input', updateBoxShadow);
elVertical.addEventListener('input', updateBoxShadow);
elBlur.addEventListener('input', updateBoxShadow);
elSpread.addEventListener('input', updateBoxShadow);
elOppacity.addEventListener('input', updateBoxShadow);

updateBoxShadow();
