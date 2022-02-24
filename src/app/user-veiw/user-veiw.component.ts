import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-veiw',
  templateUrl: './user-veiw.component.html',
  styleUrls: ['./user-veiw.component.css']
})
export class UserVeiwComponent implements OnInit {
  
  id: any
  user: any
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.user=new User();
    this.userService.getUserById(this.id).subscribe(data =>{
      this.user=data;
      
    })
  }

}
