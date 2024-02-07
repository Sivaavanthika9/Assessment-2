import { Component } from '@angular/core';
import { GadgetsService } from '../shared/gadgets.service';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gadgets',
  templateUrl: './gadgets.component.html',
  styleUrl: './gadgets.component.scss'
})
export class GadgetsComponent {
  gadget:any=[];
  searchForm!: FormGroup;
  constructor(public gadgetApi:GadgetsService,private router:Router,private fb:FormBuilder){}
  ngOnInit(){
    this.loadGadgets();
    this.searchForm=this.fb.group({
      searchText:[]
    })
  }
  loadGadgets(){
    return this.gadgetApi.getGadgets().subscribe((data:{})=>{
      this.gadget=data
    });
  }
  edit(id:number)
  {
    console.log('hi')
    this.router.navigate(['edit-gadgets/'+id])
  }
  deleteGadget(id:any){
    if(window.confirm('are you sure,you want to delete?')){
      this.gadgetApi.deleteGadget(id).subscribe((data)=>{
        this.loadGadgets();
      });
    }
  }

  onSearchTextChange(event:any){
    console.log('event fired');
   
    this.searchForm.controls['searchText'].valueChanges
    .pipe(debounceTime(500))
    .subscribe(()=> {
      console.log('HAI');
     
      if(this.searchForm.controls['searchText'].value.length > 2){
        const searchedBooks = this.gadget?.filter((b:any) => b.name.toLowerCase().startsWith(event.target.value))
        console.log('searchedBooks', searchedBooks);
        this.gadget = searchedBooks;
      }
      if(this.searchForm.controls['searchText'].value.length == 0){
        this.gadget =this.loadGadgets();
      }
    })
  }

}
