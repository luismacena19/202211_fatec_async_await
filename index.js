require('dotenv').config()
// console.log(process.env.API_KEY) // remove this after you've confirmed it working
// const API_KEY = process.env.API_KEY
// const PROTOCOL = process.env.PROTOCOL
// const BASE_URL = process.env.BASE_URL
const axios = require ('axios')
const { APPID, BASE_URL, PROTOCOL, UNITS, LANGUAGE2} = process.env

const url = `${PROTOCOL}://${BASE_URL}?q=Itu&appid=${APPID}&lang=${LANGUAGE2}&units=${UNITS}`

axios.get(url)
.then(res => console.log(res))