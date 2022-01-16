const http=require("http");

const server=http.createServer((req,res) =>{
        
    if(req.url == '/'){
        res.end("Welocme to the Home Page");
    }
    else if(req.url =='/aboutus')
    {
         res.end("Company Information");
    }
    else if(req.url=='/contectus')
    {
          res.end("Contact information ");
    }
    else{
          res.writeHead(404,{"Contect-type":"type/html"});
          res.end("<h1>404 Something went to Wrong");
    }
});

server.listen(7000,"127.0.0.1",()=>{
    console.log("Listern Port no is 7000");
});