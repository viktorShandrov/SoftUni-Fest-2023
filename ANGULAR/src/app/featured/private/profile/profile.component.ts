import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  businessman = {
    company: 'alibaba',
    name: 'Viktor Pantov',
    offers: [
      {
        name: 'the coolest offer',
        description: 'this is just an offer about the SoftUni Fest.',
        price: 15,
      },
      {
        name: 'the coolest offer',
        description: 'this is just an offer about the SoftUni Fest.',
        price: 15,
      },
      {
        name: 'the coolest offer',
        description: 'this is just an offer about the SoftUni Fest.',
        price: 15,
      },
      {
        name: 'the coolest offer',
        description: 'this is just an offer about the SoftUni Fest.',
        price: 15,
      },
      {
        name: 'the coolest offer',
        description: 'this is just an offer about the SoftUni Fest.',
        price: 15,
      },
      {
        name: 'the coolest offer',
        description: 'this is just an offer about the SoftUni Fest.',
        price: 15,
      },
    ],
  };
}
