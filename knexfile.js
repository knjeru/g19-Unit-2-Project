module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/pet_app'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
