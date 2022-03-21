# unit-2-project
APP DESCRIPTION

This travel planning helps users plan their bucket-list vacations. After creating an account, users can then create vacations which will be listed on their "My Trips" page. They can then assign activities to the specific vacation and check out vacations planned by others. 


USER STORY
    -Main index page- Shows a world map and a list of trending destinations determined by overall hit count. Users must sign in to create account or view trips created by others
    -User create an account- Pop-up modal, collects data for that model
    -Create account- Post request to create user redirect to main index page with nav changed to allow users to access their trips. Viewing trips created by others now enabled.
    -User goes to "My Trips" page, message saying "no trips created yet" for no trips, else lists trips.
    -User clicks on trip (takes to trip show-page). Shows planned trip details


TECHNOLOGIES USED
HTML, CSS, Javascript, Express.js, Node.js, EJS Templates, MongoDB, Mongoose, Bootstrap
 

TEAM ASSIGNMENTS
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
    #-At least 1 GitHub commit & push per day
    #-Be deployed online and accessible to the public via Heroku
    #-A README.md file with a link to your hosted app, explanations of the technologies used, the approach was taken, unsolved problems, user stories, and notes to yourself so you can come back to your project later in the course and be able to pick up your train of thought, etc


TO DO
    -World map shows all trip destinations, or trending?
    
    NEXT THINGS TO ADD TO TRIP MODEL
        -Restaurants they want to visit
        -Cultural events
        -Historical sites

    ADDITIONAL STRETCH GOALS
        -Social Media (incorporate friends feature)
        -Allow users to sign-in through google
        -Like feature to determine trending
        -Allow users to add trip or activity created by other users to their page


API NOTES
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


LINK TO DEPLOYED APP:
https://rosies-travel-tracker-app.herokuapp.com/