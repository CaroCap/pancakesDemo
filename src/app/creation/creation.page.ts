import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserPhoto } from '../pancake';
import { PancakeService } from '../services/pancake.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.page.html',
  styleUrls: ['./creation.page.scss'],
})
export class CreationPage implements OnInit {

  myPhoto: UserPhoto;

  constructor(private photoService:PhotoService, private pancakeService:PancakeService, private router:Router) { }

  ngOnInit() {
  }

  async onAddPicture(){
    this.myPhoto= await this.photoService.getNewPhoto();
  }

  onAddPancake(submittedForm:NgForm){
    if(submittedForm.valid){
      this.pancakeService.addPancake({
        name:submittedForm.value.leNom,
        descr:submittedForm.value.descr,
        photo:this.myPhoto
      });
      // console.log(this.pancakeService);
      // alert("crepe ok ?")
      this.router.navigateByUrl("/home");
    }
    else{
      alert("crepe... else");
    }
  }
}
