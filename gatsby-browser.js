/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const $ = require("jquery")
export const onClientEntry = () => {
  window.onload = () => {
    $('a.toggle').click(function(event) {
       event.preventDefault();
       $("nav").toggleClass("active");
   });
  }
}
