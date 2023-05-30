# Welcome to Flights Service

## Project Setup

- clone the project on your local
- Execute `npm install` on the same path of your root directory of the downloaded project
- Create a .env file in root directory and add the following enivironment variables - `Port=3000`
- Inside the `src/config` folder create a new File `config.json` and then add the following piece of json

```
{
"development": {
"username": "your db login name",
"password": "your db password",
"database": "Flight_Search_DB_DEV",
"host": "127.0.0.1",
"dialect": "mysql"
},
}
```

- Once you have added your db config as listed above, go to the src folder from your terminal and execute `npx seuqelize db:create`

## DB Design

      - Airplane Table
      - Flight
      - Airport
      - City

- A flight belongs to an airplane but one airplane can be used in multiple flights.
- A city has many airports but one airport belong to a city.
- One airport can have many flights, but a flight belongs to one airport.

## Airplane Table

      - id
      - model_number
      - capacity
      - created_at
      - updated_at

## Flight Table

      - id
      - src_airport_id
      - dest_airport_id
      - departure_date
      - arrival date
      - departure_time
      - arrival_time

## City Table

      - id
      - name

## Airport

      - id
      - name
      - city_id
      - address

## File Structure :

- src/
  - index.js //server
  - models/
  - controllers/
  - middlewares/
  - services/
  - utils/
  - config/
  - /repository
- tests/[Later]
