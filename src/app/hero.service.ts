// This marks the class as one that participates in the dependency injection system.
// The @Injectable() decorator accepts a metadata object for the service, 
// the same way the @Component() decorator did for your component classes.
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero/hero';
import { HEROES } from './hero/mock-heroes';
import { MessageService } from './message.service';

// HeroService uses the service to send a message
// Services are a great way to share information among classes that don't know each other
// Inject in HeroService, which uses the service to send a message

// The @Injectable() decorator accepts a metadata object for the service, 
// the same way the @Component() decorator did for your component classes.

@Injectable({
  providedIn: 'root',
})

export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}