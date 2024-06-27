const currencies = [
    { code: "USD", name: "United States Dollar", flag: "USD.png" },
    { code: "EUR", name: "Euro", flag: "EUR.png" },
    { code: "GBP", name: "British Pound Sterling", flag: "GBP.png" },
    { code: "JPY", name: "Japanese Yen", flag: "JPY.png" },
    { code: "AUD", name: "Australian Dollar", flag: "AUD.png" },
    { code: "CAD", name: "Canadian Dollar", flag: "CAD.png" },
    { code: "CHF", name: "Swiss Franc", flag: "CHF.png" },
    { code: "CNY", name: "Chinese Yuan", flag: "CNY.png" },
    { code: "SEK", name: "Swedish Krona", flag: "SEK.png" },
    { code: "NZD", name: "New Zealand Dollar", flag: "NZD.png" },
    { code: "INR", name: "Indian Rupee", flag: "INR.png" },
    { code: "SGD", name: "Singapore Dollar", flag: "SGD.png" },
    { code: "HKD", name: "Hong Kong Dollar", flag: "HKD.png" },
    { code: "KRW", name: "South Korean Won", flag: "KRW.png" },
    { code: "BRL", name: "Brazilian Real", flag: "BRL.png" },
    { code: "RUB", name: "Russian Ruble", flag: "RUB.png" },
    { code: "TRY", name: "Turkish Lira", flag: "TRY.png" },
    { code: "ZAR", name: "South African Rand", flag: "ZAR.png" },
    { code: "AED", name: "United Arab Emirates Dirham", flag: "AED.png" },
    { code: "MXN", name: "Mexican Peso", flag: "MXN.png" },
    { code: "MYR", name: "Malaysian Ringgit", flag: "MYR.png" },
    { code: "ARS", name: "Argentine Peso", flag: "ARS.png" },
    { code: "CLP", name: "Chilean Peso", flag: "CLP.png" },
    { code: "COP", name: "Colombian Peso", flag: "COP.png" },
    { code: "CZK", name: "Czech Koruna", flag: "CZK.png" },
    { code: "DKK", name: "Danish Krone", flag: "DKK.png" },
    { code: "EGP", name: "Egyptian Pound", flag: "EGP.png" },
    { code: "HUF", name: "Hungarian Forint", flag: "HUF.png" },
    { code: "IDR", name: "Indonesian Rupiah", flag: "IDR.png" },
    { code: "JOD", name: "Jordanian Dinar", flag: "JOD.png" },
    { code: "NOK", name: "Norwegian Krone", flag: "NOK.png" },
    { code: "PHP", name: "Philippine Peso", flag: "PHP.png" },
    { code: "PLN", name: "Polish Zloty", flag: "PLN.png" },
    { code: "SAR", name: "Saudi Riyal", flag: "SAR.png" },
    { code: "THB", name: "Thai Baht", flag: "THB.png" },
    { code: "TWD", name: "New Taiwan Dollar", flag: "TWD.png" },
    { code: "VND", name: "Vietnamese Dong", flag: "VND.png" },
];

function populateCurrencyOptions() {
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');

    // Sort currencies array alphabetically by currency name
    currencies.sort((a, b) => a.name.localeCompare(b.name));

    currencies.forEach(currency => {
        const option = document.createElement('option');
        option.value = currency.code;
        option.textContent = `${currency.name} (${currency.code})`;
        fromCurrency.appendChild(option.cloneNode(true));
        toCurrency.appendChild(option.cloneNode(true));
    });

    updateFlag('from');
    updateFlag('to');
}

function updateFlag(type) {
    const select = document.getElementById(`${type}Currency`);
    const flag = document.getElementById(`${type}Flag`);
    const selectedCurrency = currencies.find(currency => currency.code === select.value);
    flag.src = `assets/flags/${selectedCurrency.flag}`;
    flag.alt = `${selectedCurrency.name} Flag`;
}

async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (!amount) {
        alert('Please enter an amount');
        return;
    }

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();
        const rate = data.rates[toCurrency];
        const result = amount * rate;

        document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
    } catch (error) {
        alert('Error fetching exchange rates. Please try again later.');
    }
}

function goBack() {
    window.history.back();
}

function changeBackgroundColor() {
    const colors = ['#3498db', '#9b59b6', '#e74c3c', '#f1c40f', '#2ecc71'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

document.addEventListener('DOMContentLoaded', () => {
    populateCurrencyOptions();
    changeBackgroundColor();
    setInterval(changeBackgroundColor, 10000); 
});
