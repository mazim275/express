import mongoose from "mongoose";

const userschema=new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    pass:{type:String}

});
export default mongoose.model.users || mongoose.model("users",userschema)