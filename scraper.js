var fs = require('fs');
var casper = require('casper').create();

var pageTitle = undefined;

casper.start(casper.cli.get(0));

casper.then(function() {
    var rawTitle = this.getTitle();
    pageTitle = rawTitle.substring(0, rawTitle.indexOf('»'));
    firstParagraphText = this.fetchText('#main .p_first:first-of-type');

    data = pageTitle + "\n" + firstParagraphText + "\n";
    fs.write('scraped_data/' + pageTitle + '.txt', data, 'w');
});

casper.run(function() {
  this.echo("Data saved for " + pageTitle);
  this.exit();
});
