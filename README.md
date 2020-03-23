### Overall Score : 4/5
#### Attempted Problems : 3
#### Pushing : Consistent
#### General Comments : Great work Charles!
# React Day 3 CW
### Since we had an unexpected half day all students will receive a 4/5 if an assignment will all necessary components created as submitted on time. The final point will be added on if the app meets requirements. 
### Looks like you aren't referencing the Album component from the Favorites components. You should be passing the whole array to the movies component and mapping in that component not in favorites 
### Score : 3/5

#### Looks like you nested your new react app inside of your old one...don't do that. Otherwise looks great!

Create a react app called `user-media-favorites-app`. Create a class based component called `Favorites`. In the `Favorites` component render `<h1> This is a list of your favorite movies and albums</h1>` and two child components `Movies` and `Albums`. In the `Favorites` component prompt the user to enter their favorite movie, then prompt the user to enter their second favorite movie. Store both movies in a movie array and pass this array to the child component  `Movies`. Also prompt the user for the favorite album and their second favorite album. Store both albums in an album array and pass this array the the child component `Album`. In each child component print the message `Child component mounted` using a lifecylce method. Also iterate through the passed arrays rendering each element as an h3 tag. Display the `Movies` component and `Albums` component side by side.