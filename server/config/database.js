const mongoose=require('mongoose')

const connectDatabase=()=>{
    mongoose.connect("mongodb+srv://Shubhamy:21jumlcpBeAHUxbx@cluster0.ywnqbfq.mongodb.net/Tensech",{useNewUrlParser:true,useUnifiedTopology:true
    }).then((data)=>{
            console.log(`mongodb connected with server ${data.connection.host}`);
        });
}
module.exports=connectDatabase