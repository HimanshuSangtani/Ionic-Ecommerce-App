import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  constructor(private user:UsersService,private router:Router) { }

  ngOnInit() {}

  register(form) {
    this.user.postUsers(form.value).subscribe((res) => {
      alert("Details Saved Successfully!!")
      form.reset();
      this.router.navigateByUrl('home');
    });
  }
}
