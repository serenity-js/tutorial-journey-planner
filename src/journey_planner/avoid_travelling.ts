import { Click } from 'serenity-js/lib/serenity-protractor';
import { step } from 'serenity-js/lib/serenity/recording';
import { PerformsTasks, Task } from 'serenity-js/lib/serenity/screenplay';

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
