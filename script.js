//Greet Function
function greet(neighborsName, language) {
    const greetings = {
        'en': 'Hello',
        'se': 'Dumela',
        'fr': 'Bonjour',
        'ts': 'Awe',
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
function totalPhoneBill(data) {
    const items = data.split(','); // Split the input string into an array
    let callCount = 0;
    let smsCount = 0;
    for (let i = 0; i < items.length; i++) {
        const item = items[i].trim(); // Trim the input to remove any whitespace
        if (item === 'call') {
            callCount++;
        } else if (item === 'sms') {
            smsCount++;
        }
    }
    const totalCost = (callCount * 2.75) + (smsCount * 0.65);
    return totalCost.toFixed(2);
}

function displayTotalPhoneBill() {
    const data = document.getElementById('phoneString').value;
    const bill = totalPhoneBill(data);
    document.getElementById('totalBill').innerText = 'Total Phone Bill: R' + bill;
}

function enoughAirtime(usage, availableAirtime) {
    const items = usage.split(','); // Split the input string into an array
    let callCount = 0;
    let smsCount = 0;
    for (let i = 0; i < items.length; i++) {
        const item = items[i].trim(); // Trim the input to remove any whitespace
        if (item === 'call') {
            callCount++;
        } else if (item === 'sms') {
            smsCount++;
        }
    }
    const totalCost = (callCount * 2.75) + (smsCount * 0.65);
    const remainingAirtime = availableAirtime - totalCost;
    return remainingAirtime.toFixed(2);
}

function displayEnoughAirtime() {
    const availableAirtime = parseFloat(document.getElementById('availableAirtime').value);
    const usage = document.getElementById('usageString').value;
    const result = enoughAirtime(usage, availableAirtime);
    document.getElementById('result').innerText = 'Remaining Airtime: R' + result;
}

// Function to process the sentence and update results
function processSentence() {
    const sentence = document.getElementById('sentenceInput').value;
    const words = sentence.split(' ');
    let longestWord = '';
    let shortestWord = words[0];

    words.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
        if (word.length < shortestWord.length) {
            shortestWord = word;
        }
    });
    const wordLengths = words.map(word => `${word} (${word.length})`).join(', ');
    document.getElementById('longestWord').innerText = longestWord;
    document.getElementById('shortestWord').innerText = shortestWord;
    document.getElementById('wordLengths').innerText = wordLengths;
}
