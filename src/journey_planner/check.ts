import { Is, Scroll, See, Task, Wait } from 'serenity-js/lib/screenplay-protractor';
import { Assertion } from 'serenity-js/lib/serenity/screenplay/expectations';

import { Journeys, JourneySummary } from '../../src/journey_planner/questions/journeys_found';
import { JourneyPlanner } from '../../src/journey_planner/ui';

export const Check = { ifJourneysFound: (assertion: Assertion<JourneySummary[]>) => Task.where(`#actor checks the results`,
    Wait.until(JourneyPlanner.Results, Is.visible()),
    Scroll.to(JourneyPlanner.Results),
    See.if(Journeys.found(), assertion),
)};
