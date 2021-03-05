import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotyService {

  constructor(private http:HttpClient) { 

  }

  getNewReleases() {

    /* const headers = new HttpHeaders({
      'Authorization':'Bearer BQCKGu8-PyPNUBlYLcu7b-s4gXfTFq5wVeS5iZaAedwA1LYupqqf_ATDn-F3-Gq8e0xGspOET9yRfwYurSE'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?country=US', {headers}); */
    return this.http.get('../../assets/newReleases.json');
  
  }

}