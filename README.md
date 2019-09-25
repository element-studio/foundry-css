# FoundryCSS

---

FoundryCSS is a Sass based, semi-opinionated CSS framework - opinionated enough to help speed up the development process of small or uncomplicated designs/interfaces; but not so opinionated to impede larger, more complicated project builds.

---

## Getting Started

###1. Install Foundry as a dependency in your project;
npm install foundry-css

###2. Dive into Foundry's `node_modules` folder, and copy the `templates/_theme.scss` file into your project's SCSS directory.

###3. Make sure your SCSS compiler’s build task has access to FoundryCSS's `node_modules` path; src via the node_modules folder;
"scripts": {
"build": "node-sass-chokidar --include-path ./node_modules/foundry-css/src resources/scss/ -o css/"
}

###4. Make sure your project’s main SCSS file loads your modules in the following order;
// 1. Import the FoundryCSS core
@import ‘foundry-core’;

    // 2. Import your project-level theme file
    @import ‘{path-to-your-scss}/theme.scss’;

    // 3. Import the FoundryCSS UI styles
    @import ‘foundry-ui’;

    // 4. Import your project-specific .scss modules
    @import ‘{path-to-your-scss}/blocks/my-buttons’;
    @import ’{path-to-your-scss}/components/my-text-inputs‘;
    ...

###5 Theming & Customisation
Open up the `_theme.scss` file you copied over from `node_modules` and tweak it's values to suit your project; FoundryCSS will honour any uncommented value in this file over it's own defaults. Colours, fonts, and global spacing can all be controlled from this file.

###6. Get cracking!
Sprinkle FoundryCSS styles into your project wherever you need them!
