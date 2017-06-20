import { Open, ResizeBrowserWindow, Task, UseAngular } from 'serenity-js/lib/screenplay-protractor';

export const OpenJourneyPlanner = () => Task.where(`#actor opens the Journey Planner`,
    UseAngular.disableSynchronisation(),
    ResizeBrowserWindow.toMaximum(),
    Open.browserOn('/'),
);
