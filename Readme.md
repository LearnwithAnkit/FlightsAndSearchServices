#Welcome to Flights Service

## Project Setup

-clone the project on your local
-Execute `npm install` on the same path of your root directory of the downloaded project
-Create a .env file in root directory and add the following enivironment variables -`Port=3000`
-Inside the `src/config` folder create a new File `config.json` and then add the following piece of json
'''
{
"development": {
"username": "your db login name",
"password": "your db password",
"database": "Flight_Search_DB_DEV",
"host": "127.0.0.1",
"dialect": "mysql"
},
}
'''

/
File Structure
-src/
index.js //server
models/
controllers/
middlewares/
services/
utils/
config/
/repository
-tests/[Later]
