# What Carb Backend

The original version of this app was created before I attended the Northcoders Software Development Bootcamp.

The old data was kept in a static json file with no ability to update/add or delete recipes.

Now for the updated version!

Built with Express.js and Mongoose. 

I wanted to use MongoDB as I felt it would be quick and easy to set up, plus the recipes were already held as objects, so seeding the database would be relatively quick.
Which it was. MongoDB was surprisingly quick to setup. I did however have a few little challenges when things got hosted as I had to make sure I put the frontend hosted ipaddress onto the databases whitelist.

The frontend code exists here - https://github.com/jamesyuill/what-carb-react

Feel free to clone this repo and run 'npm install'
