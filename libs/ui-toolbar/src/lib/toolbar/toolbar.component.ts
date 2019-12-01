import { Component, Input } from '@angular/core';

@Component({
  selector: 'workspace-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() links: any[];
  title = 'TodoIt!';
}
