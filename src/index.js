

fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .then((response) => {
        return response.json();
    })
    .then(data => {
        filltheSelect('#first', data);
        filltheSelect('#second', data);
        change('#fromInput', '#changer',"#first", '#second', data);
        changeListener(['#fromInput', "#second", '#first'], change, data)
    })

