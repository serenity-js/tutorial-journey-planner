import { by } from 'protractor';
import { Target } from 'serenity-js/lib/serenity-protractor';

export class JourneyPlanner {
    static Origin_Field       = Target.the('"From" field').located(by.id('InputFrom'));
    static Origin_Suggestions = Target.the('"From" suggestions').located(by.xpath('//*[input[@id="InputFrom"]]/*[contains(@class, "tt-dropdown-menu")]'));

    static Destination_Field       = Target.the('"To" field').located(by.id('InputTo'));
    static Destination_Suggestions = Target.the('"To" suggestions').located(by.xpath('//*[input[@id="InputTo"]]/*[contains(@class, "tt-dropdown-menu")]'));

    static Change_Time_Link  = Target.the('change time link').located(by.linkText('change time'));
    static Time_Selector     = Target.the('time selector').located(by.id('Time'));
    static Leaving_Button    = Target.the('"leaving" button').located(by.css('label[for="departing"]'));
    static Arriving_Button   = Target.the('"arriving" button').located(by.css('label[for="arriving"]'));

    static Edit_Preferences_Link  = Target.the('Edit preferences link').located(by.linkText('Edit preferences'));

    static Plan_My_Journey   = Target.the('"Plan my journey" button').located(by.buttonText('Plan my journey'));

    static Results           = Target.the('results').located(by.css('.journey-results'));
}
