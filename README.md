# cs4all-blueprint-gatsby
Converting the [CS4All Blueprint site](https://blueprint.cs4all.nyc/) to [GatsbyJS](https://gatsbyjs.org)

By [@nycdoe-cs4all](https://github.com/nycdoe-cs4all)


# Setup

## Installations
1. Install [Node.js](https://nodejs.org/en/download/)
   - Mac users can and should consider using [homebrew](https://treehouse.github.io/installation-guides/mac/node-mac.html) instead
2. Install [Git](https://git-scm.com/)
3. Install Gatsby - In your terminal, run the following command: `npm install -g gatsby-cli`
- OPTIONAL: [GitHub Desktop](https://desktop.github.com/)
  - GitHub allows you to have a GUI for using Git

- For more information, follow [Gatsby's Tutorial](https://www.gatsbyjs.org/tutorial/part-zero/)

## Preparing Git(Hub)
- Clone the repository:
  - Using your terminal - `git clone https://github.com/dylsteck/cs4all-blueprint-gatsby.git`
  - Using GitHub Desktop - File > Clone repository... > URL tab > "https://github.com/dylsteck/cs4all-blueprint-gatsby.git"

## Running the Website
1. Navigate to the folder using your terminal - `cd C:\...\cs4all-blueprint-gatsby`
   - Replace the url with the directory you cloned the repository into
2. Install dependencies - `npm install`
3. Run - `gatsby develop`

## File Structure
- *src*
  - This is where the main code of this web app lives
  - *src/components*
    - Where components that will be reused will be stored(eg. layout and SEO)
    - The temporary home for `style.css`(until a proper public folder is created)
  - *src/images*
  - *src/pages*
    - Where every page of the site is stored
    - Each page is a component that is filled with the HTML code from the original blueprint repo
      - The structure for each component is written out in `src/pages/boilerplate.js`

## A little bit about Gatsby and React

Gatsby is a remix of the popular framework React. React makes it easy to create web apps using components.
Gatsby makes it easy to create websites with a light front-end framework and little to no backend. It can easily connect to data sources(even Wordpress), and is configured to work well with headless servers. Gatsby statically renders the site and the data shown/stored on it, which means it's super easy to publish anywhere online and makes for a very fast web app.

## How to convert an old blueprint site to a Gatsby component

<i>Quick note: You won't have to follow every single step for each component. It is possible that, for example, some files won't include comments or inline styling in the original HTML. In that case, move on to the next step.</i>
1. Go to `src/pages`. Every HTML page from the old blueprint site is in there, and now has a .js extension.
2. Copy the contents of `src/pages/boilerplate.js` into the top of the file you're working in, and un-comment the code.
3. Change the title of the `<SEO /> ` component to the name of the page. eg. if the file is called `cs-and-the-city.js`, name it CS and the City.
4. Delete every line in the old HTML code that contains `{% %}`, such as: `{% extends "base.html" %} {% load i18n %} {% block content %}`
5. Find every instance of `class=` and replace it with `className=` -- because React supports camel case, and lower case "class" means something different in the React DOM.
6. Find every `xlink:href=` and replace it with `xlinkHref=`.
7. Turn every inline HTML comment into a React comment. Replace the `<!-- ` at the beginning of every comment with `{/*` and replace the `-->` at the end of every comment with `*/}`. For example, `<!-- end of section -->` should be: `{/* end of section */}`.
8. Turn every inline style into a React inline style. In React, inline styling is done with nested objects, where every property is written in camel-case and every value is written in quotations. For example, `<h1 style="background-color: blue;"> Hi </h1>` becomes `<h1 style={{backgroundColor: 'blue'}}> Hi </h1>`. Instead of putting a semicolon between every property, put a comma.
9. Cut/copy all of the HTML code from the original site that you've just edited and paste it where the comment at the top of the file(the code you copied from the boilerplate) says "children -- the HTML code for the site".
10. Rename the component from `Boilerplate` to the name of the site, written in camelcase. For example, if the file is called `cs-and-the-city.js`, turn `const Boilerplate` into `const CSAndTheCity`.

# Changelog

### 6/16/20
From [Dylan](https://github.com/dylsteck)
- Converted and fixed:
  - The three components Dan converted earlier today(I had to make a small fix to the boilerplate, so I made a very minor edit to the three components that was my own fault)
  - `src/pages/boilerplate.js`
    - Changed a very small typo in the naming of the components that was causing an error
  - `src/pages/units-k2-computer-science-and-me.js`
  - `src/pages/units-68-innovative-programming.js`
  - `src/pages/units-35-creating-from-scratch.js`
  - `src/pages/tangible-interfaces.js`
  - `src/pages/software-engineering-program.js`
  - `src/pages/software-engineering-program-jr.js`
  - `src/pages/practices.js`


### 6/16/2020
From [Dan](https://github.com/dgaylordCS4All)
- Converted `src/pages/bjc-cs-principles.js` to a component
- Converted `src/pages/uteach-cs-principles.js` to a component
- Converted `src/pages/ican.js` to a component

### 6/10/2020
From [Dylan](https://github.com/dylsteck)
- Wrote guide on how to convert the blueprint site's template pages to Gatsby
- Changed file extensions from `.html` to `.js` for all files in pages/ activities, registration, resources, and users.
- Converted `src/pages/what_is_cs.js` to a component
- Added installation instructions

### 6/9/2020
From [Dylan](https://github.com/dylsteck)
- Imported all HTML pages from original blueprint repo and changed all extensions from `.html` to `.js`
- Created `src/pages/boilerplate.js` as an example for the core structure of a page
- Finished converting `src/pages/index.js` and `src/pages/about.js` to Gatsby/React
  - Cleaned up some of the code
  - Changed certain syntax to match React
    - eg. In React, `class` becomes `className` because it follows camel case for DOM attributes(class, style, id, etc.)
- Created navbar component
