window.onload = function(){ 
    setTimeout(() => {
        document.getElementById('coverContent').classList.add('active');
    }, 250);
}




function toStepTwo(){
    const stepOne = document.getElementById('stepOne');
    const stepTwo = document.getElementById('stepTwo');

    const adresse = document.getElementById('adresse');
    const postnummer = document.getElementById('postnummer');
    const gatenummer = document.getElementById('gatenummer');

    if(adresse.value && postnummer.value && gatenummer.value){   
        stepOne.classList.add('hidden')
        
        stepTwo.classList.remove('hidden')
        stepTwo.classList.add('active')        
        document.getElementById('stepOneError').classList.remove('active');
    }else{
        document.getElementById('stepOneError').classList.add('active');
        console.log('fill all inputs')
    }
}

function toStepOne(){
    const stepOne = document.getElementById('stepOne');
    const stepTwo = document.getElementById('stepTwo');

    stepOne.classList.remove('hidden')
    stepOne.classList.add('active')

    stepTwo.classList.add('hidden')
}