"use strict";

const url = "http://benjaminsknudsen.com/wp-json/wp/v2/posts?_embed";
// const url = "http://api.cederdorff.com/wp-json/wp/v2/posts?_embed";

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(posts) {
    appendPosts(posts);
  });

function appendPosts(posts) {
console.log(posts);
let htmlTemplate = "";
for (let post of posts) {
htmlTemplate += `
<article>
<img src="${getFeaturedImageUrl(post)}">
<h2>${post.title.rendered}</h2>
<p>${post.content.rendered}</p>
</article>
`;
}

document.querySelector('#content').innerHTML = htmlTemplate;
}

// get the featured image url
function getFeaturedImageUrl(post) {
   let imageUrl = "";
   if (post._embedded['wp:featuredmedia']) {
     imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
   }
   return imageUrl;
 }
