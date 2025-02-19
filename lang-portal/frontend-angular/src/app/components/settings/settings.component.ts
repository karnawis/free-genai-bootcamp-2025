import { Component } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  constructor(private settingsService: SettingsService) { }

  resetHistory(): void {
    this.settingsService.resetHistory().subscribe(() => {
      alert('History reset successfully');
    });
  }

  fullReset(): void {
    this.settingsService.fullReset().subscribe(() => {
      alert('Full reset successfully');
    });
  }
}
