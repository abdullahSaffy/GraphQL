const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async() => {

    const url = process.env.MONGODB_URL || 'mongodb+srv://graphql:graphql@cluster0.p1msm.mongodb.net/graphql?retryWrites=true&w=majority'

    try {
        await mongoose.connect(url).then(() => {
            console.log('mongodb connected successfully'.cyan.underline.bold);
        }).catch(err => {
            console.log('err', err)
        })

    } catch (err) {
        console.log('err', err);
        return err;
    }
}

module.exports = connectDB;