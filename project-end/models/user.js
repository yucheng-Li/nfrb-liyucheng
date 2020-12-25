
const mongoose = require('mongoose');
// 数据库连接
mongoose.connect('mongodb://localhost/nfrb_project', { useNewUrlParser: true})
	// 连接成功
	.then(() => console.log('数据库连接成功'))
	// 连接失败
	.catch(err => console.log(err, '数据库连接失败'));
var Schema = mongoose.Schema

var userSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    sex:{
        type:String,
        required:true
    },
    nation:{
        type:String,
        required:true
    },
    bodynumber:{
        type:String,
        required:true
    },
    birthnumber:{
        type:String,
        required:true
    },
    school:{
        type:String,
        required:true
    },
    education:{
        type:String,
        required:true
    },
    peopletype:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    inDate:{
        type:String,
        required:true
    },
    outDate:{
        type:String,
        required:true
    },
    identity:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    doornumber:{
        type:String,
        required:true
    },
    interperson1:{
        type:String,
        required:true
    },
    interperson2:{
        type:String,
        required:true
    },
    nowDate:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('User', userSchema)


