// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month
const pageviews = ['10K', '50K', '100K', '500K', '1M'];
const priceMonth = [8, 12, 16, 24, 36];
const rangeSlider = document.querySelector('#range-slider')
const views = document.querySelector('.pageviews')
const monthly = document.querySelector('.monthly')
const billing = document.querySelector('.year-billing')
console.log(rangeSlider.value)

function changebg() {
    rangeSlider.style.background = `linear-gradient(to right,
     hsl(174, 77%, 50%) 0%, 
     hsl(174, 77%, 50%) ${newValue*25}%, 
     hsl(224, 65%, 95%) 0%, 
     hsl(224, 65%, 95%) 100%)`;
}
rangeSlider.oninput = function() {
    newValue = rangeSlider.value;
    console.log(newValue)
    monthly.innerHTML = `$${priceMonth[newValue]}.00 <span class="month-cta">/month</span>`
    views.innerHTML = `${pageviews[newValue]} PAGEVIEWS`;
    changebg()
}
billing.onchange = function() {
    updateChange()
}


function updateChange() {
    newValue = rangeSlider.value;
    if (billing.checked === true) {
        monthly.innerHTML = `$${priceMonth[newValue]*12*.75}.00 <span class="month-cta">/year</span>`
    } else {
        monthly.innerHTML = `$${priceMonth[newValue]}.00 <span class="month-cta">/month</span>`
    }
    rangeSlider.oninput = function() {
        newValue = rangeSlider.value;
        if (billing.checked === true) {
            monthly.innerHTML = `$${priceMonth[newValue]*12*.75}.00 <span class="month-cta">/year</span>`
        } else {
            monthly.innerHTML = `$${priceMonth[newValue]}.00 <span class="month-cta">/year</span>`
        }
        views.innerHTML = `${pageviews[newValue]} PAGEVIEWS`;
        changebg()
    }


}