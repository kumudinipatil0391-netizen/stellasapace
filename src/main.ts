import { bootstrapApplication } from '@angular/platform-browser';
import { StellaSpaceComponent } from './app/stella_space/stella_space.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(StellaSpaceComponent, { providers: [provideRouter(routes)] })
	.catch(err => console.error(err));
