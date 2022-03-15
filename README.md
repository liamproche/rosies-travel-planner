# unit-2-project
APP DESCRIPTION


This travel planning app will allow users to save their bucket-list destinations and use an API call to tell them the airfare cost for dates that they specify to each of their destinations. Stretch social integration so users can see destinations others (friends???? people they follow???) have created. 


MODELS

#USER
    #-username
    #-display name? Want to see "Steven Luu" not "stevenluu566" [does not have to be unique]
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
#TRIP INDEX PAGE [1/7]
    -World map showing user destinations

#TRIP SHOW FORM TO CREATE [2/7]
    #-Renders form to create trip

#TRIP CREATE ROUTE(POST) [3/7]
    #-Create the actual trip  
    #-Redirects to user show page  

#TRIP SHOW PAGE [4/7]
    #-The show page of a specific trip
    -Lists price of current trip
    -Possible addition of more information
    #-Links to login or create new user

#TRIP SHOW FORM TO EDIT PAGE [5/7]
    #-Show form to edit trip

TRIP EDIT ROUTE [6/7]
    -Edits the trip, dates, layovers

#TRIP DELETE ROUTE [7/7]
    #-Deletes the trip

#USER INDEX ROUTE [1/7]
    #-Show form to login in

#USER SHOW FORM TO CREATE NEW USER ROUTE [2/7]
    #-Renders form to create new user
    #-Redirect to user show page

#USER CREATE ROUTE(POST) [3/7]
    #-Creates the user
    #-Routes to their user show page

#USER SHOW PAGE [4/7]
    #-Lists all trips from user  <--Needs testing after trips added
    -Lists prices of all trips from user <--Stretch goal
    #-Has option to create new trip
    -Has option to delete a trip <--Add after trips routes created
    -Has option to edit a trip <--Add after trips routes created
    #-Has logout option
    #-Has option to edit a user

#USER SHOW FORM TO EDIT PAGE [5/7]
    #-Show form to edit user

#USER EDIT ROUTE [6/7]
    #-Edits the user

#USER DELETE ROUTE [7/7]
    #-Deletes the User

EJS TEMPLATES
    USERS
        #CREATE USER FORM
            #-Field for username
            #-Field for Name (display)
            #-Field for password
            -Field to confirm password?
            #-Field for departure city
            #-POSTS Create user on submit
        
        #LOGIN-FORM
            #-Field for username(required)
            #-Field for password(required)
            #-Button to new user show form
            #-POSTS to users/login page to login

        #EDIT FORM
            -Field to change username?
            #-Field to change display name
            #-Field to change password <--Tricky... Will require middle-ware with bcrypt
            -Field to confirm password change?
            #-Field to change departure city
            #-Field to change depature date <--Still not sure this should be included in user data, maybe trip?
            #-Field to change return date <-- ""
            #-Button to delete user
    
    TRIPS
        #TRIPS INDEX PAGE
            #-Shows all trips created by every user
            #-Log-in Button
            #-Create new user button
        
        TRIPS SHOW PAGE
            #-Shows all information about a trip created by any user
            #-Button back to trips index page
        
        #EDIT FORM
            #-Field to edit destination city
            #-Field to edit destination country
            #-Submit button
        
        #CREATE TRIP FORM
            #-Field for destination country
            #-Field for destination city
            #-Submit form button


TASK ASSIGNMENT
LIAM- HTML EJS Models, user routes
MICHAEL - CSS [grid / FlexBox], trip routes
LUTHER - API and bootstrap
STEVEN- Backend JS jquery middleware


MVP CHECK
    #-Working full-stack application, built by our team using Node.js, Mongoose, Express and EJS
    #-Adhere to MVC file structure
    #-At least one non-user model with all 7 RESTful routes and full CRUD
    #-A User model with functioning registration, log-in and log-out abilities
    #-Your non-user model is connected to the user that created it
    #-A git repository not inside the class repo
    -At least 1 GitHub commit & push per day
    -Be deployed online and accessible to the public via Heroku
    -A README.md file with a link to your hosted app, explanations of the technologies used, the approach was taken, unsolved problems, user stories, and notes to yourself so you can come back to your project later in the course and be able to pick up your train of thought, etc


#KNOWN ISSUES
    #-Edit and delete does not update user trip array


TO DO?
    #-Figure out error on delete route
    #-Only user that created trip should be able to edit/delete trip?
    -Move dates out of User and into user show page
    -Partials? (Nav)?
    -Server deployment?
    -Message to users when creating fails validation?
    -Messages to users if they pick a duplicate user name?
    -Nav changes from log-in/create account to actual nav?
    -Password security measures?
    -Gray out calendar days that have passed
    -State/region field on trips?
    -Front-end?
  
    
STRETCH GOALS

FUNCTION NEEDS
    -API data on flight price
        -POSSIBLE API'S
            -AeroDataBox [ 20/month ]
                -prob wont go with this one
                -Enthusiast-driven and flight data API suitable for smaller travel, or aviation applications, researchers, small teams, and individual developers.
                -https://rapidapi.com/aedbx-aedbx/api/aerodatabox/

            -Compare Flight Prices [ 1/minute ]
                -this one looks okay 
                -searches multiple flight companies
                -https://rapidapi.com/obryan-software-obryan-software-default/api/compare-flight-prices/pricing

    -GoogleMaps API???
    -log in redirect opens in new tab


POSSIBLE THINGS TO ADD TO TRIP MODEL
    -Restaurants they want to visit
    -Cultural events


ADDITIONAL STRETCH GOALS
    -Social Media integration [shows trending destinations and/or friends saved destinations]
    -Allow users to sign-in through google
    -like feature to know what is trending


SOCIAL MEDIA INTEGRATION IDEAS (Stretch goal)
    -Index page world map with pins of various trending destinations
    -Users can checkout trips from other users and add trips that other users create



NOTES
*Flight rater API- budgets out which of your trips and what the overall cost of each trip will be
Early afternoon- 2pm daily check-ins


DATES SEARCH PSEUDO-CODE
Overall goal:
    -User enters dates that they have free, program makes an API call on flight prices for all destinations for the user created trips (or should this be all trips anyone has created?). Program reurns list of trips sorted by price for the dates the user has specified

Pseudo-Coding
    -Get dates user entered from input fields
    -Puts dates into API call search parameters?  <--dependent on how API takes search parameters
    -Loops through users trips array to determine destination
    -Pushes destinations into a new array for API search parameters <--dependent on how API takes search parameters
    -Puts destinations in users trips into search parameters for API call
    -Makes API call
    -Somehow ties lowest flight price to user trip
    -Displays the flight price next to the user trip on the users show page
    

GOOGLE MAPS PSEUDO CODE
Overall goal:
    -Takes all destinations in trip db and displays a world map with flags of every destination displayed on the map




        



