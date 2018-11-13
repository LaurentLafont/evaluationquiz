import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuizComponent } from './quiz/quiz.component';
import { ScoreComponent } from './score/score.component';
import { TimerComponent } from './timer/timer.component';

import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import{ RouterModule, Routes} from '@angular/router';
import { QuizService } from './quiz.service';

const routes: Routes = [
  {path: '' ,component:QuizComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ScoreComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
