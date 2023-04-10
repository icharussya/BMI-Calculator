function calculate() {
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    let bmi = weight / (height/100)**2

    document.getElementById('heading').innerHTML = 'Your BMI is '
    document.getElementById('output').innerHTML = bmi.toFixed(1)

    if (bmi <18.5) {
        document.getElementById('message').innerHTML = 'You are underweight'
    } else if (bmi >=18.5 && bmi <=24.9) {
        document.getElementById('message').innerHTML = 'You are in normal weight'
    } else if (bmi >=25 && bmi <= 29.9) {
        document.getElementById('message').innerHTML = 'You are overweight'
    } else if (bmi >= 30) {
        document.getElementById('message').innerHTML = 'You are obese'
    } else {
        alert('Please enter weight and height in numbers');
        // document.innerHTML = '';
    }
}

function reset(){
    window.location.reload()
}