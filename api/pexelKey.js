
const key = '563492ad6f91700001000001d3b2c338deef4c39ab0a39d110f9f12e'

// Authorization: key
// example query https://api.pexels.com/v1/search?query=example+query&per_page=15&page=1

const PexelsAPI = require('pexels-api-wrapper');

//Create Client instance by passing in API key
var pexelsClient = new PexelsAPI(key);

//Search API
const pexelsQuery = pexelsClient.search("house interior", 10, 1)
    .then(function(result){
        console.log(result);
    }).
    catch(function(e){
        console.err(e);
    });
    exports.pexels = pexelsQuery;
