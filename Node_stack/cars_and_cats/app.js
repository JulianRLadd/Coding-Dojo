const http = require('http');
const fs = require('fs');
const server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    
    // this is how we do routing:
    if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/cars/new') {
        fs.readFile('views/carsform.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if (request.url === "/stylesheets/stylecat.css") {
        fs.readFile('./stylesheets/stylecat.css', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/stylesheets/stylecar.css") {
        fs.readFile('./stylesheets/stylecar.css', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/stylesheets/form.css") {
        fs.readFile('./stylesheets/form.css', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/Node_stack/cars_and_cats/images/car6.jpg") {
        fs.readFile('./images/car6.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/Node_stack/cars_and_cats/images/cat1.jpg") {
        fs.readFile('./images/cat1.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/Node_stack/cars_and_cats/images/cat2.jpg") {
        fs.readFile('./images/cat2.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/Node_stack/cars_and_cats/images/cat3.png") {
        fs.readFile('./images/cat3.png', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'image/png'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/Node_stack/cars_and_cats/images/cat4.jpg") {
        fs.readFile('./images/cat4.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/Node_stack/cars_and_cats/images/cat5.jpg") {
        fs.readFile('./images/cat5.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/Node_stack/cars_and_cats/images/cat6.jpg") {
        fs.readFile('./images/cat6.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/Node_stack/cars_and_cats/images/car1.jpg") {
        fs.readFile('./images/car1.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/Node_stack/cars_and_cats/images/car2.jpg") {
        fs.readFile('./images/car2.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/Node_stack/cars_and_cats/images/car3.jpg") {
        fs.readFile('./images/car3.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/Node_stack/cars_and_cats/images/car4.jpg") {
        fs.readFile('./images/car4.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/Node_stack/cars_and_cats/images/car5.jpg") {
        fs.readFile('./images/car5.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
// request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");
