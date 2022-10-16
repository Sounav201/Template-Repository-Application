import {Pool , Client} from "pg";

const connectionString = process.env.POSTGRES_URL;

const pool = new Pool({
    connectionString
})

let conn = new Pool({
    connectionString
})

export default conn;
