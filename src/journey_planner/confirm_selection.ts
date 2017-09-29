import { Click, Hit, Task } from 'serenity-js/lib/screenplay-protractor';

import { protractor } from 'protractor';
import { JourneyPlanner } from './ui';

export const ConfirmSelection = () => Task.where(`#actor confirms their selection`,
    Hit.the(protractor.Key.RETURN).into(JourneyPlanner.Plan_My_Journey),

    // or:
    // Scroll.to(JourneyPlanner.Plan_My_Journey),
    // Click.on(JourneyPlanner.Plan_My_Journey),
);
