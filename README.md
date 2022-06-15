<h1>Rosie's Travel Planner</h1>

<h2>App Description</h2>
<p>This travel planning helps users plan their bucket-list vacations. After creating an account, users can then create vacations which will be listed on their "My Trips" page. They can then assign activities to the specific vacation and check out vacations planned by others.</p>

<h2>Technologies Used</h2>
<ul>
    <li>HTML</li>
    <li>CSS</li> 
    <li>Javascript</li> 
    <li>Express.js</li>
    <li>Node.js</li> 
    <li>EJS Templates</li>
    <li>MongoDB</li>
    <li>Mongoose</li> 
    <li>Bootstrap</li>
</ul>

<h2>User Stories</h2>
<ul>
    <li>Main index page- Shows a world map and a list of trending destinations determined by overall hit count. Users must sign in to create account or view trips created by others</li>
    <li>User create an account- Pop-up modal, collects data for that model</li>
    <li>Create account- Post request to create user redirect to main index page with nav changed to allow users to access their trips. Viewing trips created by others now enabled.</li>
    <li>User goes to "My Trips" page, message saying "no trips created yet" for no trips, else lists trips.</li>
    <li>User clicks on trip (takes to trip show-page). Shows planned trip details</li>
</ul>

<h2>To-do</h2>
<ul>
    <li><s>World map shows all trip destinations, or trending?</s></li>
    <li>Additional fields to add to trip model:</li>
        <ul>
            <li>Restaurants they want to visit</li>
            <li>Cultural events</li>
            <li>Historical sites</li>
        </ul>
    <li>Additional Stretch Goals</li>
    <ul>
        <li>Social Media (incorporate friends feature)</li>
        <li>Allow users to sign-in through google</li>
        <li>Like feature to determine trending</li>
        <li>Allow users to add trip or activity created by other users to their page</li>
    </ul>

<h2>Link to Deployed App</h2>
<a href="https://rosies-travel-tracker-app.herokuapp.com/">https://rosies-travel-tracker-app.herokuapp.com/</a>

<h4>Team Assignments</h4>
<ul>
    <li>Liam- HTML EJS Models, user routes</li>
    <li>Michael- CSS [grid / FlexBox], trip routes</li>
    <li>Luther- API and bootstrap</li>
    <li>Steven- Backend JS jquery middleware</li>
</ul>

<h4>MVP Check</h4>
    <ul>
        <li><s>Working full-stack application, built by our team using Node.js, Mongoose, Express and EJS</s></li>
        <li><s>Adhere to MVC file structure</s></li>
        <li><s>At least one non-user model with all 7 RESTful routes and full CRUD</s></li>
        <li><s>A User model with functioning registration, log-in and log-out abilities</s></li>
        <li><s>Your non-user model is connected to the user that created it</s></li>
        <li><s>A git repository not inside the class repo</s></li>
        <li><s>At least 1 GitHub commit & push per day</s></li>
        <li><s>Be deployed online and accessible to the public via Heroku</s></li>
        <li><s>A README.md file with a link to your hosted app, explanations of the technologies used, the approach was taken, unsolved problems, user stories, and notes to yourself so you can come back to your project later in the course and be able to pick up your train of thought, etc</s></li>   