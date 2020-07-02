1)	Download and install application:-

•	Install node modules by using below command
“npm install –save”
•	Once node modules installation completed then start the server by using below command.
“npm start”
•	It will automatically open the browser with the url :  http://localhost:3000/#/
•	Enter the below username and password:
Username :  demouser
Password :  Demo@123
Note : If you want to change username and password then change the      “src\config\Constants.ts” file.

2)	Session Storage usage in application:-

•	Once user successfully authenticated we are saving the user info (username and isAuthenticate = true) in the session storage.
•	When ever user navigate to the landing page and details page we are checking the isAuthenticate flag true then only navigate to the landing and details page.
•	If user is not authorized but able access the landing and details page by using urls then we can navigate to login page
•	Once user click on logout page then we are clear the session storage
