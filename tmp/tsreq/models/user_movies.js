var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Status;
(function (Status) {
    Status[Status["WATCHED"] = 0] = "WATCHED";
    Status[Status["SKIPPED"] = 1] = "SKIPPED";
    Status[Status["CANCELLED"] = 2] = "CANCELLED";
})(Status || (Status = {}));
;
//create the schema
var UserMoviesSchema = new Schema({
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
        type: Status
    },
    city: {
        type: String
    },
    zipcode: {
        type: String
    }
});
//create the model based on schema
var user_movies = mongoose.model("user_movies", UserMoviesSchema);
module.exports = user_movies;
