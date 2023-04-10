let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status = false, weight_status = false;

    if(weight === '' || isNaN(weight) || (weight <= 0)) {
        document.getElementById('weight_error').innerHTML = 'Weight must be in kilograms and a number';
    } else {
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if (height === '' || isNaN(height) || (height <= 0)) {
        document.getElementById('height_error').innerHTML = 'Height must be in centimeters and a number';
    } else {
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if (height_status && weight_status) {
        const bmi = (weight / ((height/100)*2));

        if(bmi < 18.5) {
            result.innerHTML = 'Underweight : ' + bmi;        
        }else if (bmi = 18.5 && bmi < 25) {
            result.innerHTML = 'Normal weight : ' + bmi;
        }else if (bmi = 25 && bmi < 30) {
            result.innerHTML = 'Overweight : ' + bmi;
        }else if (bmi >= 30) {
            result.innerHTML = 'Obesity : ' + bmi; 
        } 
    }else {
        alert('The form has errors');
        result.innerHTML = '';
    }
});