import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReviewService } from '../shared/review.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  hotel: Array<any>;
  roomtype: Array<any>;
  province: String;
  user: string = '';
  inputComment: string = '';
  inputProblem: string = '';
  select: any = {
    hotelNameSelect: '',
    provinceNameSelect: '',
    roomtypeSelected: ''
  }
  inputEmail: String;
  inputreservationId: String;
  inputRoomType: String;
  inputHotelNameEng: String ;
  scoreSelect: number = 0;

  constructor(private router: Router,private route: ActivatedRoute,private reviewService: ReviewService, private httpClient: HttpClient) { 
    this.inputEmail = this.route.snapshot.paramMap.get('inputMemberUserName');
    this.inputreservationId = this.route.snapshot.paramMap.get('selectReservationId');
    this.inputRoomType = this.route.snapshot.paramMap.get('selectRoomType');
    this.inputHotelNameEng = this.route.snapshot.paramMap.get('selectHotelNameEng');
    console.log(this.inputEmail);
    console.log(this.inputreservationId);
    console.log(this.inputRoomType);
    console.log(this.inputHotelNameEng);

  }
  ngOnInit() {
    this.reviewService.getProvinceName(this.inputHotelNameEng).subscribe(data => {
      this.province = data.provinceEntity.provinceName;
      console.log(data.provinceEntity.provinceName);
    });

    this.reviewService.getHotelNameEng().subscribe(data => {
      this.hotel = data;
      console.log(data.hotelNameEng);
    });
  }
  scoreroom1: any = {
    scoreSelect: 0
  }
  scoreroom2: any = {
    scoreSelect: 0
  }
  scoreroom3: any = {
    scoreSelect: 0
  }
  scoresecu1: any = {
    scoreSelect: 0
  }
  scoresecu2: any = {
    scoreSelect: 0
  }
  scoresecu3: any = {
    scoreSelect: 0
  }
  scoreservice1: any = {
    scoreSelect: 0
  }
  scoreservice2: any = {
    scoreSelect: 0
  }
  scoreservice3: any = {
    scoreSelect: 0
  }
  add() {
    console.log(this.inputComment);
    console.log(this.inputProblem);
    console.log(this.scoreservice1.scoreSelect);
    console.log(this.scoreservice2.scoreSelect);
    console.log(this.scoreservice3.scoreSelect);
    console.log(this.scoreroom1.scoreSelect);
    console.log(this.scoreroom2.scoreSelect);
    console.log(this.scoreroom3.scoreSelect);
    console.log(this.scoresecu1.scoreSelect);
    console.log(this.scoresecu2.scoreSelect);
    console.log(this.scoresecu3.scoreSelect);
    console.log(this.inputHotelNameEng);
    console.log(this.inputreservationId);
    console.log(this.inputEmail);
    console.log(this.inputRoomType);
    console.log("add");
    this.httpClient.get('http://localhost:8080/review/createreview/' + this.inputEmail + '/' + this.inputreservationId + '/' + this.inputHotelNameEng+ '/' + this.inputRoomType + '/' + this.inputComment + '/' + this.inputProblem + '/' + this.scoreservice1.scoreSelect + '/' + this.scoreservice2.scoreSelect + '/' + this.scoreservice3.scoreSelect
      + '/' + this.scoreroom1.scoreSelect + '/' + this.scoreroom2.scoreSelect + '/' + this.scoreroom3.scoreSelect + '/' + this.scoresecu1.scoreSelect + '/' + this.scoresecu2.scoreSelect + '/' + this.scoresecu3.scoreSelect, this.select)
      .subscribe(
        data => {
          alert("Save Sucess!!!!");
          console.log('PUT Request is successful', data);

        },
        error => {
          console.log('Error', error);
        }
      );
  }
}
