# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application
The goal of this application is to help bakers find recipes given their dietary restrictions and the time they have available to bake. It is
valuable to users because the ability to filter and sort recipes by these features will make it easier for them to find recipes that interest them and fit whatever time constraints and/or dietary restrictions they might have. 

### Usability Principles Considered 
One of the usability features that I included is adding an alt text to all of my images, so the app can be used by people with screen readers (and also in case the images don't load). I also decided to use a blue color scheme to make it accessible for anyone who might be color blind. Additionally, I chose to use decently large text and bold the key words to make it more readable.

### Organization of Components
In addition to the App, I have 2 other components: BakeryItem and FavList. For props, BakeryItem takes in an item (from bakeryData) and the handleInput function, which adds items to the favorites list when a corresponding button is clicked. In terms of state, in App the filtering and sorting of the data both rely on the use of state (and the setters corresponding to which filter or sorting function is being used set these states). Then the current state of the filter/sort determines which items from bakeryData actually show up as bakeryItems as well as in what order they appear. The second component, FavList,  

### How Data is Passed Down Through Components
Data is passed down through the components via props (or, in my case, directly as the arguments because, rather than do 
const ComponentName = (props)
I did 
const ComponentName = ({param1, param2})
(A TA in hours told me to do this because it can be more intuitive than just passing in props)

### How the User Triggers State Changes
There are 4 ways that the user can trigger changes in state. First, they can click one of the radio buttons that determines how the data is filtered (thus changing the state of the constant "type). They can also click one of the radio buttons that determines how the data is filtered (thus changing the state of the constant "sort). If the user clicks the "Add to Favorites," it will change the state of the favList constant, adding the name and time of the clicked on item to the list. 

