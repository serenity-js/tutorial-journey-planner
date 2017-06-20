import {
    AvoidTravelling,
    Check,
    ChooseDestination,
    ChooseOrigin,
    ChooseTime,
    ConfirmSelection,
    containTrainsDepartingAt,
    SpecifyPreferences,
} from '../../src/journey_planner';

import { PlanAJourney } from '../../src';

import { following } from '../../src/text';

export = function journeyPlannerSteps() {

    this.Given(/(.*) line trains from (.*) leave (.*) at (.*)$/, function(tubeLine, origin, station, departureTimes) {
        // return this.stage.theActorCalled('Adam the admin').attemptsTo(
            // ... Perform some data setup tasks
        // );
    });

    this.When(/(.*) wants to travel from (.*) to (.*) at (.*), avoiding travelling by (.*)$/, function(name, origin, destination, departureTime, ignoredTravelOptions) {

        return this.stage.theActorCalled(name).attemptsTo(

            PlanAJourney.from(origin).
                to(destination).
                departingAt(departureTime).
                avoiding(ignoredTravelOptions),

            // Note: The `PlanAJourney` task above is a composite of the below sub-tasks.
            //       If you'd like, you could use them here instead:

            // Navigate.to('https://tfl.gov.uk/'),
            //
            // ChooseOrigin.of(origin),
            // ChooseDestination.of(destination),
            // ChooseTime.ofDeparture(departureTime),
            // SpecifyPreferences.to(
            //     AvoidTravelling.by(following(ignoredTravelOptions)),
            // ),
            // ConfirmSelection(),
        );
    });

    this.Then(/s?he should be told about the trains departing at (.*)$/, function(departureTimes) {

        return this.stage.theActorInTheSpotlight().attemptsTo(

            Check.ifJourneysFound(containTrainsDepartingAt(following(departureTimes))),

            // Note: the `Check` task above is a composite of the below sub-tasks:

            // Wait.until(JourneyPlanner.Results, Is.visible()),
            // Scroll.to(JourneyPlanner.Results),
            // See.if(JourneysFound(), containTrainsDepartingAt(following(departureTimes))),
        );
    });
};
