'use strict';

require('babel-core/register');

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
	baseUrl: 'http://localhost:3000/',
	framework: 'jasmine2',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	suites: {
		shop: 'shop/spec.js'
	},
	onPrepare: function() {
		browser.ignoreSynchronization = true;
		browser.driver.manage().window().maximize();
		jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
			savePath: 'tests/e2e/reports/'
		}));
	},
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000,
		isVerbose: false,
		includeStackTrace: false
	},
	// Comment the lines below and you will get the tests running through chrome
	capabilities: {
		'browserName': 'phantomjs',
		'phantomjs.binary.path': require('phantomjs').path,
		'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
	}
}