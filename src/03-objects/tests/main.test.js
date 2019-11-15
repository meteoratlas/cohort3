// https://dev.to/snowleo208/things-i-learned-after-writing-tests-for-js-and-html-page-4lja

describe('Test main.js file', () => {

    const fs = require('fs');
    const path = require('path');
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

    jest.dontMock('fs');

    beforeEach(() => {
        //import entire html file before each test function
        document.documentElement.innerHTML = html.toString();
    });

    afterEach(() => {
        // restore the original func after test
        jest.resetModules();
    });
})