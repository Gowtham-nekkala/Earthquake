function updateResult() {
    const options = document.getElementsByName('value');
    let selectedValue = '';

    for (const option of options) {
        if (option.checked) {
            selectedValue = option.value;
            break;
        }
    }

    const resultElement = document.getElementById('result');
    if (selectedValue) {
        let description = '';
        switch (selectedValue) {
            case '1':
                description = 'Unnoticable';
                break;
            case '2':
                description = 'Smaller';
                break;
            case '3':
                description = 'Minor';
                break;
            case '4':
                description = 'Light';
                break;
            case '5':
                description = 'Moderate';
                break;
            case '6':
                description = 'Strong';
                break;
            case '7':
                description = 'Very Strong';
                break;
            case '8':
                description = 'Severe';
                break;
            case '9':
                description = 'Violent';
                break;
            case '10':
                description = 'Extreme';
                break;
            case '11':
                description = 'Catastrophic';
                break;
            default:
                description = 'Unknown';
                break;
        }
        resultElement.innerText = description;
    } else {
        resultElement.innerText = 'Please select a value.';
    }
}