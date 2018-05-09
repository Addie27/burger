console.log('this is loaded');

exports.dotenv = ({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  })