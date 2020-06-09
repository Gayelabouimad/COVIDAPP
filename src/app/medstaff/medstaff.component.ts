import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ApicallsService } from '../services/apicalls.service';

@Component({
  selector: 'app-medstaff',
  templateUrl: './medstaff.component.html',
  styleUrls: ['./medstaff.component.scss']
})
export class MedstaffComponent implements OnInit {
  loading = false;
  showStepper = false;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = true;

  staff: any;

  constructor(private api: ApicallsService, private http: HttpClient, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.loading = true;
    this.api.getData("hospitalStaffs").subscribe((allStaff) => {
      this.staff = allStaff._embedded.hospitalStaffs;
      console.log("----------", allStaff._embedded.hospitalStaffs)
      this.loading = false;

    });

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: '',
      secondCtrl: '',
      thirdCtrl: ''

    });
    this.secondFormGroup = this._formBuilder.group({
      fourthCtrl: '',
      fifthCtrl: '',
    });

  }

  toggleStepper(){
    this.showStepper = !this.showStepper;
  }

  addDoc(){
    var doc = {
      "firstname": this.firstFormGroup.value.firstCtrl,
      "lastname": this.firstFormGroup.value.secondCtrl,
      "department": this.firstFormGroup.value.thirdCtrl,
      "position": this.secondFormGroup.value.fourthCtrl,
      "salary": Number(this.secondFormGroup.value.fifthCtrl)
    };
    console.log(doc);
    this.loading = true;

    this.api.postData("hospitalStaffs", doc).subscribe((response) => {
        console.log(response); 
        this.api.getData("hospitalStaffs").subscribe((allStaff) => {
          this.staff = allStaff._embedded.hospitalStaffs;
          console.log(allStaff)
          this.loading = false;
        });
      })
  }

  deleteDoc(id: any){
    console.log(id);
    this.api.deleteData("hospitalStaffs", id).subscribe((response) => {
      console.log(response);
      this.api.getData("hospitalStaffs").subscribe((allStaff) => {
        this.staff = allStaff._embedded.hospitalStaffs;
        this.loading = false;
      });
    });
  }

  deleteAllStaff(){
    this.loading = true;
    this.api.deleteData("staff", "").subscribe((response) => {
      console.log(response);
      this.api.getData("hospitalStaffs").subscribe((resp) => {
        this.staff = [];
        this.loading = false;
      });
      this.loading = false;
    });
  }

}
