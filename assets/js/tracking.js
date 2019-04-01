import EventBus from './event-bus';

const TrackingModule = {
    checkTrackingPreferences: function () {
        let supportedInWindow = window.hasOwnProperty('doNotTrack');
        let supportedInNavigator = navigator.hasOwnProperty('doNotTrack');

        if (!supportedInWindow && !supportedInNavigator) {
            return false;
        }

        if (supportedInWindow) {
            let doNotTrack = window.doNotTrack;

            if (window.doNotTrack !== 1) {
                return false;
            }

        } else if (supportedInNavigator) {
            let doNotTrack = navigator.doNotTrack;

            if (navigator.doNotTrack !== 1) {
                return false;
            }
        }

        return true;
    },

    run: function () {
        const doNotTrack = TrackingModule.checkTrackingPreferences(); 

        if (doNotTrack) {
            return;
        }

        EventBus.publish('enable-trackers');
    }
};

EventBus.subscribe('init-tracking', TrackingModule.run);
export default TrackingModule;
