# Shop API

# Knowledge Cover

- Node.js (Express.js)
- JavaScript
- Rest API
- PostgreSQL
- Sequelize ORM
- CRUD Operation
- APIs Authorization (JWT)
- CORS
- Error handling

# How to use

## 1. Clone Project into your local machine
```
git clone https://github.com/SerhiiNikif/store-pg-express.git
```

## 2. Go into project folder

```
cd store-pg-express
```

## 3. Setting environment file .env.
Create an `.env` file in the root of the project and fill it with the values ​​from the `.env.sample` file.
```
PORT=5000
DB_NAME=store_pg_express
DB_USER=postgres
DB_PASSWORD=<password>
DB_HOST=localhost
DB_PORT=5432
SECRET_KEY=random_secret_key123
```

## 4. Start project

```
npm run dev
```

## 5. Play with APIs now !
Now, you are ready to test all APIs.
Just simply open your browser http://localhost:5000/ping.

# APIs Authorization
When calling these protected APIs, make sure you add %BearerToken% in `Authorization` request Header.

```
Authorization: Bearer <accessToken>
```

### How to get accessToken ?

When user login sucessfully, an unique accessToken will be returned.