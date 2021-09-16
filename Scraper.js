var request = require('request'),
cheerio = require('cheerio'),
tweets = [],
pics = [];
var imgClass = '.AdaptiveMedia-photoContainer';
var tweetClass = '.js-tweet-text-container';

request('https://twitter.com/stylebender/media', function(err, resp, body){
    if(!err && resp.statusCode == 200){
        const $ = cheerio.load(body);
        $(imgClass).each(function(){
            var pic = $(this).attr('src');
            pics.push(pic);
        })
    }

    console.log(pics);
})