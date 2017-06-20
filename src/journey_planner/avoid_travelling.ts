import { Click, PerformsTasks, step, Task } from 'serenity-js/lib/screenplay-protractor';

import { JourneyPlannerPreferences } from './ui/journey_planner_preferences';

export class AvoidTravelling implements Task {
    static by(options: string[]) {
        return new AvoidTravelling(options);
    }

    @step('#actor chooses to avoid travelling by #options')
    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            ...this.options.map(option => Click.on(JourneyPlannerPreferences.Journey_Option.of(option))),
        );
    }

    constructor(private options: string[]) {
    }
}
