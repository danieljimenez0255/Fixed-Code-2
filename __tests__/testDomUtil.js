const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function expectDom(cb) {
    return JSDOM.fromFile('index.html').then(dom => {
        cb(dom);
    });
}
function domHas(selector) {
    return () => {
        return expectDom(dom => {
            const el = dom.window.document.querySelector(selector);
            expect(el).toBeTruthy();
        });
    };
}
exports.domHas = domHas;
function elementHasText(selector, text) {
    return () => {
        return expectDom(dom => {
            const el = dom.window.document.querySelector(selector);
            expect(el.textContent).toMatch(new RegExp(text));
        });
    };
}
exports.elementHasText = elementHasText;

function countElement(selector, expected) {
    return () => {
        return expectDom(dom => {
            const elList = dom.window.document.querySelectorAll(selector);
            expect(elList.length).toBe(expected);
        })
    }
}
exports.countElement = countElement;

function elementHasClasses(selector, cssClassList) {
    return () => {
        return expectDom(dom => {
            const el = dom.window.document.querySelector(selector);
            let classes = cssClassList.split(' ');
            classes.forEach(c => {
                expect(el.classList).toContain(c);
            })
        })
    }
}
exports.elementHasClasses = elementHasClasses;

test('Smoke Test', () => {
    expect(true).toBeTruthy()
});