#!/bin/bash

parallel --bar -a links.txt ./node_modules/.bin/casperjs scraper.js
cat scraped_data/*.txt > elements.txt
