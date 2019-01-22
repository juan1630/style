import { Component, OnInit, OnChanges, DoCheck,AfterContentInit ,AfterContentChecked, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'miselaneos';

  constructor(){ 
    console.log("Constructor")
   }

   ngOnChanges(){
    console.log("ngOnChanges")
 }

   ngOnInit(){
     console.log("ngOnInit")
   }
   ngDoCheck(){
      console.log("ngDoCheck");
   }
   ngAfterContentInit(){
     console.log("ngAfterContentInit")
   }

   ngAfterContentChecked(){
     console.log("ngAfterContentChecked")
   }
   ngAfterViewInit(){
     console.log("ngAfterViewInit");
   }

   ngAfterViewChecked(){
     console.log("ngAfterViewChecked")
   }

   ngOnDestroy(){
     console.log("ngOnDestroy")
   }
}
