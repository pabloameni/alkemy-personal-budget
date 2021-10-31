# alkemy-personal-budget

Challenge from Alkemy for the Full-Stack JS developer. The objective is to develop an application for personal budget management.
Development of user's authentication and operations categorization is optional.

## Backend

The API must be developed in Node.js and the data be persisted in a relational database. This should expose URLs that return data in JSON.

### Backend Install

- cd alkemy-personal-budget/backend
- run SQL script for App's database initialization ( ie: *mysql -u root -p < src/databases/db-init.sql* )
- create variables or .env file with:

    NODE_PORT=*API listening port number*  
    DB_HOST=*Mysql listening hostname/IP*  
    DB_DATABASE=*App database name*  
    DB_USER=*Mysql connection-user*  
    DB_PASSWORD=*Mysql connection-user's password*  

- npm install
- npm start

## Frontend

Must display balance of incomes and outcomes and last ten operations. Also CRUD of operations, where each operations should have:

- Concept
- Amount
- Date
- User (optional)
- Category (optional)

### Frontend Install

- cd alkemy-personal-budget/frontend
- create variables or .env file with:

    REACT_APP_API_URL=*API listening URL (ie scheme://hostname or IP)*  
    REACT_APP_API_PORT=*API listening PORT*  
    REACT_APP_API_BASEPATH=*API base path*  

- npm install
- npm start
