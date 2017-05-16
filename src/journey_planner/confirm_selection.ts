import { Click } from 'serenity-js/lib/serenity-protractor';
import { Task } from 'serenity-js/lib/serenity/screenplay';

import { JourneyPlanner } from './ui';

export const ConfirmSelection = () => Task.where(`#actor confirms their selection`,
    Click.on(JourneyPlanner.Plan_My_Journey),
);
