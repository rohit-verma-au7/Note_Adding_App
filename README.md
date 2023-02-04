# Note_Adding_App

Note adding full stack app, ReactJS, Nodejs, MySql

### First Go to client by cd .\client\

Go to client by using above code in terminal of your code
Then npm install

### Go to Server side by cd.. then cd .\server\

Go to server Side and run npm install on terminal

## Important Steps to follow for Databse (MySQL)

1. Go To MySQL workbench
2. Create a notes schema
3. Now INSIDE notes schema, go to tables and right click on that, select create table field
4. Create table "notestable"
5. Inside that table, create 3 fields - 1)id - autoincrement,primary key, not null int 2) title - varchar(50) not null 3)notescol - varchar(255) not null
6. Your database configuration is ready

### Inside backend

Go to index.js
Config mysql.createconnection file accordind to your settings
Backend Is also ready for use
Test all API routes in postman
