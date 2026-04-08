import { Component, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent implements OnInit {
  // Signals
  missions = signal<Mission[]>([]);
  isLoading = signal<boolean>(false);
  errorMessage = signal<string>('');
  selectedYear = signal<string>('');

  // Reactive Form Control
  yearControl = new FormControl('');

  launchYears: string[] = [
    '2006', '2007', '2008', '2009', '2010', '2011', '2012',
    '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'
  ];

  constructor(
    private spacexService: SpacexapiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // React to reactive form value changes
    this.yearControl.valueChanges.subscribe((year) => {
      if (year) {
        this.filterByYear(year);
      }
    });
  }

  filterByYear(year: string): void {
    this.selectedYear.set(year);
    this.isLoading.set(true);
    this.errorMessage.set('');
    this.missions.set([]);

    this.spacexService.getLaunchesByYear(year).subscribe({
      next: (data) => {
        this.missions.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.errorMessage.set('Failed to fetch missions for this year.');
        this.isLoading.set(false);
        console.error(err);
      }
    });
  }

  selectYear(year: string): void {
    this.yearControl.setValue(year);
  }

  viewDetails(mission: Mission): void {
    this.router.navigate(['/mission', mission.flight_number]);
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
