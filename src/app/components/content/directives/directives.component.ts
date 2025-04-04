import { Component } from '@angular/core';
import { Student } from './interfaces/interfaces.component';

@Component({
  selector: 'app-directives',
  standalone: false,
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  public students: Student[] = [
    {
      firstName: 'Pablo',
      surName: 'Jaise',
      present: 5,
      absent: 1,
      approvedExam: true,
    },
    {
      firstName: 'Lucía',
      surName: 'Gómez',
      present: 4,
      absent: 2,
      approvedExam: false,
    },
    {
      firstName: 'Martín',
      surName: 'Rodríguez',
      present: 6,
      absent: 0,
      approvedExam: true,
    },
    {
      firstName: 'Sofía',
      surName: 'Fernández',
      present: 3,
      absent: 3,
      approvedExam: false,
    },
    {
      firstName: 'Diego',
      surName: 'López',
      present: 5,
      absent: 1,
      approvedExam: true,
    },
    {
      firstName: 'Carla',
      surName: 'Pérez',
      present: 4,
      absent: 2,
      approvedExam: false,
    },
    {
      firstName: 'Javier',
      surName: 'Méndez',
      present: 2,
      absent: 4,
      approvedExam: false,
    },
    {
      firstName: 'Valentina',
      surName: 'Rossi',
      present: 6,
      absent: 0,
      approvedExam: true,
    },
    {
      firstName: 'Federico',
      surName: 'Sánchez',
      present: 3,
      absent: 3,
      approvedExam: false,
    },
    {
      firstName: 'Camila',
      surName: 'Torres',
      present: 5,
      absent: 1,
      approvedExam: true,
    },
    {
      firstName: 'Agustín',
      surName: 'Morales',
      present: 4,
      absent: 2,
      approvedExam: false,
    },
    {
      firstName: 'Elena',
      surName: 'García',
      present: 6,
      absent: 0,
      approvedExam: true,
    },
  ];
}
