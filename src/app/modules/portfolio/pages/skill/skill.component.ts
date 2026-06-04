import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  downloadMyFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/images/MasudAhmed.pdf');
    link.setAttribute('download', `MasudAhmed.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
}
}
