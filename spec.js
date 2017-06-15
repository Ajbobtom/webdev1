'use strict';
/*eslint-env node*/
import 'babel-polyfill';

import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';

var testsContext = require.context('./client', true, /\.(spec|test)\.js$/);
// testsContext.keys().forEach(testsContext);
// testsContext('./app/main/main.component.spec.js');
testsContext('./components/util.spec.js');

import { TestBed, getTestBed } from '@angular/core/testing';
import browser from '@angular/platform-browser-dynamic/testing';

TestBed.initTestEnvironment(browser.BrowserDynamicTestingModule, browser.platformBrowserDynamicTesting());

var hook = new Mocha.Hook('Modified Angular beforeEach Hook', function() {
  getTestBed().resetTestingModule();
});

hook.ctx = mocha.suite.ctx;
hook.parent = mocha.suite;
mocha.suite._beforeEach = [hook];
