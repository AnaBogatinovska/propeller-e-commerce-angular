import { Subscription } from "rxjs";

export const tryUnsubscribe = (subscription: Subscription) => {
    if (subscription) {
        subscription.unsubscribe();
    }
}
