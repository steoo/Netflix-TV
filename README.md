# Netflix-TV
The description says: "a chrome extension to play random netflix movie based on categories through channels".

##So why Netflix TV?

Let's start from the beginning: my brother told me that sometimes he doesn't want to choose between tons of films that are in the netflix catalogue
 but instead have someone who can randomly choose one for him and that's why he called it **NetflixTV**.
 Like in television you pick a Channel and see what's going on, why can't we do the same with Netflix?


##How does Netflix TV solve this problem?

I created a list of channels based on categories which appears in the `/browse` page ( you clearly need a netflix account ).
You can choose between one of the channels present in the list, wait for the extension to navigate to the `/genre/:id` and pick a random movie for you.


##What does Netflix TV needs?

Of course, contribution and enhancement from all of you :)

##How to contribute?

Really simple: fork(), create branch, test it in the browser, always remember to put some documentation, make a PR.


##Build instructions
In the meantime that we don't have a build.sh yet, these is the build routine;

1 - Clone or download the repository

2 - `npm install` to install the whole depencies ( especially `dev` ones )

3 - `gulp build-inject` (as long as we do not have a `default` task yet and the `src/injectPlay.js` is not ES6 yet.)

4 - Load the extension as unpacked ( https://developer.chrome.com/extensions/getstarted#unpacked )

##License

GNU GPL3: https://github.com/steoo/Netflix-TV/blob/master/LICENSE

Have fun and contribute :)
