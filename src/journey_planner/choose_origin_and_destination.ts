import { protractor } from 'protractor';
import { Enter, Hit, Is, Target, Wait } from 'serenity-js/lib/serenity-protractor';
import { Task } from 'serenity-js/lib/serenity/screenplay';

import { JourneyPlanner } from './ui';

export const ChooseOrigin = { of: (origin: string) => Task.where(`#actor wants to travel from ${origin}`,
    Enter.theValue(origin).into(JourneyPlanner.Origin_Field),
    PickTheFirstSuggestion.of(JourneyPlanner.Origin_Field).from(JourneyPlanner.Origin_Suggestions),
)};

export const ChooseDestination = { of: (destination: string) => Task.where(`#actor wants to travel to ${destination}`,
    Enter.theValue(destination).into(JourneyPlanner.Destination_Field),
    PickTheFirstSuggestion.of(JourneyPlanner.Destination_Field).from(JourneyPlanner.Destination_Suggestions),
)};

const PickTheFirstSuggestion = {
    of: (field: Target) => ({
        from: (suggestions: Target) => Task.where(`#actor picks the first suggestion for ${field} from ${suggestions}`,
            Wait.until(suggestions, Is.visible()),
            Hit.the(protractor.Key.ARROW_DOWN).into(field),
            Hit.the(protractor.Key.ENTER).into(field),
        ),
    }),
};
