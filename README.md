# unit-2-project
APP DESCRIPTION

This travel planning app will allow users to save their bucket-list destinations and use an API call to tell them the airfare cost for dates that they specify to each of their destinations. Stretch social integration so users can see destinations others (friends???? people they follow???) have created. 



MODELS

#USER
    #-username
    #+display name? Want to see "Steven Luu" not "stevenluu566" [does not have to be unique]
    #-password (curently a string min-length:8 maxlength:20) 
    #-Starting Location
    #-Date of departure- Needs to be stored in user model???
    #-Date of return (may not be a thing)- Needs to be stored in user model???
    #-Timestamp

#TRIP
    #-Destination
    #-Flight Price
    #-Timestamp
    -Additional Content:
    -resturants [or an API with local bars, must-gos, resturants]



USER STORY
    -Main index page- World map with no "pins". Message directing user to sign-in to view destinations or create an account to begin creating destinations
    -User create an account- Takes to create user form, collects data for that model
    -Create account- Post request to create user redirect to user show page (empty no destinations created)
    -User logs-in- Redirect to user show page which lists all destinations created by user and price for current airfare to destination
    -User clicks on trip (takes to trip show-page). Shows specific trip (Flight price)
    


    (Earlier option)
    Homepage> Map of destinations> Search city> See list of other users who have added trips there>


ROUTES
TRIP INDEX PAGE [1/7]
    -World map showing user destinations

TRIP SHOW FORM TO CREATE [2/7]
    -Renders form to create trip
    -Re-directs back to user show page

TRIP CREATE ROUTE(POST) [3/7]
    -Create the actual trip    

TRIP SHOW PAGE [4/7]
    -Lists price of current trip
    -Possible addition of more information

TRIP SHOW FORM TO EDIT PAGE [5/7]
    -Show form to edit trip

TRIP EDIT ROUTE [6/7]
    -Edits the trip, dates, layovers

TRIP DELETE ROUTE [7/7]
    -Deletes the trip

#USER INDEX ROUTE [1/7]
    #-Show form to login in

#USER SHOW FORM TO CREATE NEW USER ROUTE [2/7]
    #-Renders form to create new user
    #-Redirect to user show page

#USER CREATE ROUTE(POST) [3/7]
    #-Creates the user
    #-Routes to their user show page

USER SHOW PAGE [4/7]
    -Lists all trips from user
    -Lists prices of all trips from user
    -Has option to create new trip
    -Has option to delete a trip
    -Has option to edit a trip

USER SHOW FORM TO EDIT PAGE [5/7]
    -Show form to edit user


USER EDIT ROUTE [6/7]
    -Edits the user

USER DELETE ROUTE [7/7]
    -Deletes the User

EJS TEMPLATES
    USERS
        CREATE USER FORM
            -Field for username
            -Field for First Name
            -Field for Last Name
            -Field for email address
            -Field for password
            -Field to confirm password?
            -Field for departure city
            -POSTS Create user on submit
        
        LOGIN-FORM
            -Field for username(required)
            -Field for password(required)
            -Button to new user show form
            -POSTS to user index page to login

        EDIT FORM
            -Field to change username?
            -Field to change display name?
            -Field to change password?
            -Field to confirm password change?
            -Field to change departure city
            -Field to change depature date <--Still not sure this should be included in user data, maybe trip?
            -Field to change return date <-- ""
            -Button to delete user
    
    TRIPS


FUNCTION NEEDS
    -API data on flight price
    -GoogleMaps API???



STRETCH GOALS

POSSIBLE THINGS TO ADD TO USER MODEL
    -Restaurants they want to visit
    -Cultural events


ADDITIONAL STRETCH GOALS
    -Social Media integration [shows trending destinations and/or friends saved destinations]
    -Allow users to sign-in through google


SOCIAL MEDIA INTEGRATION IDEAS (Stretch goal)
    -Index page world map with pins of various trending destinations
    -Users can checkout trips from other users and add trips that other users create


TASK ASSIGNMENT

LIAM- HTML EJS Models, user routes


MICHAEL - CSS [grid / FlexBox], trip routes


LUTHER - API and bootstrap


STEVEN- Backend JS jquery middleware


NOTES
*Flight rater API- budgets out which of your trips and what the overall cost of each trip will be
Early afternoon- 2pm daily check-ins







