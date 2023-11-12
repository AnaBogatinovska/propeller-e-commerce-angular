import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { GraphQLRequest } from "@apollo/client";
import { map } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ApolloService {

    constructor(private _apollo: Apollo) {}

    public query(request: GraphQLRequest) {
       return this._apollo.watchQuery<any, any>(request).valueChanges.pipe(map(result => result.data))
    }
}