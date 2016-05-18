#Eatr

##Description

Eatr is an application that allows allows the user to search recipes from an API or create unique recipes on their own and keep track a list of all of their recipes.

##Technologies Used

 - AngularJS
 - Firebase
 - Github
 - Yummly API

##Prerequisities

You will need the following installed:
 - Node

##Installation

1. Put this CDN in the head of document: 
```
<script src="https://cdn.firebase.com/js/client/2.4.2/firebase.js"></script>
```
3. Run a local server by typing this in your terminal: 
```
$ npm install -g serve
$ serve
```
4. In your terminal, type:
```
$ npm install firebase --save
```


##Challenges
Stack Overflow Questions
 1. http://stackoverflow.com/questions/35709940/issue-with-angular-services-with-broadcast-and-on
 2. http://stackoverflow.com/questions/35711048/issue-with-grabbing-a-flexible-id-from-get-request-and-pass-data-to-controller-i
The challenge has been addressed by pushing the recipe id into the recipe object in api.js. A for loop then iterates over all the responses from the api. There is a click event that then grabs the specific id from the for loop and the "deets" div shows the details of a recipe once the recipe has been clicked. 

##User Stories

 - As a user, I can add recipes to a list.
 - As a user, I can edit recipes in my list. 
 - As a user, I can delete recipes in my list. 
 - As a user, I can update recipes in my list. 
 - As a user, I can search recipes.
 - As a user, I can see details about a specific recipe.
