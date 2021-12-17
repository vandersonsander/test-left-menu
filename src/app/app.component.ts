import { Component, EventEmitter, Input, OnInit, VERSION } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}

  name = "Angular " + VERSION.major;
}
