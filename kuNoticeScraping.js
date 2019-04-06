const request = require('request');
const cheerio = require('cheerio');


const info = {
    count: 0,
    headlines: [],
    links: []
};

const getData = (callback) => {
    request('http://www.ku.edu.np/news/index.php?op=Default&blogId=1&postCategoryId=3&&page=1', (err, response, html) => {
        if (err) callback(err,null);
        if (response.statusCode == 200) {
            const $ = cheerio.load(html);
            // const siteHeading = $('.w-header-title');
            // console.log(siteHeading.text().trim());

            // //const output = siteHeading.find('span').text();
            // const output = siteHeading.children('span').next().text();

            const content = $('#Content h3');
            info.count = 0;

            content.each((i, el) => {
                //console.log($(el).htmnodemon appl());
                info.headlines[i] = $(el).text();
                info.links[i] = $(el).children('a').attr('href');
                info.count++;
            });
            callback(null, info);

        }
    });
}

module.exports = {info,
getData}