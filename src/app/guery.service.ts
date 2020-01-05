import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Book} from './model';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  endpointUrl = 'https://query.wikidata.org/sparql?';
  sparqlQuery =
    ' SELECT ?book ?bookLabel ?authorLabel ?genre_label ?series_label ?publicationDate\n' +
    'WHERE\n' +
    '{\n' +
    '\t?author ?label \'Clive Cussler\'@en .\n' +
    '\t?book wdt:P31 wd:Q571 .\n' +
    '\t?book wdt:P50 ?author .\n' +
    '\tOPTIONAL {\n' +
    '\t\t?book wdt:P136 ?genre .\n' +
    '\t\t?genre rdfs:label ?genre_label filter (lang(?genre_label) = \'en\').\n' +
    '\t}\n' +
    '\tOPTIONAL {\n' +
    '\t\t?book wdt:P179 ?series .\n' +
    '\t\t?series rdfs:label ?series_label filter (lang(?series_label) = \'en\').\n' +
    '\t}\n' +
    '\tOPTIONAL {\n' +
    '\t\t?book wdt:P577 ?publicationDate .\n' +
    '\t}\n' +
    '\tSERVICE wikibase:label {\n' +
    '\t\tbd:serviceParam wikibase:language \'en\' .\n' +
    '\t}\n' +
    '}';

  constructor(private http: HttpClient) {
  }

  get(): Observable<Book[]> {
    const settings = {
      headers: {Accept: 'application/sparql-results+json'},
      params: {query: this.sparqlQuery}
    };
    return this.http.get<any>(this.endpointUrl, settings).pipe(
      map(res => res.results.bindings)
    );
  }
}
