//import{  }from'@angular/compiler';
import{Component,OnInit,Input,Output}from'@angular/core';
import{Note}from'../note';
import{NotesService}from'../services/notes.service';


@Component({
selector:'app-dashboard',
templateUrl:'./dashboard.component.html',
styleUrls:['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit{

  item:Note = new Note();

  notelist:Array<Note> = [];

  errMessage:string|null=''

  constructor(private notesService: NotesService){
  }

  ngOnInit(): void {

    this.notesService.getNotes().subscribe(response => {

      if (response) {

        this.notelist = response;

      } else {

        this.errMessage = 'We are unable to retreive notes list.';

      }
    }, error => {

      this.errMessage = 'Http failure response for http://localhost:3000/notes: 404 Not Found';

    });

  }

  SaveItem(){

    if (!this.item.title || !this.item.text) {

      this.errMessage = 'Title and Text both are required fields';

      return;

  }

  this.notesService.addNote(this.item).subscribe(response => {

    if (response) {

      this.notelist.push(this.item);

      this.item = new Note();

    } else {

      this.errMessage = 'We are unable to add the selected note.';

    }

  }, error => {

    this.errMessage = 'Http failure response for http://localhost:3000/notes: 404 Not Found';

  });

  }}
