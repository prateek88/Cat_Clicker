// Cat clicker app.
// we can add any number of cats. And we should add

// Get all cats
let cats = document.querySelectorAll('.cat');
let cat_images = document.querySelectorAll('.cat_image');



// Array for click-counts related to all cats
let click_counts = [];

// Add counts related content for each cat
for (let i=0; i<cat_images.length; i++){
  let countsHtmlContent = `<p>
    Number of clicks:
    <span id="count${i}">0</span>
  </p>`;
  click_counts.push(0);
  cat_images[i].insertAdjacentHTML('afterend', countsHtmlContent);
}

for (let i=0; i<cat_images.length; i++){
  // Whenever a cat image is clicked, update the number of times it has been
  // clicked
  cat_images[i].addEventListener('click', function(){
    // increase count for the cat clicks
    click_counts[i]++;
    // update span elemnt with this count
    let spanId = `#count${i}`;
    console.log(spanId);
    let spanElement = document.querySelector(spanId);
    console.log(spanElement);
    spanElement.textContent = click_counts[i];
  });
}

//
// const cat_image1 = document.querySelector('.cat_image1');
// const click_counts_cat1 = document.querySelector('.count1');
// let count1 = 0;
//
// cat_image1.addEventListener('click', function(){
//   count1++;
//   click_counts_cat1.innerText = count1;
// });
//
// const cat_image2 = document.querySelector('.cat_image2');
// const click_counts_cat2 = document.querySelector('.count2');
// let count2 = 0;
//
// cat_image2.addEventListener('click', function(){
//   count2++;
//   click_counts_cat2.innerText = count2;
// });
