const tweetForm = document.querySelector("#tweetForm");
const tweetContainer = document.querySelector("#tweets");

tweetForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // console.log(tweetForm.elements.username.value);
    // console.log(e.target.tweet.value);

    const userNameInput = tweetForm.elements.username.value;
    const tweetInput = e.target.tweet.value;

    if (!userNameInput || !tweetInput) {
        alert("ye chizi benevis");
    } else {
        alert("submiteedd!!!");
        addTweet(userNameInput, tweetInput);
        // e.target.username.value = "";
        // e.target.tweet.value = "";
        tweetForm.reset();
    }
});

const addTweet = (username, tweet) => {
    const li = document.createElement("li");

    li.append(username, `: ${tweet}`);
    tweetContainer.append(li);
};
