const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    fname:String,
    lname:String,
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:String,
    cpassword:String,
    number:Number,
    address:[{
        fname:String,
        lname:String,
        housename:String,
        city:String,
        state:String,
        pin:Number,
        country:String
    }],
    access:{
        type:Boolean,
        default:true 
    },
    cart: {
        type: mongoose.Types.ObjectId,
        ref: "Cart",
      },
    wishlist:{
        type:mongoose.Types.ObjectId,
        ref:"Wishlist",
    },
    orders:[{
        type:mongoose.Types.ObjectId,
        ref:"Orders",
    },
    ],
    couponsUsed:[{
        type:mongoose.Types.ObjectId,
        ref:"Coupon",
    },
    ]

},{timestamps:true});
const Users=mongoose.model('User',userSchema)

module.exports =Users;
