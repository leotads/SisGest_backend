'use strict';

require('dotenv').config({
  path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env.developer'
});

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: 'postgres',
  define: {
    timestamps: true
  }
}