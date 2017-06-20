import { Click, PerformsTasks, Task } from 'serenity-js/lib/screenplay-protractor';
import { JourneyPlanner } from './ui';

export class SpecifyPreferences implements Task {
    static to(...tasks: Task[]) {
        return new SpecifyPreferences(tasks);
    }

    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Click.on(JourneyPlanner.Edit_Preferences_Link),
            ...this.tasks,
        );
    }

    toString = () => `#actor specifies their preferences`;

    constructor(private tasks: Task[]) {
    }
}
