import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {
  private user = {
	  name: "Andrew Yang",
	  picture: "assets/images/andrew.jpeg",
	  title: "ddvkid@gmail.com"
	};

  constructor() {}

  getCurrentUser(): Observable<any> {
    return Observable.of(this.user);
  }
}
