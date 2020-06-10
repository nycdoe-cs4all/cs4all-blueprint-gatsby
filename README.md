# cs4all-blueprint-gatsby
Converting the [CS4All Blueprint site](https://blueprint.cs4all.nyc/) to [GatsbyJS](https://gatsbyjs.org)
By [@nycdoe-cs4all](https://github.com/nycdoe-cs4all)

# Setup

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

# Changelog

### 6/9/2020
From [Dylan](https://github.com/dylsteck)
- Imported all HTML pages from original blueprint repo and changed all extensions from `.html` to `.js`
- Created `src/pages/boilerplate.js` as an example for the core structure of a page
- Finished converting `src/pages/index.js` and `src/pages/about.js` to Gatsby/React
  - Cleaned up some of the code
  - Changed certain syntax to match React
    - eg. In React, `class` becomes `className` because it follows camel case for DOM attributes(class, style, id, etc.)
- Created navbar component
