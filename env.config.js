export const key = process.env.KEY || 'secret'

export const database = {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PWD || "",
    database: process.env.DB_NAME || "test_db"
}