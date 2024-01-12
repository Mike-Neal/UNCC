


var requestUrl = 'https://www.loc.gov/search/?q=baseball&fo=json';
fetch(requestUrl) //calling the server
    .then(function (response) {
        console.log(response)
        return response.json(); //convert to an object
    }).then(function (data) {
        console.log(data)
    })
