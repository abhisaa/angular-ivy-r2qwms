import { NgModule } from '@angular/core';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EmpDataComponent } from './components/emp-data/emp-data.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

// import { MaterialModule, MATERIAL_SANITY_CHECKS } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    EmpDataComponent,
  ],
  providers: [
    {
      provide: MATERIAL_SANITY_CHECKS,
      useValue: false,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
