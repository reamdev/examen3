import { dbConnection } from '../index'

const clientsSchema = new dbConnection.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  direction: String,
  phone: Number,
})

export default dbConnection.model('clients', clientsSchema);