/**
 * Bear in mind that PhamtonJS doesn't allow ES6+ features
 */

var page = require('webpage').create()

page.open('http://edysegura.com', function () {
    var title = page.evaluate(function () {
        return document.title
    })
    page.clipRect = { top: 0, left: 0, width: 600, height: 700 }
    page.render('./screenshots/' + title + ".png")
    phantom.exit()
})
