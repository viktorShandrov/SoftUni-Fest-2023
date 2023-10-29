import { AfterViewInit, Component } from '@angular/core';
import { HttpService } from '../../../shared/services/http.service';
import { ToastrService } from 'ngx-toastr';
import { CatalogService } from '../../services/catalog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements AfterViewInit {
  picPaths = [
    '/assets/service.png',
    './assets/service1.png',
    './assets/service2.png',
    './assets/service3.png',
    './assets/service4.png',
    './assets/service5.png',
  ];
  constructor(
    private HttpService: HttpService,
    private ToastrService: ToastrService,
    private Router: Router,
    public CatalogService: CatalogService
  ) {}
  randomNum() {
    return Math.floor(Math.random() * 6);
  }
  ngAfterViewInit() {
    this.HttpService.getRequest('api/users/getAllBusinessman').subscribe(
      (res: any) => {
        console.log(res);
        this.CatalogService.businessmen = res.users;
        console.log(this.CatalogService.businessmen);
        this.CatalogService.showAllResults();
      },
      (error) => {
        this.ToastrService.error(error.message, 'Error');
      }
    );
  }
  showProfile(id: string) {
    this.Router.navigate([`/profile/${id}`]);
  }
}
