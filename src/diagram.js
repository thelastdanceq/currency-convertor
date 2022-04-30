const data = [
    ["January", 10000],
    ["February", 12000],
    ["March", 18000],
    ["April", 11000],
    ["May", 9000]
];
(async () => {
    let lol = [];
    for (let i = 10; i <= 22; i++) {
        let response = await fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20${i}0302&json`);
        let data = await response.json();
        let result = getDataAboutParams('AUD', "CAD", data);
        result.date = data[0].exchangedate;
        lol.push(result);
    }
    console.log(lol);

})()


// create a chart
chart = anychart.line();

// create a line series and set the data
const series = chart.line(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();

