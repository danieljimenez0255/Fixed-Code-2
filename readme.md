# 2-HTML-CSS-Assignment: Buffs.doStuff

## Introduction

### Description

For this assignment, you will be creating a To-Do list application. The app will consist of a simple Top App Bar and a Main Content To-Do list. The To-Do list will be divided into a default section and various named sub-sections.

Note: Read all of the instructions before you begin. You may be able to use Emmet snippets to speed up your development.

### devDependencies

* jest
* live-server

### HTML Links

#### Material Design

```HTML
<link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet">
<script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
```

#### Material Icons

```HTML
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

### MDC Components
* [Typography](https://material.io/develop/web/docs/typography)
* [Top App Bar](https://material.io/develop/web/components/app-bars-top)
* [Icon Buttons](https://material.io/develop/web/components/buttons/icon-buttons)
* [Theme](https://material.io/develop/web/theming/color)
* [Lists](https://material.io/develop/web/components/lists)
* [Material Icons](https://material.io/resources/icons/?style=baseline)

## Instructions

### Setup
1. Accept Assignment
2. Clone Repository `git clone <url>`
3. Install Dependencies `npm i`
4. Set the `repository.url` in the `package.json` to your repository
5. Add your name to the `author` property in the `package.json`

### HTML <head>
1. Create an index.html file
2. Add `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>` elements
   1. Tip: Use the `html:5` Emmet snippet
3. Add the Material Icons, MDC, and app.css `<link>` elements to the `<head>`
   1. Note: We are using the "Quick Start (CDN)" links from the "Getting Started" tutorial. 
4. Add the MDC `<script>` element to the `<head>`
5. Add the `<title>` element to the `<head>` and give it the text `Buffs.doStuff`

### Typography and the Top App Bar
1. Add the `mdc-typography` class to the `<body>` element
2. Create a MDC Fixed Top App Bar
   1. Instead of a Menu Button, create a `<a>` link with the same classes, the `href="#"` attribute, and with the `home` Material Icon
   2. Set the Title to `Buffs.doStuff` and use the `on-primary` theme
   3. Do not include the End section

### Main Content
1. Create a `<main>` element after the Top App Bar.
   1. Be sure to add the `mdc-top-app-bar--fixed-adjust` class to compensate for the Top App Bar
2. Add an `<article>` with the class `main-content` to the `<main>` element
   1. Add an `<h2>` to the `<article>` with the `project-title` class and the `headline2` Typography Style
   2. Add the text `Inbox` to the `<h2>`

### Default To-Do List Section
1. Add a `<section>` element with the `task-list` class to the `<article>`
2. Add an MDC List to the Task List `<section>`
3. Add 5 MDC List Items to the MDC List
    1. Add the `complete` class to the first List Item
    2. Add the `mdc-icon-button` class to each List Item Graphic
        1. Tip: See the "List with radio group" section in the documentation
    3. Add an `<i>` with the class `material-icons` to each List Item Graphic
    4. Add random text to the List Item Text
    5. Add a List Item Meta element
        1. Note: Create a `<i>` element with the `mdc-list-item__meta`, `mdc-icon-button`, and `material-icons` classes after the List Item Text
    6. Add the text `delete` to the List Item Meta element

### Named To-Do List Sections
1. Add 3 `<details>` elements with the `task-list` class after the Default List Section element
2. Add a `<summary>` element with the `headline5` Typography and some random text to each `<details>` element
3. Add an MDC List like the one created above after each `<summary>` element

### Test and Verify
1. Run `npm test` to make sure all tests pass
2. Run `npm start` to see the result