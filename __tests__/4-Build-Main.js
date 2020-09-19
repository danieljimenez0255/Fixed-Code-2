const { domHas, elementHasText, countElement, elementHasClasses } = require("./testDomUtil");

describe('4-Main', () => {
    it('Main Exists', domHas('main'));
    it('Main Has Top App Bar Fixed Adjust Class', elementHasClasses('main', 'mdc-top-app-bar--fixed-adjust'));
    describe('Main Content', () => {
        it('Main Content Exists', domHas('main>article.main-content'));
        describe('Main Content Heading', () => {
            it('Main Content Heading Exists', domHas('main>article.main-content>h2'));
            it('Main Content Heading Has Project Title and Typography Classes', elementHasClasses('main>article.main-content>h2', 'project-title mdc-typography--headline2'));
            it('Main Content Heading Has Text', elementHasText('main>article.main-content>h2', 'Inbox'));
        })
        describe('Main Content Task List', () => {
            it('Main Content Task List Section Exists', domHas('main>article.main-content>section'))
            it('Main Content Task List Section Has Task List Class', elementHasClasses('main>article.main-content>section', 'task-list'));
            it('Main Content Task List Section UL Exists', domHas('main>article.main-content>section>ul'))
            it('Main Content Task List Section UL Has MDC List Class', elementHasClasses('main>article.main-content>section>ul', 'mdc-list'));
            it('Main Content Task List Section UL Has 5 List Items', countElement('main>article.main-content>section>ul>li', 5));
            describe('Main Content Task List Item', () => {
                it('Main Content Task List Section UL First List Item Has MDC List Item and Complete Classes', elementHasClasses('main>article.main-content>section>ul>li:first-of-type', 'mdc-list-item complete'));
                it('Main Content Task List Section UL First List Item Ripple Exists', domHas('main>article.main-content>section>ul>li:first-of-type>span.mdc-list-item__ripple'));
                it('Main Content Task List Section UL First List Item Graphic Exists', domHas('main>article.main-content>section>ul>li:first-of-type>span.mdc-list-item__graphic'));
                it('Main Content Task List Section UL First List Item Graphic Has MDC Icon Button Class', elementHasClasses('main>article.main-content>section>ul>li:first-of-type>span.mdc-list-item__graphic', 'mdc-icon-button'));
                it('Main Content Task List Section UL First List Item Graphic Icon Exists', domHas('main>article.main-content>section>ul>li:first-of-type>span.mdc-list-item__graphic>i.material-icons'));
                it('Main Content Task List Section UL First List Item Text Exists', domHas('main>article.main-content>section>ul>li:first-of-type>span.mdc-list-item__text'));
                it('Main Content Task List Section UL First List Item Meta Exists', domHas('main>article.main-content>section>ul>li:first-of-type>i.mdc-list-item__meta'));
                it('Main Content Task List Section UL First List Item Meta Has MDC Icon Button and Material Icons Classes', elementHasClasses('main>article.main-content>section>ul>li:first-of-type>i.mdc-list-item__meta', 'mdc-icon-button material-icons'));
                it('Main Content Task List Section UL First List Item Meta Has Delete Icon Text', elementHasText('main>article.main-content>section>ul>li:first-of-type>i.mdc-list-item__meta', 'delete'));
            })
        })
        describe('Main Content Details Task List', () => {
            it('Main Content has 3 Details Task List', countElement('main>article.main-content>details', 3));
            it('Main Content Details Task List Has Task List Class', elementHasClasses('main>article.main-content>details', 'task-list'));
            it('Main Content Details Task List Summary Exists', domHas('main>article.main-content>details>summary'))
            it('Main Content Details Task List Summary Has Typography Class', elementHasClasses('main>article.main-content>details>summary', 'mdc-typography--headline5'));
            it('Main Content Details Task List UL Exists', domHas('main>article.main-content>details>ul'))
            it('Main Content Details Task List UL Has MDC List Class', elementHasClasses('main>article.main-content>details>ul', 'mdc-list'));
            it('Main Content First Details Task List UL Has 5 List Items', countElement('main>article.main-content>details:first-of-type>ul>li', 5));
            describe('Main Content Details Task List Item', () => {
                it('Main Content Details Task List UL First List Item Has MDC List Item and Complete Classes', elementHasClasses('main>article.main-content>details>ul>li:first-of-type', 'mdc-list-item complete'));
                it('Main Content Details Task List UL First List Item Ripple Exists', domHas('main>article.main-content>details>ul>li:first-of-type>span.mdc-list-item__ripple'));
                it('Main Content Details Task List UL First List Item Graphic Exists', domHas('main>article.main-content>details>ul>li:first-of-type>span.mdc-list-item__graphic'));
                it('Main Content Details Task List UL First List Item Graphic Has MDC Icon Button Class', elementHasClasses('main>article.main-content>details>ul>li:first-of-type>span.mdc-list-item__graphic', 'mdc-icon-button'));
                it('Main Content Details Task List UL First List Item Graphic Icon Exists', domHas('main>article.main-content>details>ul>li:first-of-type>span.mdc-list-item__graphic>i.material-icons'));
                it('Main Content Details Task List UL First List Item Text Exists', domHas('main>article.main-content>details>ul>li:first-of-type>span.mdc-list-item__text'));
                it('Main Content Details Task List UL First List Item Meta Exists', domHas('main>article.main-content>details>ul>li:first-of-type>i.mdc-list-item__meta'));
                it('Main Content Details Task List UL First List Item Meta Has MDC Icon Button and Material Icons Classes', elementHasClasses('main>article.main-content>details>ul>li:first-of-type>i.mdc-list-item__meta', 'mdc-icon-button material-icons'));
                it('Main Content Details Task List UL First List Item Meta Has Delete Icon Text', elementHasText('main>article.main-content>details>ul>li:first-of-type>i.mdc-list-item__meta', 'delete'));
            })
        })
    })
});
