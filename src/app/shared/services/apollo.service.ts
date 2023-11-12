import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { GraphQLRequest } from "@apollo/client";
import { map } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ApolloService {

    constructor(private _apollo: Apollo) {}

    public watchQuery(request) {
       return this._apollo.watchQuery<any, any>(request).valueChanges.pipe(map(result => result.data))
    }

    public query(request) {
       return this._apollo.query<any, any>(request).pipe(map(result => result.data))
    }

    public mutate(request) {
       return this._apollo.mutate<any, any>(request).pipe(map(result => result.data))
    }
}