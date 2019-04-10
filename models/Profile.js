// PROFILE MODEL

// To create a  model 
// we will  have bring in mongoose ;
// then from that we will take a Schema classs
// with that schema we will create a scheama , for specific profileSchema 


const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId, // make relation with user
    ref: 'users'
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  company: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  githubusername: { 
    type: String
  },

 
});

const Profile = mongoose.model('profile', profileSchema); // creat model


module.exports = Profile;