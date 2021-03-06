import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHeaders } from 'src/common/models/IHeaders';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://places.ls.hereapi.com/places/v1/';

  constructor(private httpClient: HttpClient) { }

  public getHotels(url: string) {
    const fullUrl = `${this.baseUrl}${url}`;
    const headers: IHeaders = { 'Accept-Language': 'en' };
    return this.httpClient.get<any>(fullUrl, { headers });
  }
}
