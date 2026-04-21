import mongoose,{Schema,Document} from "mongoose";

export interface Message extends Document{
    content : string;
    createdAt : Date;
}

const MessageSchema : Schema<Message> = new Schema({
    content : {
        type : String,
        required:true
    },
    createdAt:{
        type: Date,
        required : true,
        default : Date.now
    }
})


export interface User extends Document{
    username : string;
    email : string;
    password:string;
    verifyCode:string;
    verifyCodeExpiry:Date;
    isVerified:boolean;
    isAcceptingMessage:boolean;
    messages:Message[];
}

const UserSchema : Schema<User> = new Schema({
    username : {
        type : String,
        required:[true,"Username is Required !!"],
        trim:true,
        unique:true
    },
    email:{
        type: String,
        required : [true, "Email is Required !!"],
        unique: true,
        match : [/.+\@.+\..+/,'Please use a valid email address !!']
    },
    password:{
        type: String,
        required : [true, "Password is Required !!"],
    },
    verifyCode:{
        type: String,
        required : [true, "Verify Code is Required !!"],
    },
    verifyCodeExpiry:{
        type: Date,
        required : [true, "Verify Code Expiry is Required !!"],
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    isAcceptingMessage:{
        type: Boolean,
        default: true
    },
    messages: [MessageSchema]

}) 


// Check already model created or not, if yes then return this else create model. Next js run on edge so it's server not always run , so I need to handel both cases.

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User",UserSchema)

export default UserModel;