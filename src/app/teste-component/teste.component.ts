import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild
} from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { debounce } from "rxjs/operators";

@Component({
  selector: "teste",
  templateUrl: "./teste.component.html",
  styleUrls: ["./teste.component.css"]
})
export class TesteComponent implements OnInit, AfterViewInit {
  @ViewChild("button")
  button: ElementRef<HTMLInputElement>;
  people: any[] = [
    {
      id: 10,
      name: "Vanderson"
    },

    {
      id: 11,
      name: "Sônia"
    },
    {
      id: 1,
      name: "Antônia"
    },
    {
      id: 3,
      name: "Caroline"
    },
    {
      id: 2,
      name: "Everton"
    }
  ];

  filterName(person: { id: number; name: string }) {
    const nameAllowed = ["Vanderson", "Caroline", "Everton"];

    return nameAllowed.indexOf(person.name) > -1 ? true : false;
  }

  showType(event: Event) {
    this.eventType = event;
    console.log(event);
  }

  eventType: any;
  inputText: string;

  constructor(private modalService: NgbModal,
    private elementRef: ElementRef
  ) {}
  ngAfterViewInit(): void {
    const button = this.elementRef.nativeElement.getElementsByTagName('button');
    console.log(button);
    console.log(this.elementRef)
    console.log(this.elementRef.nativeElement.querySelectorAll('[name*=nome]'))
    
  }

  ngOnInit() {}

  trackByI(i: number, item) {
    return item.nome;
  }

  key(event) {}
}
