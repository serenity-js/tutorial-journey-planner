import { step } from 'serenity-js/lib/serenity/recording';
import { PerformsTasks, Task } from 'serenity-js/lib/serenity/screenplay';
import {
    AvoidTravelling,
    ChooseDestination,
    ChooseOrigin,
    ChooseTime,
    ConfirmSelection,
    SpecifyPreferences,
} from './journey_planner';

import { Navigate } from './navigate';
import { following } from './text';

export class PlanAJourney implements Task {

    static from = (origin: string) => new PlanAJourney([ChooseOrigin.of(origin)]);

    to(destination: string) {
        this.tasks.push(ChooseDestination.of(destination));

        return this;
    }

    departingAt(time: string) {
        this.tasks.push(ChooseTime.ofDeparture(time));

        return this;
    }

    avoiding(ignoredTravelOptions: string[]) {
        this.tasks.push(SpecifyPreferences.to(
            AvoidTravelling.by(following(ignoredTravelOptions)),
        ));

        return this;
    }

    @step('#actor plans a journey')
    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Navigate.to('https://tfl.gov.uk/'),
            ...this.tasks,
            ConfirmSelection(),
        );
    }

    constructor(private tasks: Task[]) {
    }
}
