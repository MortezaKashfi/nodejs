var fs = require('fs');
var num = process.argv[3];
var name = process.argv[2];
for(i=1;i<=num;i++){
    fs.mkdir(name+i,()=>{

    });
}
