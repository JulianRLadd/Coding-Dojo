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
    constructor(private _httpService: HttpService){}
    // ngOnInit will run when the component is initialized, after the constructor method.
    ngOnInit(){
      this.tasks = [];
    }
    onClickShow(task:any): void{
      console.log(`Showing details of selected task...`,task)
      task.completed = true;
    }
    onButtonClick(): void { 
      console.log(`Getting all tasks...`);
      this.getTasksFromService();
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

