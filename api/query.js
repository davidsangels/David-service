const PexelsAPI = require('pexels-api-wrapper');

//Create Client instance by passing in API key
var pexelsClient = new PexelsAPI("<API_KEY>");

//Search API
pexelsClient.search("food", 10, 1)
    .then(function(result){
        console.log(result);
    }).
    catch(function(e){
        console.err(e);
    });