const axios = require('axios')
require('dotenv').config()
const User =  require('../models/User.js')
console.log('USER 123', User)
module.exports = {
    findUser: async (req, res) => {
    //     try {
    //         const options = {
    //             method: 'GET',
    //             url: 'https://unogsng.p.rapidapi.com/search',
    //             params: {genrelist: '1694', type: 'movie', limit: 5},
    //             headers: {
    //               'X-RapidAPI-Key': process.env.API_KEY,
    //               'X-RapidAPI-Host': 'unogsng.p.rapidapi.com'
    //             }
    //           };
    //         let response = await axios.request(options)
    //         console.log(response.data)
           
    //         res.status(200).send(response.data)
    //     } catch(e) {
    //         console.log(e)
    //     }
    // }
    console.log('hello World')
    },
    createUser: async ({body}, res) => {
        try {
            let {accountInfo: {userName, password, email}} = body
            console.log('userName', userName, 'password', password, 'email', email)
            let response = await User.create({userName, password, email})
            console.log('response', response)
            res.send(response).status(200)

        } catch(e) {
            console.log('An error occured!', e)
            res.send(e).status(400)
        }
    },
    login: async({body}, res) => {
        try {
            
        } catch(e) {
            console.log('An Error has Occurred', e)
            res.send(e).status(400)
        }
    }
}