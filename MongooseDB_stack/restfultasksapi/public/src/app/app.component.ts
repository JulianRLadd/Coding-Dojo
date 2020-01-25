import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




// Implement OnInit.
export class AppComponent implements OnInit {
  tasks:[];
  snacks:string[];
  newTask: any;
  id: any;
  appear:boolean;
  edit:any;
    constructor(private _httpService: HttpService){}
    // ngOnInit will run when the component is initialized, after the constructor method.
    ngOnInit(){
      this.appear = false;
      this.tasks = [];
      this.newTask = { title: "", description: "" }
      this.getTasksFromService();
    }
    onClickEdit(task:any): void{
      this.appear = true;
      console.log(`Editing details of selected task...`,task.id)
      this.edit = task;
    }
    onClickDelete(id:any){
      console.log(`Deleting details of selected task...`,id)
      let observable = this._httpService.deleteTask(id);
      observable.subscribe(data => {
        console.log("Deleted tasks!", data)
        // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
        // This may be different for you, depending on how you set up your Task API.
        this.getTasksFromService();
      });
    }
    onButtonClick(): void { 
      console.log(`Getting all tasks...`);
      this.getTasksFromService();
  }
  onSubmit() {
    // Code to send off the form data (this.newTask) to the Service
    let observable = this._httpService.addTask(this.newTask);
      observable.subscribe(data => {
        console.log("Added tasks!", data)
        // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
        // This may be different for you, depending on how you set up your Task API.
        this.tasks = data['tasks'];
      });
    // Reset this.newTask to a new, clean object.
    this.newTask = { title: "", description: "" }
    this.getTasksFromService();
  }

  reSubmit(task:any) {
    let observable = this._httpService.updateTask(task);
      observable.subscribe(data => {
        console.log("Updated tasks!", data)
        // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
        // This may be different for you, depending on how you set up your Task API.
        this.appear = false;
        this.getTasksFromService();
      });
  }


    onButtonClickParam(num: Number): void { 
      console.log(`Click event is working with num param: ${num}`);
      // call the service's method to post the data, but make sure the data is bundled up in an object!
      let observable = this._httpService.postToServer({data: num});
      observable.subscribe(data => console.log("Got our data!", data));
  }

    getTasksFromService(){
      let observable = this._httpService.getTasks();
      observable.subscribe(data => {
        console.log("Got our tasks!", data)
        // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
        // This may be different for you, depending on how you set up your Task API.
        this.tasks = data['tasks'];
      });
    }

}

