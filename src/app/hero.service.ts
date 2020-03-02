import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHero(id: number): Observable<Hero> {
    var hero: Observable<Hero> = of(HEROES.find(hero => hero.id === id));
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return hero;
  }

  getHeroes(): Observable<Hero[]> {
    var heroes: Observable<Hero[]> = of(HEROES);
    this.messageService.add("HeroService: fetched heroes");
    return heroes;
  }
}
