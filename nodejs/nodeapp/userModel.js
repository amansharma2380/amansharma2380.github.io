import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{type:String},
    email:{type:String, unique: true},
    password:{type:String},
    role:{type:String, default: "user"},
},{timestamps: true}
);

const userModel = mongoose.model("User",userSchema);

export  default mongoose.model("User",userSchema);