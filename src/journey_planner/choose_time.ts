import { Click, Select, Task } from 'serenity-js/lib/screenplay-protractor';
import { JourneyPlanner } from './ui';

export const ChooseTime = {
    ofDeparture: (time: string) => Task.where(`#actor wants to depart at ${time}`,
        Click.on(JourneyPlanner.Change_Time_Link),
        Click.on(JourneyPlanner.Leaving_Button),
        Select.theValue(time).from(JourneyPlanner.Time_Selector),
    ),

    ofArrival: (time: string) => Task.where(`#actor wants to depart at ${time}`,
        Click.on(JourneyPlanner.Change_Time_Link),
        Click.on(JourneyPlanner.Arriving_Button),
        Select.theValue(time).from(JourneyPlanner.Time_Selector),
    ),
};
