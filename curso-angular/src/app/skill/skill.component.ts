import { Component, OnInit } from '@angular/core';
import { SkillMatrixService } from '../services/skill-matrix.service';

@Component({
    selector: 'skill',
    templateUrl: 'skill.component.html'
})

export class SkillComponent implements OnInit {
    public title:string = 'Skill Categories';
    public listSkillCategories: any = [];
    constructor(private _skillMatrixService:SkillMatrixService) { }

    ngOnInit() {
        this.getData();
     }

    public getData() {
        this._skillMatrixService.get("http://localhost:5000/api/skillcategories").subscribe(res => {
            this.listSkillCategories = (JSON.stringify(res));
        })
    }
}