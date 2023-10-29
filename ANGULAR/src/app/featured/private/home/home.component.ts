import {AfterViewInit, Component} from '@angular/core';
import { ChartOptions } from 'chart.js';
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit{

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(
    private http:HttpClient,
    private ToastrService:ToastrService,
  ) {
  }
  ngAfterViewInit(){

    this.http.get("api/items/getTopOfferCategories").subscribe(
      (res:any)=>{
        const {categories} = res
        this.pieChartLabels = [categories[0][0],categories[1][0],categories[2][0]]
        this.pieChartDatasets =[
          {
            data:[categories[0][1],categories[1][1],categories[2][1]]

          }
        ]
      },
      error => {
        this.ToastrService.error(error.message, 'Error');

      }
    )


    const elementsToAnimate:any = document.querySelectorAll('.reviewC');

    const offset = 100; // Set the scroll offset when the animation triggers

    function checkScroll() {

      for (const elementToAnimateElement of elementsToAnimate) {
        const elementPosition = elementToAnimateElement!.getBoundingClientRect().top;
        if (elementPosition - window.innerHeight < offset) {
          // elementToAnimateElement!.style.transition = `opacity 10s ease;`
          elementToAnimateElement!.classList.add('animated');
        }
      }

    }

    window.addEventListener('scroll', checkScroll);
  }
}
