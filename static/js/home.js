
function toStepOne(){
    const stepOne = document.getElementById('stepOne');
    const stepTwo = document.getElementById('stepTwo');

    stepOne.classList.remove('hidden')
    stepOne.classList.add('active')

    stepTwo.classList.add('hidden')
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
    }
}


function toStepThree(){
    const stepTwo = document.getElementById('stepTwo');
    const stepThree = document.getElementById('stepThree');

    const telia = document.getElementById('telia');
    const telenor = document.getElementById('telenor');
    const altibox = document.getElementById('altibox');

    if(telia.checked==true || telenor.checked==true || altibox.checked==true){   

        stepTwo.classList.remove('active')        
        stepTwo.classList.add('hidden')
        
        stepThree.classList.add('active')
        document.getElementById('stepTwoError').classList.remove('active');
    }else{
        document.getElementById('stepTwoError').classList.add('active');
    }
}




function chooseTelia(){
    const teliaCheckbox = document.getElementById('teliaCheckbox');
    const teliaHiddenCheckbox = document.getElementById('telia');

    if (teliaHiddenCheckbox.checked==false){
        teliaCheckbox.classList.add('clicked');

        teliaHiddenCheckbox.checked = true;
    }else{
        teliaCheckbox.classList.remove('clicked');
        
        teliaHiddenCheckbox.checked = false;
    }
}

function chooseTelenor(){
    const telenorCheckbox = document.getElementById('telenorCheckbox');
    const telenorHiddenCheckbox = document.getElementById('telenor');

    if (telenorHiddenCheckbox.checked==false){
        telenorCheckbox.classList.add('clicked');

        telenorHiddenCheckbox.checked = true;
    }else{
        telenorCheckbox.classList.remove('clicked');
        
        telenorHiddenCheckbox.checked = false;
    }
}

function chooseAltibox(){
    const altiboxCheckbox = document.getElementById('altiboxCheckbox');
    const altiboxHiddenCheckbox = document.getElementById('altibox');

    if (altiboxHiddenCheckbox.checked==false){
        altiboxCheckbox.classList.add('clicked');

        altiboxHiddenCheckbox.checked = true;
    }else{
        altiboxCheckbox.classList.remove('clicked');
        
        altiboxHiddenCheckbox.checked = false;
    }
}