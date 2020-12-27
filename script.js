
// vv To test getExchange function vv
// document.getElementById("lol").addEventListener("click", function(){
//     getExchange(document.getElementById("input1").value, document.getElementById("input2").value)
// })

//Gets exchange rate of a specific currency based on base currency
// async function getExchange(from,to){                                                           //Where "from" is base country's currency user would like to convert to another country's 
//     let exchange = "";                                                                         // and "to" is the country's country the user would like to convert the base currency to
//     await fetch ("https://api.ratesapi.io/api/latest?base=" + from + "&symbols=" + to)
//     .then (Response => Response.json())
//     .then (data => exchange = data["rates"][to])
// }       



// vv To test getAllExchange function vv
// document.getElementById("lol").addEventListener("click", function(){
//     getAllExchange(document.getElementById("input1").value)
// })

// vv Gets all exchange rates relative to given base currency vv
// function getAllExchange(base){                                                           //Where base is the base currency that user wants to compare exchange rates to
//     fetch ("https://api.ratesapi.io/api/latest?base="+base)
//     .then (Response => Response.json())
//     .then (data => console.log(data))
// }



// vv Gets exchange rate of a specific currency based on base currency from a specific date vv
// function getPastExchange(yyyy, dd, mm, from, to){                                                           //Where "yyyy, dd, mm" represents the date the user would like to retrieve the exchange rates from
//     exchange = "";
//     await fetch ("https://api.ratesapi.io/api/" + yyyy + "-" + dd + "-" + mm + "?base=" + from + "&symbols=" + to)  //https://api.ratesapi.io/api/2010-01-12?base=USD&symbols=GBP <- Original link for ref.
//     .then (Response => Response.json())
//     .then (data => exchange = data["rates"][to])
// }       


// vv Gets all exchange rates relative to given base currency from a specific date vv
// function getAllExchange(base){                                                            //Where base is the base currency that user wants to compare exchange rates to
//     fetch ("https://api.ratesapi.io/api/" + yyyy + "-" + dd + "-" + mm + "base=" + base)  //https://api.ratesapi.io/api/2010-01-12?base=USD <- Original link for reference
//     .then (Response => Response.json())
//     .then (data => console.log(data))
// }