//* Parent Element, Children, Next Sibling, Previous Sibling

// const linkSelector = document.querySelector("#h1-a-link");
// console.log(linkSelector);
// console.log(linkSelector.parentElement);
// linkSelector.parentElement.style.color = "green";

// console.log(linkSelector.nextSibling);
// linkSelector.parentElement.nextElementSibling.style.borderRadius = "50%";

// console.log(linkSelector.previousSibling);
// linkSelector.parentElement.previousElementSibling.id = "";

// const ul = document.querySelector("ul");
// console.log(ul.children.length);
// console.log(ul.childNodes);
// ul.childNodes.forEach((item) => console.log(item));
// console.log(ul.childElementCount);

//* Create Element
const img = document.createElement("img");
img.alt = "test add new image";
img.src =
  "https://play-lh.googleusercontent.com/G5oF0mhpOcQzFTrU6TDUL0JoAjzRt38weiZKua7L61WVT1z3dPcE9gUu-W2EwtM9cZU=w240-h480-rw";
// console.log(img);

//* Append Child
// document.body.appendChild(img);

//* Append
// document.body.append(img);

const sectionImage = document.querySelector("#sectionImage");
// sectionImage.append(img);
// console.log(sectionImage.appendChild(img));
// console.log(sectionImage.append(img));

// sectionImage.append("test add tag");
// sectionImage.appendChild("test add tag");

const p = document.createElement("p");
p.innerText = "test add ";
// sectionImage.append("hello", img, p);
// sectionImage.appendChild(img, p);

// sectionImage.appendChild(img);
// sectionImage.prepend(p);

//* insertAdjacentElement
// make sure check MDN for those 4 possible  actions
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement

// sectionImage.insertAdjacentElement("afterbegin", p);
// sectionImage.insertAdjacentElement("beforebegin", p);
