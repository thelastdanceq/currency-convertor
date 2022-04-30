

fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .then((response) => {
        return response.json();
    })
    .then(data => {
        filltheSelect('#first', data);
        filltheSelect('#second', data);
        change('#fromInput', '#changer',"#first", '#second', data);
        changeListener(['#fromInput', "#second", '#first'], change, data)
        let selectFrom = document.querySelector('#first');
        let selectTo = document.querySelector('#second');
        selectFrom.addEventListener('change', () =>{
            const cont = document.querySelector('#container');
            while(cont.firstChild){
                cont.removeChild(cont.firstChild);
            }
            loadDiagram()
        })
        selectTo.addEventListener('change', () =>{
            const cont = document.querySelector('#container');
            while(cont.firstChild){
                cont.removeChild(cont.firstChild);
            }
            loadDiagram()
        })
    })

