
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShowCaseService {

  constructor() { }

  getDataApi(): Observable<any> {
    //TODO: Aqui podemos hacer http.get('api...')
    const data = [
      {
        name: "Pudgy Penguin #1",
        price: 0.2,
        image: "/assets/img/penguin-1.jpeg"
      },
      {
        name: "Pudgy Penguin #2",
        price: 0.1,
        image: "/assets/img/penguin-2.jpeg"
      },
      {
        name: "Pudgy Penguin #3",
        price: 0.3,
        image: "/assets/img/penguin-3.jpeg"
      },
      {
        name: "Pudgy Penguin #4",
        price: 0.4,
        image: "/assets/img/penguin-4.jpeg"
      },
      {
        name: "Pudgy Penguin #5",
        price: 0.5,
        image: "/assets/img/penguin-5.jpeg"
      },
      {
        name: "Pudgy Penguin #6",
        price: 0.6,
        image: "/assets/img/penguin-6.jpeg"
      },
      {
        name: "Pudgy Penguin #7",
        price: 0.7,
        image: "/assets/img/penguin-7.jpeg"
      },
      {
        name: "Pudgy Penguin #8",
        price: 0.8,
        image: "/assets/img/penguin-8.jpeg"
      },
      {
        name: "Pudgy Penguin #9",
        price: 0.9,
        image: "/assets/img/penguin-9.jpeg"
      },
      {
        name: "Pudgy Penguin #10",
        price: 0.9,
        image: "/assets/img/penguin-10.jpeg"
      },
      {
        name: "Pudgy Penguin #11",
        price: 0.9,
        image: "/assets/img/penguin-11.jpeg"
      },
      {
        name: "Pudgy Penguin #12",
        price: 0.9,
        image: "/assets/img/penguin-12.jpeg"
      }
    ]

    return of(data).pipe(
      delay(1500)
    )
  }
}
