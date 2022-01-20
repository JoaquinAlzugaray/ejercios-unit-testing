// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

let  fromEuroToDollar = function(euroValue){
    let dollar = euroValue * 1.2
    return dollar ;
    }

let fromDollarToYen = function (dollarValue) {
    let yen = dollarValue * 106.58
    return yen
}

let fromYenToPound = function (yenValue) {
    let pound = yenValue * 0.0064
    return pound
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }