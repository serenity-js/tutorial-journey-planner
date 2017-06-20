import { Click, Task } from 'serenity-js/lib/screenplay-protractor';

import { JourneyPlanner } from './ui';

export const ConfirmSelection = () => Task.where(`#actor confirms their selection`,
    Click.on(JourneyPlanner.Plan_My_Journey),
);
