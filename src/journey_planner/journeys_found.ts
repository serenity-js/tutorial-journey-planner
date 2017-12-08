import { BrowseTheWeb, Question } from 'serenity-js/lib/screenplay-protractor';

import { by, ElementFinder } from 'protractor';
import { expect } from '../expect';
import { JourneyResults } from './ui/journey_results';

export interface JourneySummary {
    departureTime: string;
    arrivalTime:   string;
}

export const JourneysFound = () => Question.about(`the journeys found`, actor =>

    BrowseTheWeb.as(actor).locateAll(JourneyResults.List).
        map(resultsToJourneySummaries) as PromiseLike<JourneySummary[]>,
);

function resultsToJourneySummaries(result: ElementFinder) {
    return result.all(by.css('.time-boxes .time-box .time')).getText().then(individualResultToJourneySummary);
}

function individualResultToJourneySummary(text: string): JourneySummary {
    const summaryFormat = /(\d{2}:\d{2})/gi;
    const times         = text[0].match(summaryFormat);

    return ({
        departureTime: times[0],
        arrivalTime:   times[1],
    });
}

export const containTrainsDepartingAt = (expectedDepartureTimes: string[]) => foundJourneys => {
    return foundJourneys.then(journeys => {
        expect(journeys).to.have.lengthOf(expectedDepartureTimes.length);

        journeys.forEach(journey => {
            expect(journey.departureTime).to.to.be.oneOf(expectedDepartureTimes);
        });
    });
};

// class-style implementation:

// export class Journeys implements Question<PromiseLike<JourneySummary[]>> {
//
//     static found = () => new Journeys();
//
//     answeredBy(actor: UsesAbilities): PromiseLike<JourneySummary[]> {
//         return BrowseTheWeb.as(actor).locateAll(
//             Target.the('results').located(by.css('.publictransport-box')),
//         ).map(result => result.all(by.css('.time-boxes .time-box .time')).getText().then(times => ({
//             departureTime: times[0],
//             arrivalTime:   times[1],
//         })));
//     }
//
//     toString = () => `the results`;
// }
