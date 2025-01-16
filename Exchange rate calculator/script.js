
const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('exchange');



// exchange rate and update dom

function calculate() {
    const currency_1 = currencyEl_one.value;
    const currency_2 = currencyEl_two.value;


    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_1}`)
      .then(res => res.json())
       .then(data => {
        //  console.log(data);
        const rate = data.rates[currency_2];

        console.log(rate);

        rateEl.innerText = `1 ${currency_1} = ${rate} ${currency_2}`;

        amountEl_two.value = (amountEl_one.value * rate ).toFixed(2);
        
         });
    
    
}

// event listener

currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate()
});

calculate(); 