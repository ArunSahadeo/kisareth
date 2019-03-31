import EventBus from './event-bus';
window.addEventListener('load', initModules);

const load = (e) => {
    EventBus.publish('init-tracking');
};
