# NYC DOE CS Education (CS4All) Blueprint

[CS4All Blueprint V2.0](https://blueprint.cs4all.nyc/) using [GatsbyJS](https://gatsbyjs.org)

By [@nycdoe-cs4all](https://github.com/nycdoe-cs4all)

Based on [CS4All Blueprint V1.0](https://github.com/nycdoe-cs4all/blueprint-learning-site)

### About Gatsby and React

Gatsby is a remix of the popular framework React. React makes it easy to create web apps using components.
Gatsby makes it easy to create websites with a light front-end framework and little to no backend. It can easily connect to data sources (such as WordPress), and is configured to work well with headless servers. Gatsby statically renders the site and the data shown/stored on it, which means it's super easy to publish anywhere online and makes for a very fast web app.

## Table of Contents

This README ended up being longer than intended, so here are quick links to where you may want to go

- [TO DO](https://github.com/nycdoe-cs4all/cs4all-blueprint-gatsby#to-do)
- [File Structure](https://github.com/nycdoe-cs4all/cs4all-blueprint-gatsby#file-structure)
- [Setting Up Your Development Environment](https://github.com/nycdoe-cs4all/cs4all-blueprint-gatsby#setting-up-your-development-environment)
- [Adding Educator Resources via WordPress](https://github.com/nycdoe-cs4all/cs4all-blueprint-gatsby#adding-educator-resources-via-wordpress)
- [Changelog](https://github.com/nycdoe-cs4all/cs4all-blueprint-gatsby#changelog)
- [For Posterity](https://github.com/nycdoe-cs4all/cs4all-blueprint-gatsby#for-posterity)

## TO DO

- [x] Port [Blueprint 1.0](https://github.com/nycdoe-cs4all/blueprint-learning-site) to GatsbyJS
- [x] Squash bugs so Blueprint 2.0 looks and functions identical to Blueprint 1.0
- [x] Organize folder structure
- [x] Improve code comments (could probably improve further)
- [x] Update Educator Resource format and structure
- [x] (_NOT FINAL_) Improve look of curriculum page(s)
- [x] (_NOT FINAL_) Include references to NYSED standards, 3rd party curriculum, and CS Leads resources
- [ ] (_IN PROGRESS_) Update README
- [ ] Create process for adding new Educator Resources in WordPress
- [ ] Improve site accessibility (i.e. translation, page structure, alt text, etc. Will require sub tasks)
- [ ] Improve stylesheets (i.e only import styles for pages that need them)
- [ ] Make site more modular (i.e make components for items that are used often)
- [ ] Launch Blueprint 2.0 (estimate May 1, 2021)
- [ ] (**OPTIONAL**) Change video hosting
- [ ] (**OPTIONAL**) Change site hosting

## File Structure

- _src_
  - This is where the main code of this website lives
  - _src/assets_
    - This is where images, videos, etc. are stored
    - When adding assets, make sure they are placed in the appropriate subfolder
  - _src/components_
    - Where components that will be reused are stored (eg. layout and SEO)
    - The temporary home for stylesheets (until site is made more modular)
  - _src/pages_
    - Where every page of the site is stored
    - The structure for each component is written out in `src/pages/boilerplate.js`

## Setting Up Your Development Environment

### Installing Apps

For more information, check out the [Gatsby Tutorial](https://www.gatsbyjs.org/tutorial/part-zero/)

1. Install [Node.js](https://nodejs.org/en/) using an [installer](https://nodejs.org/en/download/) or [package manager](https://nodejs.org/en/download/package-manager/)
2. Install [Git](https://git-scm.com/)
3. Install Gatsby
   - In your terminal, run the following command: `npm install -g gatsby-cli`

- **OPTIONAL**: Additional recommended installs
  - Install [GitHub Desktop](https://desktop.github.com/)
    - A GUI to more easily use Git on your machine
  - Install [Atom](https://atom.io/)
    - A text editor designed specifically for (and by) GitHub
  - Install [Prettier](https://prettier.io/)
    - A plugin for various text editors that helps format code to avoid errors

### Preparing Git(Hub)

For more information, check out [GitHub Help](https://help.github.com/en/desktop)

1. Clone the repository:
   - If using your terminal, run the following command: `git clone https://github.com/nycdoe-cs4all/cs4all-blueprint-gatsby.git`
   - If using GitHub Desktop: File > Clone repository... > URL tab > "https://github.com/nycdoe-cs4all/cs4all-blueprint-gatsby.git"
2. Navigate to the project in your terminal:
   - If using your terminal, run the following command: `cd C:\...\cs4all-blueprint-gatsby`
     - Replace the URL above with the directory you cloned the repository into
   - If using GitHub Desktop, just hit `CTRL + ~`
3. Install dependencies:
   - In your terminal, run the following command: `npm install`

### Running Locally

For more information, check out the [Gatsby Tutorial](https://www.gatsbyjs.org/tutorial/part-zero/)

1. Navigate to the project in your terminal:
   - If using your terminal, run the following command: `cd C:\...\cs4all-blueprint-gatsby`
     - Replace the URL above with the directory you cloned the repository into
   - If using GitHub Desktop, just hit `CTRL + ~`
2. Run the development server:
   - In your terminal, run the following command: `gatsby develop`
3. Open up a browser tab and navigate to `http://localhost:8000`
   - You can also access the site's [GraphQL](https://graphql.org/) data by going to `http://localhost:8000/___graphql`

### Deploying Site

For more information, check out the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-eight/)

1. Stop the development server (if running)
2. Navigate to the project in your terminal:
   - If using your terminal, run the following command: `cd C:\...\cs4all-blueprint-gatsby`
     - Replace the URL above with the directory you cloned the repository into
   - If using GitHub Desktop, just hit `CTRL + ~`
3. Build the project:
   - In your terminal, run the following command: `gatsby build`

- **OPTIONAL**: Viewing the production site locally
  - In your terminal, run the following command: `gatsby serve`
  - Open up a browser tab and navigate to `http://localhost:9000`

## Adding Educator Resources via WordPress

1. Access the site's WordPress backend:
   - Go to https://cs4allblueprint.wordpress.com/wp-admin/
   - Log in with your user credentials
2. Determine which layout the resource will take:
   - Video Only (i.e. [Computer Science Education Week](https://blueprint.cs4all.nyc/resources/42/))
   - Strategy w/ Modifications (i.e. [Culturally Responsive CS](https://blueprint.cs4all.nyc/resources/3/), with or without video)
   - General Article (i.e. [How Might I Evaluate Student Progress](https://blueprint.cs4all.nyc/resources/20/))
   - New layouts may be added if a resource doesn't fit into one of the above formats
3. Navigate to the _Posts_ section in WordPress
4. Click _Add New_ in the top left
5. Type in the content using the following guidelines:
   - **NOTE**: Use the examples in step 2 as references
   - Each paragraph should be its own block
   - Headings should start at H3 and work down
   - H4 should be in all caps
   - Links to external sites should be marked to open in a new tab
   - Images should have a width of approximately 613px and have alt text
6. Change the following in the right menu (Settings):
   - **NOTE**: If the settings menu isn't visible, click on the gear next to the _Publish_ button
   - The author should be _nycdoecs4all_
   - Update the URL slug to something that makes sense (see other posts for examples)
   - Check of appropriate categories (used for filtering)
   - Summarize the page in the excerpt (for the main Educator Resources page)
7. Click the _Preview_ button to make sure the page displays correctly
8. Click the _Publish_ button
   - The page will go live during the next deployment

## Changelog

### 3/5/21

From [Dan](https://github.com/danielgaylord)

- Updated README to make it easier to follow
- Added process for adding Educator Resources via WordPress
- Added project To-do list

### 3/1/21

From [Dan](https://github.com/danielgaylord)

- Used [prettier](https://prettier.io/) to make code easier to read

### 2/24/21

From [Dan](https://github.com/danielgaylord)

- Fixed caret in Navbar
- Updated page scrolling for internal links
- Added draft looks of potential changes to the following pages:
  - Educator resources
  - Curriculum Catalog
  - Student outcomes
  - Integrated Units Curriculum

### 2/16/21

From various

- Blueprint 2.0 bugs squashed, site looks and functions exactly like 1.0 with some minor differences
- Code roughly commented and organized for easier viewing and parsing

### 10/27/20

From [Dylan](https://github.com/dylsteck)

- Finished wordpress pagination
- Merged `wordpress` branch with `master`

### 10/22/20

From [Dan](https://github.com/danielgaylord)

- Missed several updates from prior...
- Updated About page so the read more/collapse text buttons work and text opens gradually
- Removed data var from layout.js, unsure if it broke anything, but everything still seems to work
- Added an Accordion component that allows sections to open gradually
  - Added accordion to the concepts, practices, and perspective pages
- Fixed links in practices page, but the sections it links to do not automatically open
- Show me how button on index page now gradually scrolls to the proper section of the page
- CS4All logo in navbar links to index, but there is now a border around the logo
- Noticed issue where previous coder stylized anchors to be used as buttons, but that is improper use for accessibility
  - To fix we will have to deep dive into the stylesheet

### 9/22/20

From [Dan](https://github.com/danielgaylord)

- Fixed various warnings from running 'gatsby develop'
  - Ex: img alt text, 'Link' not being used, a elements
  - layout.js still has 1 warning that might be hardere to fix
- Removed all links to the old units page
- Restructured pages so all of the curriculum and unused pages are in their own folders
- Made sure most non-internal links open in a new tab

## 9/21/20

From [Dylan](https://github.com/dylsteck)

- Began looking into independent routing with Gatsby's [createPages](https://www.gatsbyjs.com/docs/node-apis/#createPages) API

### 8/31/20

From [Dylan](https://github.com/dylsteck)

- Pushed stable wordpress version to master
  - Next up: fix internal router so each educator resource article has its own page
  - Will keep looking into [reach router](https://reach.tech/router/api)

### 8/12/20

From [Dylan](https://github.com/dylsteck)

- Cleaned up `pages/resources.js`
- Worked on `pages/educator-resources.js` -- a component that will be re-used to display each article
  - Having a few issues with [router params](https://reach.tech/router/api/useParams) and GraphQL
- Looked into how we can clean up some of the code

### 7/29/20

From [Dylan](https://github.com/dylsteck)

- `pages/resources.js` shows all posts
- Trying to get demo server working, but taking a while because of WordPress issues

### 7/17/20

From [Dylan](https://github.com/dylsteck)

- Fixed all runtime bugs from component conversion
- Connected to local Wordpress
- Created Resource component, which just returns all of the WordPress posts as JSON
- Added "How to locally run WordPress" in README

### 7/15/20

From [Dylan](https://github.com/dylsteck)

- Created resources component and fixed some bugs

### 7/8/20

From [Dylan](https://github.com/dylsteck)

- Added [Wordpress-Gatsby plugin](https://www.gatsbyjs.org/packages/gatsby-source-wordpress/) to the project
- Created `wordpress` branch
- Created a blank Wordpress site for testing
- Paused further development to check in with Dan
  - All of the components are fully coded out, and if we used WordPress, we would have to re-convert them to plain text and sort out how we want to replicate all of the icons
    - Could also keep the code for key sites and then create a base layout for every component page(this would be the only solution that would involve Wordpress, basically)

### 6/25/2020

From [Dan](https://github.com/danielgaylord)

- Cleaned up the code of all the pages that were converted to components
- Started adding comments to the Computational Media Innovator page

### 6/22/20

From [Dylan](https://github.com/dylsteck)

- Converted the remaining pages into components
- Moved some files to `src/for_later`
  - Code that can't be added back to the code base until we choose and implement a back end
  - Mostly database code, or code that is used to interact with database content(eg. registering a new user, logging out, etc.)]
- Began toying around with WordPress

### 6/19/2020

From [Dan](https://github.com/danielgaylord)

- Converted `src/pages/creative-computing.js` to a component
- Converted `src/pages/creative-web.js` to a component
- Converted `src/pages/critical-computing.js` to a component
- Converted `src/pages/cs-a.js` to a component
- Converted `src/pages/cs-principles.js` to a component
- Cleaned up the code of various other pages that were already converted to components

### 6/18/2020

From [Dan](https://github.com/danielgaylord)

- Converted `src/pages/bootstrap-data-science.js` to a component
- Converted `src/pages/codeorg-cs-principles.js` to a component
- Converted `src/pages/computational-media-creator.js` to a component
- Converted `src/pages/computational-media-explorer.js` to a component
- Converted `src/pages/computational-media-innovator.js` to a component

### 6/17/20

From [Dylan](https://github.com/dylsteck)

- Fixed inline `@media` query issue in `src/pages/ican.js`

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

From [Dan](https://github.com/danielgaylord)

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

## For Posterity

### Converting CS4All Blueprint V1.0 pages into V2.0 Gatsby components

_Quick Note 1: You may not have to follow every single step for each component. It is possible that, for example, some files won't include comments or inline styling in the original HTML. In that case, move on to the next step._
_Quick Note 2: If, after following these steps, the page still does not work, use other pages as a reference or flag the file in some way for additional eyes._

1. Add the V1.0 page into `src/pages` and change the extension to .js.
2. Copy the contents of `src/pages/boilerplate.js` into the top of the file you're working in, and un-comment the code.
3. Change the title of the `<SEO />` component to the name of the page. eg. if the file is called `cs-and-the-city.js`, name it CS and the City.
4. Delete every line in the old HTML code that contains `{% %}`, such as: `{% extends "base.html" %} {% load i18n %} {% block content %}`
5. Find every instance of `class=` and replace it with `className=` -- because React supports camel case, and lower case "class" means something different in the React DOM.
6. Find every `xlink:href=` and replace it with `xlinkHref=`.
7. Turn every inline HTML comment into a React comment. Replace the `<!--` at the beginning of every comment with `{/*` and replace the `-->` at the end of every comment with `*/}`. For example, `<!-- end of section -->` should be: `{/* end of section */}`.
8. Turn every inline style into a React inline style. In React, inline styling is done with nested objects, where every property is written in camel-case and every value is written in quotations. For example, `<h1 style="background-color: blue;"> Hi </h1>` becomes `<h1 style={{backgroundColor: 'blue'}}> Hi </h1>`. Instead of putting a semicolon between every property, put a comma.
9. Cut/copy all of the HTML code from the original site that you've just edited and paste it where the comment at the top of the file(the code you copied from the boilerplate) says "children -- the HTML code for the site".
10. Rename the component from `Boilerplate` to the name of the site, written in camelcase. For example, if the file is called `cs-and-the-city.js`, turn `const Boilerplate` into `const CSAndTheCity`.
