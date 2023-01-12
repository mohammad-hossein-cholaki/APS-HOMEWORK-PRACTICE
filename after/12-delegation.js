const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");

tweetForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const usernameInput = tweetForm.elements.username.value;
    const tweetInput = e.target.tweet.value;

    if (!usernameInput || !tweetInput) {
        alert("ye chizi benevis");
    } else {
        alert("submiiitteedd!!!");
    }

    addTweet(usernameInput, tweetInput);
    usernameInput.value = "";
    tweetInput.value = "";
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement("li");
    const bTag = document.createElement("b");

    bTag.append(username);
    newTweet.append(bTag, `- ${tweet}`);
    tweetsContainer.append(newTweet);
};

tweetsContainer.addEventListener("click", (e) => {
    console.log(e.target.value);
    // e.target.remove();
    // if (e.target.nodeName === "LI") {
    //     e.target.remove();
    // }
    e.target.nodeName === "LI" && e.target.remove();
    // e.target.nodeName === 'LI' ? e.target.remove() : console.log('nothing');
    // console.log(e.target.nodeName);
});
