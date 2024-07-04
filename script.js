//Greet Function
function greet(neighborsName, language) {
    const greetings = {
        'en': 'Hello',
        'es': 'Hola',
        'fr': 'Bonjour',
        'de': 'Hallo',
        'it': 'Ciao',
        // Add more languages as needed
    };
    return `${greetings[language] || greetings['en']}, ${neighborsName}!`;
}

function displayGreeting() {
    const name = document.getElementById('neighborName').value;
    const lang = document.getElementById('language').value;
    document.getElementById('greeting').innerText = greet(name, lang);
}

// Transport Fee Function
function showTransportFee(shift) {
    const fees = {
        'morning': 10,
        'afternoon': 15,
        'night': 20
    };
    document.getElementById('feeDisplay').innerText = 'Transport Fee: R' + fees[shift];
}

// Total Phone Bill Function
function totalPhoneBill(data) {
    const items = data.split(', ');
    let callCount = 0;
    let smsCount = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i] === 'call') {
            callCount++;
        } else if (items[i] === 'sms') {
            smsCount++;
        }
    }
    const totalCost = (callCount * 2.75) + (smsCount * 0.65);
    return 'R' + totalCost.toFixed(2);
}

function displayTotalPhoneBill() {
    const data = document.getElementById('phoneString').value;
    const bill = totalPhoneBill(data);
    document.getElementById('totalBill').innerText = 'Total Phone Bill: ' + bill;
}

// Example usage for testing
document.addEventListener("DOMContentLoaded", function() {
    var exampleData = 'call, sms, call, sms, sms';
    var exampleBill = totalPhoneBill(exampleData);
    console.log(exampleBill); // Output: R8.15
});
// Enough Airtime Function
function enoughAirtime(usage, availableAirtime) {
    const items = usage.split(', ');
    let callCount = 0;
    let smsCount = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i] === 'call') {
            callCount++;
        } else if (items[i] === 'sms') {
            smsCount++;
        }
    }
    const totalCost = (callCount * 2.75) + (smsCount * 0.65);
    const remainingAirtime = availableAirtime - totalCost;
    return 'Remaining Airtime: R' + remainingAirtime.toFixed(2);
}

function displayEnoughAirtime() {
    const usage = document.getElementById('usageString').value;
    const availableAirtime = parseFloat(document.getElementById('availableAirtime').value);
    const result = enoughAirtime(usage, availableAirtime);
    document.getElementById('result').innerText = result;
}
