import mongoose from 'mongoose'



mongoose.connect("mongodb://localhost/companydb", {
    //useNewUrlParser: true, // <- deprecated
    // useUnifiedTopology: true, // <- deprecated
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err))