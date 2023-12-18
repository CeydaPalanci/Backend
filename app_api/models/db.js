var mongoose=require("mongoose");
var dbURI = 'mongodb://localhost/mekabul';
mongoose.connect(dbURI);
mongoose.connection.on("connected",function(){
    console.log(dbURI+"adresindeki veritabanına bağlandı");
});
mongoose.connection.on("error",function(){
    console.log("bağlantı sağlanamadı");
});
mongoose.connection.on("disconnected",function(){
    console.log("bağlantı kesildi");
});

process.on("SIGINT",function () {
    mongoose.connection.close();
    console.log("bağlantı kapatıldı");
    process.exit(0);
});

require("./venue");



