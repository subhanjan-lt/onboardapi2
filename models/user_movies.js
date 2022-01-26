const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create the schema
const UserMoviesSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    }, 
    user_id: {
        type: Schema.Types.ObjectId,
        required: [true, "user_id is required"]
    },
    booked_at: {
        type: Date
    },
    status: {
        type: String,
        enum: {
            values: ['WATCHED', 'SKIPPED', 'CANCELLED'],
            message: '{VALUE} is not supported'
        }
    },
    city: {
        type: String
    },
    zipcode: {
        type: String
    }
});

//create the model based on schema
const user_movies = mongoose.model("user_movies", UserMoviesSchema);

module.exports = user_movies;