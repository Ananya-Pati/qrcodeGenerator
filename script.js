const qrinput=document.getElementById('qr-input');
const qrimage=document.getElementById('qr-img');
const qrbutton=document.getElementById('qr-button');

console.log(qrinput, qrimage ,qrbutton);

qrbutton.addEventListener('click',()=>{

    const inputValue=qrinput.value;
    console.log(inputValue);

    if(!inputValue){
        alert('please enter a valid URL')
        return
    }
    else{
        qrimage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    }
})