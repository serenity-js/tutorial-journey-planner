import { Assertion } from '@serenity-js/core/lib/screenplay/expectations';
import { Is, Scroll, See, Task, Wait } from 'serenity-js/lib/screenplay-protractor';

import { JourneysFound, JourneySummary } from '../../src/journey_planner';
import { JourneyPlanner } from '../../src/journey_planner/ui';

export const Check = {
    ifJourneysFound: (assertion: Assertion<PromiseLike<JourneySummary[]>>) =>

        Task.where(`#actor checks the results`,
            Wait.until(JourneyPlanner.Results, Is.visible()),
            Scroll.to(JourneyPlanner.Results),
            See.if(JourneysFound(), assertion),
        ),
};
