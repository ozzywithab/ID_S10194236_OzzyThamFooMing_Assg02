
fetch ("https://api.ratesapi.io/api/latest?base=USD&symbols=GBP")
.then(Response => Response.json())
.then(data => lol = data)
