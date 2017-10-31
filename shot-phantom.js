const page = require('webpage').create()

page.open('http://edysegura.com', function () {
    let title = page.evaluate(function () {
        return document.title;
    });
    page.clipRect = { top: 0, left: 0, width: 600, height: 700 };
    page.render(title + ".png");
    phantom.exit();
})
