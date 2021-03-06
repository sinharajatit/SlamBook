var mongoose = require('mongoose');

module.exports = mongoose.model('Slambookollection', {
    senderid :{type:String,default:''},
    recieverid :{type:String,default:''},
    recievermailid : {type:String,default:''},
    sendermailid : {type:String,default:''},
    name: { type: String, default: '' },
    address: { type: String, default: '' },
    phone: { type: String, default: '' },
    bday: { type: String, default: '' },
    zodiac: { type: String, default: '' },
    secret: { type: String, default: '' },
    crush: { type: String, default: '' },
    essential: { type: String, default: '' },
    greed: { type: String, default: '' },
    fav_movie: { type: String, default: '' },
    fav_actor_actresses: { type: String, default: '' },
    fav_festival: { type: String, default: '' },
    fav_website: { type: String, default: '' },
    fav_holiday_spot: { type: String, default: '' },
    memorable_moments: { type: String, default: '' },
    people_I_hate: { type: String, default: '' },
    fav_dance_tune: { type: String, default: '' },
    my_ideal: { type: String, default: '' },
    my_ambition: { type: String, default: '' },
    first_impression: { type: String, default: '' },
    things_about_me: { type: String, default: '' },
    annoying_habit: { type: String, default: '' },
    things_not_said_about_me: { type: String, default: '' },
    final_line: { type: String, default: '' },
    createdon:{type:Date,default:new Date()}
   
});


// var info=[{name:"Manish",
// add:"Delhi",
// phone:"7868686886",
// bday:"24-08-1990",
// zodiac:"capricorn",
// secret:"yet to be told",
// crush:"Ayesha Takia",
// essential:"Mobile",
// greed:"Money",
// earn:"Fame",
// fav_movie:"DDLJ",
// fav_actor_actresses:"Aliya Bhat",
// fav_festival:"Diwali",
// fav_website:"Amazon.com",
// fav_holiday_spot:"Miami",
// memorable_moments:"When India won the world Cup",
// people_I_hate:"My manager",
// fav_dance_tune:"Punjabi songs",
// my_ideal:"Rahul Dravid",
// my_ambition:"Become a good Coder",
// first_impression:"Not noticed",
// things_about_me:"too much to say",
// annoying_habit:"yet to be observed",
// things_not_said_about_me:"You are a good huam as well",
// final_line:"Guru tussi cha gaye"}]



