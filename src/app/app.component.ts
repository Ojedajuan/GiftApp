import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';
import { ResultadosComponent } from './gifs/resultados/resultados.component';
import { GifsService } from './gifs/services/gifs.service';
import { SidebarComponent } from "./shared/side-bar/side-bar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GifsModule, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GifsService],  
})
export class AppComponent {
  title = 'giftApp';
}
