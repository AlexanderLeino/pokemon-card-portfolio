const mongoose = require('mongoose')
const Schema = mongoose.Schema

const validateEmail = (string) => {
    console.log("Validating this eamil string", string)
    const regex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
    let result = regex.test(string)
    return result
}

let custom = [validateEmail, 'Please try again. Invalid Email.']

const UserSchema = new Schema({
    userName: {
        type: String,
        maxlength: 15,
        unique: true,
        required: [true, 'Please Create A Unique Username'],
    },
    password: {
        type: String, 
        required: [true,'A Password is required']

    },
    firstName: {
        type: String,
    }, 
    lastName: {
        type: String,
    },
    email: {
        type: String,
        validate: custom,
    }
})

const User = mongoose.model('User', UserSchema)


module.exports = User