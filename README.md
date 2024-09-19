
## Prerequisites
- Node & npm
- PostgresSQL instance running 

## Getting Started


installion:

```
npm install
```

database setup:

create a database on local local Postgres instance and add it via your postgres connection string to the `.env` file
```
DATABASE_URL=""
```

run the migrations:
```
npx prisma migrate deploy
```
```
npx prisma generate
```

run the application

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### API docs
##### Bookings
Add API : POST -> [http://localhost:3000/api/bookings/add](http://localhost:3000/api/bookings/add)

fetch all API : GET -> [http://localhost:3000/api/bookings/all](http://localhost:3000/api/bookings/all)

##### Lead
Add API : POST -> [http://localhost:3000/api/leads/add](http://localhost:3000/api/leads/add)