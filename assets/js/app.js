import EventBus from './event-bus';

const loadApp = (e) => {
    EventBus.publish('init-tracking');
};

window.addEventListener('load', loadApp);
