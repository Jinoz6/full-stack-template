import connect from '../../../configs/database-connect'

export const getUserDetailsByEmail = (email, callback) => {
    return connect.query("SELECT * FROM users where email = ?", [email], callback)
}

export const createUser = (email, pass, callback) => {
    return connect.query("INSERT INTO users (email, password) VALUES (?,?)", [email, pass], callback)
}