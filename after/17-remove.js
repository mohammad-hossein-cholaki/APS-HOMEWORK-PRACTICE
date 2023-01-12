const sectionImage = document.querySelector("#sectionImage");

const p = document.querySelector("#sectionImage p");

// sectionImage.removeChild(p);
// p.parentElement.removeChild(p);

console.log(p.parentElement.removeChild(p));

sectionImage.remove();
