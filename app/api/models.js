var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    birthday: {
        type: Date
    },
    gender: {
        type: String,
        validate: {
            validator: function (value) {
                return (value == "m" || value == "f");
            },
            message: '{VALUE} is not valid for gender'
        }
    },
    picture: {
        type: String
    },
    hometown: {
        type: String
    },
    interests: {
        type: [String]
    }
});

var User = mongoose.model("Users", UserSchema);

var PubSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        requried: true
    },
    place: {
        street: {
            type: String,
            requried: true
        },
        postcode: {
            type: String,
            required: true
        },
        town: {
            type: String,
            required: true
        }
    },
    openings: {
        type: [String],
        requried: true
    },
    menu: {
        type: String,
        required: true
    },
    sky: {
        type: boolean
    }
});

var Pub = mongoose.model("Pubs", PubSchema);

module.exports = export = {
    User,
    Pub
}