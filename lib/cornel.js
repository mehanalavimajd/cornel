const replace=require("./replace");
const cornel = (data)=>{
    return function (req,res,next) {
        let s = String(data);
        s = replace(s,":url:",req.url);
        s = replace(s,":method:",req.method);
        s = replace(s,":date:",new Date().toString());
        s = replace(s,":date-iso:", new Date().toISOString());
        s = replace(s,":date-utc:" , new Date().toUTCString());
        s = replace(s,":http-version:",req.httpVersion);
        s = replace(s,":refferer:", req.headers.referer);
        s = replace(s, ":remote-addr:", req.ip || req.connection.remoteAddress)
        s = replace(s, ":status:" , res.statusCode);
        console.log(s);
        next();
    }
}
module.exports=cornel;