import { by } from 'protractor';
import { Target } from 'serenity-js/lib/serenity-protractor';

export const JourneyPlanner = {
    Origin_Field:       Target.the('"From" field').located(by.id('InputFrom')),
    Origin_Suggestions: Target.the('"From" suggestions').located(by.xpath('//*[input[@id="InputFrom"]]/*[contains(@class, "tt-dropdown-menu")]')),

    Destination_Field:       Target.the('"To" field').located(by.id('InputTo')),
    Destination_Suggestions: Target.the('"To" suggestions').located(by.xpath('//*[input[@id="InputTo"]]/*[contains(@class, "tt-dropdown-menu")]')),

    Change_Time_Link: Target.the('change time link').located(by.linkText('change time')),
    Time_Selector:    Target.the('time selector').located(by.id('Time')),
    Leaving_Button:   Target.the('"leaving" button').located(by.css('label[for="departing"]')),
    Arriving_Button:  Target.the('"arriving" button').located(by.css('label[for="arriving"]')),

    Edit_Preferences_Link: Target.the('Edit preferences link').located(by.linkText('Edit preferences')),

    // Plan_My_Journey: Target.the('"Plan my journey" button').located(by.buttonText('Plan my journey')),
    Plan_My_Journey: Target.the('"Plan my journey" button').located(by.xpath('(//input[@type="submit"][contains(@value, "Plan my journey")])[2]')),

    Results: Target.the('results').located(by.css('.journey-results')),
};
