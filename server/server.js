const mongoose=require('mongoose');
const express=require('express');
const app=express();
const dotenv=require('dotenv').config();
const jwtSecret="Navi"
const jwt=require('jsonwebtoken');
const User=require('./models/User.js');
mongoose.set('strictQuery', false);
app.use(express.json());


const cors=require('cors');
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World");
})
mongoose.connect("mongodb+srv://navisenthilnadhan:KbgnFcE4O3U5S371@placeshub.7xq2ub4.mongodb.net",{useNewUrlParser:true})
.then(()=>{
    console.log('MongoDB Connected');
}).catch((err)=>{
    console.log(err);

})


// KbgnFcE4O3U5S371
app.post('/register',(req,res)=>{
    console.log(req.body); 
        console.log(req.body);
        console.log(req.body.name);
        const {name,email,password}=req.body;
        
    
        console.log(name);
        
       
        const user=new User({
            name:name,
            email:email,
            password:password,
            
        })
        res.json(user)
        user.save();
        // console.log(user);
        console.log("User Saved")
    })
    
    app.post('/login',async (req,res)=>{
        const {email,password}=req.body;
        const user=await User.findOne({email:email});
        if(user){
            if(user.password===password){
                // res.json(user);
                // jwt.sign({email:user.email,id:user._id},jwtSecret,{},()=>{
                //     if(err){
                //         console.log(err);
                //         throw err;
                //     }else{
                //         res.cookie('token',token).json('pass ok');
                        
                //     }
                // });
                // res.cookie('user',user);
                // console.log('User Logged In');
                jwt.sign({
                    email:user.email,
                    id:user._id
                  }, jwtSecret, {}, (err,token) => {
                    if (err) throw err;
                    res.cookie('token', token).json(user);
                    console.log(user);
                    console.log("Cookie Set");
                  });
                } else {
                  res.status(422).json('pass not ok');
                }
            }
            
            else{
                res.json({error:'Password is incorrect'});
                console.log('Password is incorrect');
            }
        }
      
    
    )
    
    app.post('/login', async (req,res) => {
        mongoose.connect("mongodb+srv://navisenthilnadhan:KbgnFcE4O3U5S371@placeshub.7xq2ub4.mongodb.net");
        const {email,password} = req.body;
        const userDoc = await User.findOne({email});
        if (userDoc) {
          const passOk = bcrypt.compareSync(password, userDoc.password);
          if (passOk) {
            jwt.sign({
              email:userDoc.email,
              id:userDoc._id,
              name:userDoc.name
            }, jwtSecret, {}, (err,token) => {
              if (err) throw err;
              res.cookie('token', token).json(userDoc);
            });
          } else {
            res.status(422).json('pass not ok');
          }
        } else {
          res.json('not found');
        }
      });
      
    
      app.get('/profile',async (req,res)=>{
        const {token}=req.cookies;
        if (token) {
          jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err;
            const user = await User.findById(userData.id);
            res.json(user)
            // res.json({name,email,_id});
          });
        } else {
          res.json('not found');
        }
      });
    
    
      app.post('/logout',(req,res)=>{
        res.cookie('token','').json(true);
      })
    


app.listen(5000,(req,res)=>{
    console.log('server is running on port 5000');
});