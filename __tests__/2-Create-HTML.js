const { domHas, elementHasText, elementHasClasses } = require("./testDomUtil");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
describe('2-Create-HTML', () => {
    it('Create an HTML5 document', () => {
        return JSDOM.fromFile('index.html').then(dom => {
            expect(dom.window.document.doctype.name).toBe('html');
        });
    });

    describe('2-Setup-HEAD', () => {

        it('Set the title correctly', elementHasText('head>title', 'Buffs.doStuff'));
        [
            ["Material Icons", "https://fonts.googleapis.com/icon?family=Material+Icons"],
            ["MDC", "https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css"],
            ["app.css", "app.css"]
        ].forEach(stylesheet => {
            it(`Link Stylesheet ${stylesheet[0]}`, domHas(`link[href="${stylesheet[1]}"]`));
        });
        [
            ["MDC", "https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"]
        ].forEach(script => {
            it(`Link Load Script ${script[0]}`, domHas(`script[src="${script[1]}"]`))
        })
    })
    
    it('Body Exists', domHas('body'));
    it('Body has Typography Class', elementHasClasses('body', 'mdc-typography'));
});