
const { domHas, elementHasText, elementHasClasses } = require("./testDomUtil");


describe('3-Top-App-Bar', () => {
    it('Top App Bar Exists', domHas('header.mdc-top-app-bar'));
    it('Top App Bar Is Fixed', elementHasClasses('header.mdc-top-app-bar', 'mdc-top-app-bar--fixed'));
    it('Top App Bar Row Exists', domHas('.mdc-top-app-bar>div.mdc-top-app-bar__row'));
    it('Top App Bar Row Start Section Exists', domHas('.mdc-top-app-bar__row>.mdc-top-app-bar__section.mdc-top-app-bar__section--align-start'));
    it('Top App Bar Home Button Exists', domHas('.mdc-top-app-bar__section--align-start>a[href="#"]'));
    it('Top App Bar Home Button Has Correct Classes', elementHasClasses('.mdc-top-app-bar__section--align-start>a[href="#"]', 'material-icons mdc-top-app-bar__action-item mdc-icon-button'));
    it('Home Icon Has Correct Text', elementHasText('.mdc-top-app-bar__section--align-start>a[href="#"].material-icons.mdc-top-app-bar__action-item.mdc-icon-button', 'home'));
    it('Top App Bar Title Exists', domHas('.mdc-top-app-bar .mdc-top-app-bar__title'));
    it('Top App Bar Title Has Theme', elementHasClasses('.mdc-top-app-bar .mdc-top-app-bar__title', 'mdc-theme--on-primary'));
    it('Title has text "Buffs.blogStuff"', elementHasText('.mdc-top-app-bar .mdc-top-app-bar__title.mdc-theme--on-primary', 'Buffs\.doStuff'))
});