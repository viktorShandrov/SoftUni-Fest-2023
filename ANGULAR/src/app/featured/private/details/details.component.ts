import { AfterViewInit, Component, OnInit } from '@angular/core';
import { constants } from '../../../shared/constants';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsService } from '../../services/details.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../shared/services/user.service';
import { RouterService } from '../../../core/services/router.service';
import { CreateService } from '../../services/create.service';
import { switchMap } from 'rxjs';
import { StripeService } from 'ngx-stripe';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private Router: Router,
    private http: HttpClient,
    private DetailsService: DetailsService,
    public UserService: UserService,
    private ToastrService: ToastrService,
    private CreateService: CreateService,
    private RouterService: RouterService,
    private stripeService: StripeService
  ) {}
  currentOffer: any = {};

  redirectToEdit() {
    this.CreateService.offer = this.currentOffer;
    this.Router.navigate(['/createOffer'], { queryParams: { edit: 'true' } });
  }
  delete(id: string) {
    this.DetailsService.delete(id).subscribe(
      (res) => {
        this.ToastrService.success('Successfully deleted', 'Happy message');
        this.Router.navigate(['/profile']);
      },
      (error) => {
        this.ToastrService.error(error.message, 'Error');
      }
    );
  }
  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      const id = params['id']; // 'id' should match the parameter name in your route configuration
      console.log("offer id", id)
      this.DetailsService.getOffer(id).subscribe(
        (res: any) => {
          this.currentOffer = res.offer;
        },
        (error) => {
          this.ToastrService.error(error.message, 'Error');
        }
      );
    });
  }

<<<<<<< Updated upstream

  checkout(currentOffer:any) {
    // Check the server.js tab to see an example implementation
    this.http.post('api/stripe/create-checkout-session', {name:currentOffer.name,price:currentOffer.price})
=======
  checkout() {
    // Check the server.js tab to see an example implementation
    this.http
      .post('api/stripe/create-checkout-session', {})
>>>>>>> Stashed changes
      .pipe(
        switchMap((session: any) => {
          return this.stripeService.redirectToCheckout({
            sessionId: session.id,
          });
        })
      )
      .subscribe((result: any) => {
        // If `redirectToCheckout` fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using `error.message`.
        if (result.error) {
          alert(result.error.message);
        }
      });
  }
}
