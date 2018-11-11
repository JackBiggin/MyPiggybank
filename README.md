> ⚠️ This is a Hackathon entry for GrizzHacks 3, and was created in under 24 hours. The code in this repo is likely to be hacky and potentially unstable/insecure, so please be careful if forking this repo. [You can view the project's Devpost page here.](https://devpost.com/software/mypiggybank-k6z97n)

> 🏆 MyPiggybank won Best Web Application, Best Money Management Tool, Best use of the HERE.com API and Best use of Google Cloud Platform at GrizzHacks 3!

## Inspiration
Over 10% of the US lives in poverty, with even more students living on a very limited income. We created myPiggybank in an attempt to provide vital financial education to students by flagging dangerous spending patterns and projecting future spending based on their history.

## What it does
MyPiggybank is a webapp which syncs with your bank account in realtime. It provides an easy to use way of viewing all your transactions, create a budget and view projections of their future spending, based on how they've historically allocated their money. Users are also given finance tips when using the app.

One unique feature is that it shows the exact location where a transaction happened on a HERE.com map. This means that if someone doesn't recognise one of their transactions, they can instantly verify if it happened somewhere they've been recently, and if not, block the card much quicker than otherwise possible.

## How we built it
The webapp's backend is written in PHP. Rather than using JavaScript to directly call Starling's API, we had to proxy the requests through the backend to ensure that user's authentication tokens aren't exposed. Users are able to login via oAuth, and we use sessions to securely authenticate the user.

The frontend has a Bootstrap based UI and loads data in from the backend via AJAX, while using jQuery and vanilla JavaScript for various functions.

We also setup LAMP from scratch on Google Cloud. This was quite difficult as it wasn't something any of us had done previously, but we did manage and our entire site is run off a VM hosted there.

## Challenges we ran into
Three of our hackers were totally new to hackathons. Teaching them about useful tools such as Bootstrap and Font Awesome was really rewarding, but did slow down our development significantly. However, it all paid off as together they managed to build a great looking frontend.
 
We built our hack using Starling Bank's API. While this API gave us access to a ton of useful information (such as transaction history and merchant information), we had some problems authenticating with it as PHP CURL library has some weird, non-documented behaviors. The dummy merchants provided by the sandbox version of the API also didn't return real locations, so we had to work around this for demo purposes.

## Accomplishments that we're proud of
Managing to integrate into a real bank's API and successfully pulling realtime data from it was something we didn't expect to manage. Initially, we planned to have users manually input their transactions, but being able to automatically sync their transactions and login with oAuth really enhances usability and UX.

Our team has members with totally different skill levels when it comes to web development. Some of us have produced live sites for clients, while others are just getting started with it. We managed to play to our strengths and work together to create a functioning product, all while learning lots of new skills.

## What we learned
> "This was the first time I used Bootstrap. It really sped up the development process, and I look forward to using in future projects." - **Nathan**

> "I really enjoyed honing in my graphic design skills. I also liked having the chance to teach my teammates about color theory and design concepts." - **Fabian**

> "It was really cool to have the chance to learn about GitHub and how to use it to collaborate on large scale software projects. Everyone being able to simultaneously work on their own parts of the webapp significantly sped up development. I look forward to using it again in the future. - **Andrew**

> "Having the chance to mentor people totally new to APIs, Bootstrap and web design in general was a really rewarding experience. I'm also really pleased that I managed to get oAuth and the Starling Bank API working - I didn't expect us to be pulling live data from a bank by the end of the 24 hours." -**Jack**

## What's next for MyPiggybank
As a concept, MyPiggybank has a lot of future potential. With enough development time, it could be integrated into other banks and financial services. The budgeting and future predictions tools could also be enhanced using AI and machine learning, making them more personalised and accurate.
