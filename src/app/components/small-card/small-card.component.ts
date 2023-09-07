import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input()
  Id: string = '0'
  @Input()
  photoCard: string =""
  @Input()
  cardDescription: string ="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ex cupiditate impedit eius fugit consequuntur officiis,fugit consequuntur officiis."

}
