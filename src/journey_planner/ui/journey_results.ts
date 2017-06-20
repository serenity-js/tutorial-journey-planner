import { by } from 'protractor';
import { Target } from 'serenity-js/lib/screenplay-protractor';

export const JourneyResults = {
    List: Target.the('results').located(by.css('.publictransport-box')),
};
