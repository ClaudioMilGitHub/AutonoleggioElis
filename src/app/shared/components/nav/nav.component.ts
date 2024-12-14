import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {AuthService} from "../../../auth/services/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  user: User;
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.user = this.authService.userDecoded;
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('');
  }
}
