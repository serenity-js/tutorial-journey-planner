import { PerformsTasks, step, Task } from 'serenity-js/lib/screenplay-protractor';
import {
    AvoidTravelling,
    ChooseDestination,
    ChooseOrigin,
    ChooseTime,
    ConfirmSelection,
    OpenJourneyPlanner,
    SpecifyPreferences,
} from './journey_planner';

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
            OpenJourneyPlanner(),
            ...this.tasks,
            ConfirmSelection(),
        );
    }

    constructor(private tasks: Task[]) {
    }
}
