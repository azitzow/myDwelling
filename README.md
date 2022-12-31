# My Dwelling
## Video Demo: 

https://user-images.githubusercontent.com/82430080/202046138-180760ab-a5e7-4d2e-8836-5b00ff36e45c.mov

## Description:
<p> My Dwelling is a SPA(Single-page application) that allows you to track your property's preventative maintenance their due dates and costs. </p> 

<p> 
  A little bit about the process on how I came up with this idea. I wanted to come up with something that can help me solve a problem for me and something that can be helpful to others. I am not sure how many people actually know the amount of maintenance a home requires. My husband and I sure didn't. As a newly married couple we made one of our biggest financial decisions of our lives by buying our first home together. 
</p>

<p> 
  As this idea came to me I needed to think about what will this application do for users. So here are the user stories I came up with.
</p>

#### User will be able to:
<ul> 
  <li>Index/Show/Create/patch/delete a property</li>
  <li>User can create an account</li>
  <li>User can login and logout of their account</li>
  <li>User can create a property and view recommended maintenance to their property so that they can track them</li>
  <li>User can create custom maintenance for their property and mark it as completed</li>
  <li>Have a schedule/calendar where users can keep track of the maintenance due dates. They will be able to add their next due date in the calendar as a reminder</li>
  <li>Save and delete an inspection on the property and track any or all expenses related to the property</li>
  <li>User will be able to track all the listed expenses cost and of each of their maintenance</li>
</ul>

### Additional Research and Development Phase User Stories or To Do List
#### TO DO:
<ul>
  <li>- [x] Deploy to Heroku </li>
  <li>- [x] Implement authentication/authorization, including password protection. A user should be able to log in to the site with a secure password and stay logged in via user ID in the session hash.</li>
  <li>- [x] Use a Rails API backend with a React frontend.</li>
  <li>- [x] Have at least three different client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes.</li>
  <li>- [x] Use a Rails API backend with a React frontend.</li>
    
  <li> [x] Have at least three models on the backend, that include: </li>
    <ul>
      <li>- [x] at least one many-to-many relationship </li>
      <li>- [x] at least one many through relationship </li>
      <li>- [x] full CRUD actions for at least one resource </li>
      <li>- [x] at least one one-to-many relationship </li>
    </ul>
</ul>

#### Models and Associations:
<p>
Users: <li> has_many :properties
        has_many :property_maintenance, through: :maintenance 
        has_many :projects, through: :properties
        has_many :costs, through: :properties </li>

Properties: <li> belongs_to user, 
             has_many :property_maintenances, through: :maintenances 
             has_many :inspections, through: :user 
             has_many projects, through: :user </li>

Maintenances: <li> has_many users, 
               has_many :Properties </li>

Property Maintenance: <li> belongs_to :properties
                       belongs_to :maintenances
 (might not need this one if I use the User Property Maintenance instead) </li>

Inspections: <li> has_many :properties, through: :user 
              has_many :user </li>
</p>
##### Diagram Image:

![My Dwelling Model Associations](https://user-images.githubusercontent.com/82430080/210021021-bf5e4668-f116-4c7d-bd22-c767e548a901.png)

<li> You can find the original diagram here: https://dbdiagram.io/d/62f13cb3c2d9cf52fa6a073f </li>
<li> You can find the wireframes here: https://www.figma.com/file/RJDpnv6OIQp8D1dz8jbnML/MyDwellings-App?node-id=2%3A47&t=k38QN4I7xTM82sH5-0 </li>

##### Home page wireframe:

![My Dwelling Homepage](https://user-images.githubusercontent.com/82430080/210102203-b935d0c6-229c-4a03-9514-8a6a57ecd374.png)


## App Features
<ul>
  <li>
    Programmed React-big-calendar to allow users to schedule and track property maintenance projects and recurring activities.
  </li>
  <li>
    Developed JavaScript/React front-end and Rails/Active Record/Postgres back-end to seamlessly integrate app components.
  </li>
  <li>
     Implemented Design Thinking methodology to develop UI and UX design strategy that provides a seamless user experience while navigating the application.
  </li>
</ul>

#### Stretch Goals:
1. Send reminders to the user via text/email or both, regarding maintenance that is due.
2. Send a quarterly email about the current costs per property.
3. Send users a yearly cost per property maintenance, based on the recommended maintenance and their custom maintenance. 

