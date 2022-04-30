const filltheSelect = function (selectSelector, array) {
    let select = document.querySelector(selectSelector);

    for (let obj of array) {
        let option = document.createElement('option');
        option.textContent = obj.cc + " " + obj.txt;
        select.appendChild(option);
    }
}

const change = (inputSelector, labelSelector, selectFromSelector, selectToSelector, data) => {
    const input = document.querySelector(inputSelector),
        label = document.querySelector(labelSelector),
        selectTo = document.querySelector(selectToSelector),
        selectFrom = document.querySelector(selectFromSelector);
    for (let obj of data) {
        if (obj.cc == selectTo.value.split(' ')[0]) {
            label.innerHTML = Number(input.value) * obj.rate;
            break;
        }
    }
    for (let obj of data) {
        if (obj.cc == selectFrom.value.split(' ')[0]) {
            label.innerHTML = Number(label.innerHTML) / obj.rate;
            break;
        }
    }
}

const changeListener = (arr, callback, data) => {
    arr.forEach(elementSelector => {
        element = document.querySelector(elementSelector);
        element.addEventListener('change', () => {
            callback('#fromInput', '#changer', "#first", '#second', data);
        })
        element.addEventListener('input', () => {
            callback('#fromInput', '#changer', "#first", '#second', data);
        })
    });
}


const getDataAboutParams = (firtsCurrecy, secondCurrency, arr) => {
    let res = {};

    for (let obj of arr) {
        if (obj.cc == firtsCurrecy) {
            res[obj.cc] = obj.rate;
            break;
        }
    }
    for (let obj of arr) {
        if (obj.cc == secondCurrency) {
            res[obj.cc] = obj.rate;
            break;
        }
    }

    return res;
}

