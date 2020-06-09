import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ApicallsService } from '../services/apicalls.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  constructor(private http: HttpClient, private _formBuilder: FormBuilder, private api: ApicallsService) { }
  showStepper = false;
  isEditable = true;
  loading = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  patients: Object;

  ngOnInit(): void {
    this.loading = true;
    this.api.getData("covidPatients").subscribe((allPatients) => {
      this.patients = allPatients;
      console.log(allPatients)
      this.loading = false;

    });

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ''
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ''
    });

  }

  toggleStepper(){
    this.showStepper = !this.showStepper;
  }

  addPatient(){
    console.log(this.firstFormGroup.value);
    this.loading = true;
    this.showStepper = false;
    var patient = {
      "emergencycontact": "",
      "firstname": this.firstFormGroup.value.firstCtrl,
      "lastname": this.secondFormGroup.value.secondCtrl,
      "roomnb": 0
    };
    this.api.postData("covidPatients", patient).subscribe(response => {
      console.log(response); 
      this.api.getData("covidPatients").subscribe((allPatients) => this.patients = allPatients);
      this.loading = false;
    });
  }

  deletePatient(userID){
    console.log(userID)
    this.api.deleteData("covidPatients", userID).subscribe((response) => {
      console.log(response);
      this.api.getData("covidPatients").subscribe((allPatients) => this.patients = allPatients);
    });
  }

  deleteAllPatients(){
    this.loading = true;
    this.api.deleteData("covidPatients", "").subscribe((response) => {
      console.log(response);
      this.api.getData("covidPatients").subscribe((allPatients) => this.patients = allPatients);
      this.loading = false;
    });
  }

}
