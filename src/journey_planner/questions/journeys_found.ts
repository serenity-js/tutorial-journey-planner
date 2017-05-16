import { BrowseTheWeb, Target } from 'serenity-js/lib/serenity-protractor';

import { by } from 'protractor';
import { Question, UsesAbilities } from 'serenity-js/lib/serenity/screenplay';
import { expect } from '../../expect';

export interface JourneySummary {
    departureTime: string;
    arrivalTime:   string;
}

export class Journeys implements Question<JourneySummary[]> {

    static found = () => new Journeys();

    answeredBy(actor: UsesAbilities): PromiseLike<JourneySummary[]> {
        return BrowseTheWeb.as(actor).locateAll(
            Target.the('results').located(by.css('.publictransport-box')),
        ).map(result => result.all(by.css('.time-boxes .time-box .time')).getText().then(times => ({
            departureTime: times[0],
            arrivalTime:   times[1],
        }))) as PromiseLike<JourneySummary[]>;
    }

    toString = () => `the results`;
}

export const containTrainsDepartingAt = (expectedDepartureTimes: string[]) => foundJourneys => {
    return foundJourneys.then(journeys => {
        expect(journeys).to.have.lengthOf(expectedDepartureTimes.length);

        journeys.forEach(journey => {
            expect(journey.departureTime).to.to.be.oneOf(expectedDepartureTimes);
        });
    });
};
