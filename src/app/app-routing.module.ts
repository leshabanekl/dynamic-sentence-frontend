import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllSentencesComponent } from './pages/all-sentences/all-sentences.component';
import { NewSentenceComponent } from './pages/new-sentence/new-sentence.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "all-sentences", pathMatch: "full" },
  { path: "all-sentences", component: AllSentencesComponent },
  { path: "new-sentence", component: NewSentenceComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
