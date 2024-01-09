function timeZoneInterval() {
    let londonElement = document.querySelector('#london-element');
    if (londonElement) {
        let londonTimeElement = document.querySelector('#london-time');
        let londonTimeZone = moment().tz('Europe/London');
        londonTimeElement.innerHTML = `${londonTimeZone.format(
            'hh:mm:ss'
        )}<small>${londonTimeZone.format('A')}</small>`;
        let londonDateElement = document.querySelector('#london-date');
        londonDateElement.innerHTML = `${londonTimeZone.format(
            'dddd, MMMM Do, YYYY'
        )}`;
    }
    let parisElement = document.querySelector('#paris-element');
    if (parisElement) {
        let parisTimeElement = document.querySelector('#paris-time');
        let parisTimeZone = moment().tz('Europe/Paris');
        parisTimeElement.innerHTML = `${parisTimeZone.format(
            'hh:mm:ss'
        )}<small>${parisTimeZone.format('A')}</small>`;
        let parisDateElement = document.querySelector('#paris-date');
        parisDateElement.innerHTML = `${parisTimeZone.format(
            'dddd, MMMM Do, YYYY'
        )}`;
    }
    let tokyoElement = document.querySelector('#tokyo-element');
    if (tokyoElement) {
        let tokyoTimeElement = document.querySelector('#tokyo-time');
        let tokyoTimeZone = moment().tz('Asia/Tokyo');
        tokyoTimeElement.innerHTML = `${tokyoTimeZone.format(
            'hh:mm:ss'
        )}<small>${tokyoTimeZone.format('A')}</small>`;
        let tokyoDateElement = document.querySelector('#tokyo-date');
        tokyoDateElement.innerHTML = `${tokyoTimeZone.format(
            'dddd, MMMM Do, YYYY'
        )}`;
    }
    let nycElement = document.querySelector('#nyc-element');
    if (nycElement) {
        let nycTimeElement = document.querySelector('#nyc-time');
        let nycTimeZone = moment().tz('America/New_York');
        nycTimeElement.innerHTML = `${nycTimeZone.format(
            'hh:mm:ss'
        )}<small>${nycTimeZone.format('A')}</small>`;
        let nycDateElement = document.querySelector('#nyc-date');
        nycDateElement.innerHTML = `${nycTimeZone.format(
            'dddd, MMMM Do, YYYY'
        )}`;
    }
}

setInterval(timeZoneInterval, 1000);

/////////////////////////////////////EVENT LISTENER FUNCTION
function showCity(event) {
    let cityTimeZone = event.target.value;
    let cityElement = document.querySelector('#cities');
    cityElement.innerHTML = `${cityTimeZone}`;
}

let selectCityElement = document.querySelector('#select-city');
selectCityElement.addEventListener('change', showCity);
