import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { GraphQLRequest } from "@apollo/client";
import { map } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ApolloService {

   constructor(private _apollo: Apollo) { }
   
   private get headers() {
      const token = localStorage.getItem('vendureToken');
      const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
      return headers;
   }

   public watchQuery(request: GraphQLRequest) {
      return this._apollo.watchQuery<any, any>({ ...request, context: { headers: this.headers } }).valueChanges.pipe(map(result => result.data));
   }

   public query(request: GraphQLRequest) {
      return this._apollo.query<any, any>({ ...request, context: { headers: this.headers } }).pipe(map(result => result.data));
   }

   public mutate(request) {
      return this._apollo.mutate<any, any>({ ...request, context: { headers: this.headers } }).pipe(map(result => result.data));
   }

  
}