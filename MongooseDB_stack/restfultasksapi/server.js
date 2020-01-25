console.log("**********SERVER***********")


const express = require("express");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restfultasksapi_db', {useNewUrlParser: true});
const app = express();
app.use(express.json());

app.use(express.static( __dirname + '/public/dist/public' ));
const taskSchema = new mongoose.Schema({
    title: String,
    description: {type:String,  default:''},
    completed: {type:Boolean,  default:false}
    },{timestamps: true});
   // create an object that contains methods for mongoose to interface with MongoDB
    const Task = mongoose.model('Task', taskSchema);

app.get('/tasks', (req, res) => {  
	    Task.find()
	        .then(data => res.json({tasks: data}))
	        .catch(err => res.json(err));
    });
    
app.get('/tasks/:id', (req, res) => {  
	    Task.findOne({_id:req.params.id})
	        .then(data => res.json(data))
	        .catch(err => res.json(err));
	});

    app.post("/tasks", (req, res) => {
        const task = new Task(req.body);
        task.save()
          .then(data =>res.json(data))
          .catch(err => res.json(err));
    })

    app.put("/tasks/:id", (req, res) => {
        task = Task.findOne({_id:req.params.id})
            .then(task =>{
                task.title = req.body.title;
                task.description = req.body.description;
                task.completed = req.body.completed;
                return task.save();
        })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    })

    app.delete("/tasks/:id", (req, res) => {
        Task.deleteOne({_id:req.params.id})
          .then(data =>res.json(data))
          .catch(err => res.json(err));
    })



app.listen(8000, () => console.log("listening on port 8000"));
