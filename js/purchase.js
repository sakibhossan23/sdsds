let total = 0;
let discountAmountMain = 0;


function setTotal(target) {
    // get Name And Set
    const productTitle = target.childNodes[3].childNodes[3].innerText;
    const ulDiv = document.getElementById('item-list');
    const li = document.createElement('li');
    const classList = li.classList;
    classList.add('item-list')
    li.innerText = productTitle;
    ulDiv.appendChild(li)
    // set Total Value

    const cardMoney = target.childNodes[3].childNodes[5].childNodes[0].innerText;
    const cardMoneyNumber = parseFloat(cardMoney);
    total = cardMoneyNumber + total;
    const totalMoney = document.getElementById('total-price').innerText = total;
    const totalMoneyNumber = parseFloat(totalMoney);

    // discount using Coupon
    const couponInput = document.getElementById('coupon-field');
    const couponValue = couponInput.value;

    let setTotal = document.getElementById('total');
    setTotal.innerText = total;
    const button2 = document.getElementById('coupon-button');
    const totalMoneyV = document.getElementById('total-price').innerText
    // coupon Button Validation
    document.getElementById('coupon-button').addEventListener('click', function (event) {
        // Main Calculation
        if (couponInput.value == 'SELL200') {
            // discount text value
            let discountItem = document.getElementById('discount');
            let discountText = discountItem.innerText;
            let discountNumber = parseFloat(discountText);
            // total price value
            let totalPrice = document.getElementById('total-price');
            let totalText = totalPrice.innerText;
            let totalNumber = parseFloat(totalText).toFixed(2)
            // Discount Amount
            let discountAmount = (totalNumber * 20) / 100;
            // set discount amount to discount text
            discountItem.innerText = discountAmount.toFixed(2);
            // Minus discount ammount from total
            let finalTotalSum = total - discountAmount;
            //  Set final amount in Total;
            setTotal.innerText = finalTotalSum.toFixed(2);


        }

    })
    const button = document.getElementById('purchase-button');
    if (totalMoneyNumber > 0) {
        button.removeAttribute('disabled');
    }
    else if (totalMoneyNumber <= 0) {
        button.setAttribute('disabled', true);
    }

    var submitButton = document.getElementById("coupon-button");
    var resultText = document.getElementById("total-price");
    var resultValue = parseInt(resultText.innerText);
    var buttonValue = submitButton.value;
    if (resultValue >= 200) {
        submitButton.disabled = false;
    }
     else if (resultValue < 200) {
        submitButton.disabled = true;
    }

}



function locationId() {
    window.location.href = 'index.html';
}