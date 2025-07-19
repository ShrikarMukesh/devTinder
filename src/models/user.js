const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
        firstName: {
            type: String,
            required: true,
            minlength: 2, // Ensure first name has a minimum length
            maxlength: 50 // Ensure first name has a maximum length
        },
        lastName: {
            type: String
        },
        emailId: {
            type: String,
            lowercase: true, // Ensure email is stored in the lowercase
            required: true, // Ensure email is required
            unique: true, // Ensure email is unique
            trim: true, // Trim whitespace from the email
            //npm i validator
            validate(value) {
               if (!validator.isEmail(value)) {
                    throw new Error("Invalid Email format");
                }
            }
        },
        password: {
            type: String,
            required: true,
            //npm i validator
            validate(value) {
                if (!validator.isStrongPassword(value)) {
                    throw new Error("Password must be at least 8 characters long, contain at least 1 uppercase letter, " +
                        "1 lowercase letter, 1 number and 1 special character");
                }
            }
        },
        age: {
            type: Number,
            min: 18, // Ensure age is at least 18
        },
        gender: {
            type: String,
            validate(value) {
                if (!["male", "female", "others"].includes(value)) {
                    throw new Error("Invalid Gender type");
                }
            }
        },
        photoUrl: {
            type: String,
            default: "https://geographyandyou.com/images/user-profile.png",
            validate(value) {
                if (!validator.isURL(value)){
                    throw new Error("Invalid URL format for photoUrl");
                }
            }
        },
        about: {
            type: String,
            default: "This is a default about a user"
        },
        skills: {
            type: [String] // Array of strings to hold multiple skills
        },
    },
    {
        timestamps: true // Automatically add createdAt and updatedAt fields
    })

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;