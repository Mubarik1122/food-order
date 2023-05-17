import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent {
  @Input() visible:Boolean = false;
  @Input() notFoundmassage:string = 'Page Not Found!';
  @Input() resetLinkText:string = 'Reset';
  @Input() resetLinkRoute:string = '/';

}
