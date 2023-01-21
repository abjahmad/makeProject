import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skill',
  templateUrl: './my-skill.component.html',
  styleUrls: ['./my-skill.component.css']
})
export class MySkillComponent implements OnInit {

  codingSkill: any = [];

  DesignSkill:any = [];

  constructor() { }

  ngOnInit(): void {

    this.codingSkill = [
      {skill:'JavaScript', value:86},
      {skill:'Java', value:66},
      {skill:'HTML + CSS', value:80},
      {skill:'Angular', value:16}
    ];

    this.DesignSkill= [
      {skill:'UI / UX Design', value:92},
      {skill:'Web Design',value:99},
      {skill:'Logo Design',value:79}
    ];




  }

}
