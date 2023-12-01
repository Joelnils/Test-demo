import { Blog } from "../types"

const sql = require('mssql')
const sqlConfig = {
    user: "sa",
    password: "Hej123!!!",
    database: "Blog",
    server: 'localhost',
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: true, // for azure
      trustServerCertificate: true // change to true for local dev / self-signed certs
    }
  }

const stringAsPromise = async () => "hej";

export const GetBlogs = async () : Promise<Blog[]> => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect(sqlConfig)
        const result = await sql.query`SELECT * FROM Blogs`
        return result.recordset as Blog[];
    } catch (err) {
        console.error('Det blev fel', err);
        throw err;
        // ... error checks
    }
}