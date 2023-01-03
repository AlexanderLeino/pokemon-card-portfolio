const axios = require('axios')
require('dotenv').config()

module.exports = {
    findCard: async (req, res) => {
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
    }
}