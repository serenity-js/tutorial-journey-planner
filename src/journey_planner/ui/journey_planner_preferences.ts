import { by } from 'protractor';
import { Target } from 'serenity-js/lib/serenity-protractor';

export const JourneyPlannerPreferences = {
    Journey_Option: Target.the('journey option').located(by.xpath('//label[text()="{0}"]')).called('Travel by {0}'),
};
