const { Pool } = require("pg");

const connectionString = process.env.CONNECTION;

module.exports = new Pool({ connectionString: connectionString });
