![GitHub last commit](https://img.shields.io/github/last-commit/Ryuku72/MyFriendOni?style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/Ryuku72/MyFriendOni?style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/Ryuku72/MyFriendOni?style=for-the-badge)

# MyFriendOni
Project3: Japanese Quiz Tutor
5th August 2020

### Working Project Example
https://myfriendoni.herokuapp.com/

## Contents

* [Introduction](#intro)
* [Build Process](#build)
* [Project Issues](#issues)
* [Project Summary](#summary)
* [Future Plans](#future)
* [UPDATES] (#updates)
* [Installation](#install)
* [Additional Information](#add)

<a name="intro"></a>

## Design
A Japanese Quiz Tutor that allows you to review your history, pre-study using database information and alter your user account.

* Mobile Responsive Design
* TailwindCSS
* Animations
* Photoshop and Inkscape
* Full Stack Project

## Key Concepts for `My Friend Oni`
* MERN Stack
* React and React Hooks (useState, useRef, useContext, useEffect)
* Utilizes CRUD (Create, Read, Update and Destroy)
* Database using Mongoose, MongoDB and Mongo Atlas
* Deployed on Heroku
* Utilizes Passport

<a name="build"></a>

## Build Process 
This projects core concept was to showcase everything I had learnt in 6 months at the Code Bootcamp organised by University of Western Australia and Trilogy. My project idea had to be simple with the possibility to become complex. For that reason, I choose to make a Japanese Quiz utilizing the Japanese Proficiency Test Level 5 vocabulary and making a separate database for Japanese lettering (hiragana and katakana). From there it was a matter of designing a pop-up screen with a quiz and tracking score, points, high score and providing a result.

Stage One: Build the Quiz, the Score Page, Login Screen and the database
Stage Two: Add a search UI for vocab and letters. Attach Passport and added User customization
Stage Three: Insert animations, begin mobile responsiveness and add a player history page. 
Stage Four: Paperwork

 <a name="issues"></a>

## Project Issues
The overarching issues with this project was the size and it was not Mobile First. Backtracking over all my CSS and trying to make it work on mobile was very time consuming. I had to remove a large amount of TailwindCSS classes then recapture them in the CSS files.

The largest lesson appeared to be…  don’t over think something and don’t under bake anything (CSS or Logic) as it will bite you later. If all else fails, just make a ternary operator. 

Remaining issues are listed below:

* Need to useContext. Currently I don’t feel comfortable about using a globalStore but it’s very obvious that it is needed
* Issues surrounding drop down windows
* Routes could be cleaner. Currently I am overusing the `Find({})` mongoose request for my vocabulary searches. This should be hopefully minimised in later builds. 
* Didn’t have enough time to utilize SVG animations and had issues with React accepting SVG’s as a component vs an import image.
* Code is not dry
* Pages are too large and should be broken down into smaller components.
* Still not happy with the mobile responsiveness

Overall, I am happy with the project and many lessons were learnt.

<a name="summary"></a>

## Project Summary

* 14 Routes
* 12 Page options
* 26 Components
* 4 Utility files
* 59 useStates
* 76 ternary operators
* 15 Map functions
* 40+ Visual assets
* 1 Large Background Animation
* 4 Database Documents
* And a lot of CSS
<br>

<a name="future"></a>

## Future Plans
Currently I want to submit this to the app store and actually expand the database to include different levels of the proficiency test. Unfortunately, I will need to first replace any assets that I have downloaded from Flat Icon or from the internet as I don’t own the rights.

Next I will be adding in Google and Facebook authentication and then… the sky is the limit.

<a name="update"></a>

## Update

`24/08 Started adding REDUX to the project as a state manager`

<a name="install"></a>

## Installation
1. Download the repo from Github
```
https://github.com/Ryuku72/MyFriendOni.git
```

2. Inside the project folder
```
npm install
```

3. Download Atlas from MongoDB website and utilize the CSV file inside `/database`. 

4. Run `npm start`

Alternatively visit the Heroku page @ https://myfriendoni.herokuapp.com/

<a name="add"></a>

## Additional Information
### Tests
* Eslint from React

### License
Licenses: MIT

### Resources
* NPMJS
* W3 Schools
* Medium
* Mozilla
* Stackoverflow
* Resources provided in Slack
* Youtube tutorials
* Dillinger
* FlatIcon
* Google Font

### Technology
* TailwindCSS
* React
* Mongoose 
* Mongo Atlas
* Photoshop
* Inkscape
* Heroku
* Express JS
* Node.JS
* JavaScript
* CSS

<br>

### Joshua K Bader // Ryuku72 // Bader.JoshuaK@Gmail.com