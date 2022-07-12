import connect from '../../../configs/database-connect'

export const all = (callback) => {
    return connect.query("SELECT client_id, client_name, updated_at FROM clients WHERE deleted_at IS NULL", [], callback)
}