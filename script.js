let selectedGender = '';

function selectGender(gender) {
    selectedGender = gender;
    document.getElementById('male').classList.remove('selected');
    document.getElementById('female').classList.remove('selected');
    document.getElementById(gender).classList.add('selected');
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const heightInMeters = height / 100;

    if (weight > 0 && heightInMeters > 0 && selectedGender) {
        const bmi = weight / (heightInMeters * heightInMeters);
        let interpretation = '';

        if (selectedGender === 'male') {
            if (bmi < 20) interpretation = '저체중';
            else if (bmi < 25) interpretation = '정상';
            else if (bmi < 30) interpretation = '과체중';
            else interpretation = '비만';
        } else if (selectedGender === 'female') {
            if (bmi < 18.5) interpretation = '저체중';
            else if (bmi < 23) interpretation = '정상';
            else if (bmi < 28) interpretation = '과체중';
            else interpretation = '비만';
        }

        document.getElementById('result').innerText = `당신의 BMI는 ${bmi.toFixed(2)}입니다.\n(${interpretation})`;
    } else {
        if (selectedGender) {
            document.getElementById('result').innerText = '올바른 값을 입력하세요.';
        } else {
            document.getElementById('result').innerText = '성별을 선택 해주세요.';
        }
    }
}

function resetFields() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('result').innerText = '값을 입력해주세요.';
    selectedGender = '';
    document.getElementById('male').classList.remove('selected');
    document.getElementById('female').classList.remove('selected');
}