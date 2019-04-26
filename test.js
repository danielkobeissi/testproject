var fs=require('fs');

fs.writeFile(__dirname+"/index.html","<h1>Test project</h1>",function(error) {
if(error){
return console.log(error);
}else{
return console.log("Congratsg the file was create")
}	
})