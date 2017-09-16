// - Routes instead of RouteConfig
// - RouterModule instead of provideRoutes
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FinderComponent } from './finder/finder.component';
import { RemoteComponent } from './remote/remote.component';

const routes: Routes = [
  { path: 'remote', component: RemoteComponent },
  { path: 'finder', component: FinderComponent },
  { path: 'main', component: AppComponent }
];

// - Updated Export
export const routing = RouterModule.forRoot(routes);
