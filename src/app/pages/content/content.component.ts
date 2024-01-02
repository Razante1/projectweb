import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  contentPhoto:string = ''

  @Input()
  contentTitle:string = ''

  @Input()
  contentDescription:string = '' 
  
  private id:string | null = '0' 
  constructor(
    private route:ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.SetValuesToComponent(this.id)
  }
  SetValuesToComponent(id:string | null) {
    const result = dataFake.filter(
                                  article => article.id.toString() == id) [0]
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.contentPhoto = result.photo
  } 
}
