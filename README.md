# unit-2-project
APP DESCRIPTION


This travel planning app will allow users to save their bucket-list destinations and use an API call to tell them the airfare cost for dates that they specify to each of their destinations. Stretch social integration so users can see destinations others (friends???? people they follow???) have created. 


MODELS

#TRIP
    -Additional Content:
        -Activities?


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
    -World map shows user destinations

#TRIP SHOW FORM TO CREATE [2/7]

#TRIP CREATE ROUTE(POST) [3/7]
 
#TRIP SHOW PAGE [4/7]
    -Lists price of current trip <-- Stretch goal
    -Possible addition of more information

#TRIP SHOW FORM TO EDIT PAGE [5/7]

#TRIP EDIT ROUTE [6/7]

#TRIP DELETE ROUTE [7/7]

#USER INDEX ROUTE [1/7]

#USER SHOW FORM TO CREATE NEW USER ROUTE [2/7]

#USER CREATE ROUTE(POST) [3/7]

#USER SHOW PAGE [4/7]
    -Lists prices of all trips from user <--Stretch goal

#USER SHOW FORM TO EDIT PAGE [5/7]

#USER EDIT ROUTE [6/7]

#USER DELETE ROUTE [7/7]

EJS TEMPLATES
    USERS
        #CREATE USER FORM
            -Field to confirm password?
        
        #LOGIN-FORM

        #EDIT FORM
            -Field to confirm password change?
    
    
    TRIPS
        #TRIPS INDEX PAGE
        
        TRIPS SHOW PAGE
        
        #EDIT FORM

        #CREATE TRIP FORM


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
    #-Be deployed online and accessible to the public via Heroku
    -A README.md file with a link to your hosted app, explanations of the technologies used, the approach was taken, unsolved problems, user stories, and notes to yourself so you can come back to your project later in the course and be able to pick up your train of thought, etc


KNOWN ISSUES
    #-Edit and delete does not update user trip array
    -Does Departure City need to be on create user now?
    -Nav sometimes on user show page <--- Can't figure out where this happens
    -Nav shows link to page user is already on


TO DO?
    -Meet to discuss and wireframe Front-end
    -Google places API?
  
    
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

    -log in redirect opens in new tab <-- or modal?


POSSIBLE THINGS TO ADD TO TRIP MODEL
    -Activities
    -Restaurants they want to visit
    -Cultural events
    -Historical sites


ADDITIONAL STRETCH GOALS
    -Social Media integration [shows trending destinations and/or friends saved destinations]
    -Allow users to sign-in through google
    -like feature to know what is trending
    -allow users to add trip other created to their page


SOCIAL MEDIA INTEGRATION IDEAS (Stretch goal)
    -Index page world map with pins of various trending destinations
    -Users can checkout trips from other users and add trips that other users create


NOTES
*Flight rater API- budgets out which of your trips and what the overall cost of each trip will be
Early afternoon- 2pm daily check-ins


NIX FOR NOW!!!!!!
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
    #-Take the 3 trips with the highest number of clicks and display their locations on a map generated by a google maps API call.
    #-Drop down auto-fill for city and country



LINK TO DEPLOYED APP:
https://rosies-travel-tracker-app.herokuapp.com/