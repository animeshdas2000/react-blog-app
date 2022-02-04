const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")


router.get("/", (req, res) => {
  res.send("Auth Working");
});


//register route
router.post("/register", (req, res) => {
  const { name, email, password, phone_no } = req.body;
  if (!name || !email || !password || !phone_no) {
    return res.status(422).json({ error: "Fields cannot be empty" });
  }
  if (password.toString().length < 8) {
    return res
      .status(422)
      .json({ error: "Password should be 8 characters or more!" });
  }
  if (phone_no.toString().length != 10) {
    return res.status(422).json({ error: "Phone number should be 10 digits!" });
  }
  User.findOne({ email: email }).then((existUser) => {
    if (existUser) {
      return res.json({
        error: "User Exists with the Email! Try again with a different Email",
      });
    }
    bcrypt
      .hash(password, 10) //string salt can be used
      .then((passHash) => {
        const user = new User({
          name,
          email,
          password: passHash,
          phone_no,
        });

        user
          .save()
          .then(() => {
            res.json({ message: `User Registration Successful` });
          })
          .catch((err) => {
            console.log(err);
          });
      });
  })
  .catch(err=>{
      console.log(err)
  });
});

//login router
router.post('/login',(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
       return res.status(422).json({error:"Email or Password Missing"})
    }
    User.findOne({email:email})
        .then(savedUser=>{
        if(!savedUser){
           return res.status(422).json({error:"Invalid Email or password!"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(isEqual=>{
            if(isEqual){
                // res.json({message:"successfully signed in"})
               const token = jwt.sign({_id:savedUser._id},process.env.JWT_SECRET)
               const {_id,name,email} = savedUser
               res.json({token,user:{_id,name,email}})
            }
            else{
                return res.status(422).json({error:"Invalid Email or password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})
module.exports = router;
