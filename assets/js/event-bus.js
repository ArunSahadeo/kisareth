const EventBus = {
	topics: {},

	subscribe(topic, listener) {
		// create the topic if not yet created

        if (!this.topics[topic] || !this.topics.hasOwnProperty(topic)) {
            this.topics[topic] = [];
        }

		// add the listener
		this.topics[topic].push(listener);

        return this;

	},
	unsubscribe(topic, listener) {
		// return if the topic does not exist

        if (!this.topics[topic] || !this.topics.hasOwnProperty(topic)) {
            return;
        }

        // Remove the listener from the topic
        var index = this.topics[topic].indexOf(listener);
        if (index > -1) {
            this.topics[topic].splice(index, 1);
        }

	},
	publish(topic, data = {}) {
		// return if the topic doesn't exist, or there are no listeners
        if (!this.topics.hasOwnProperty(topic) || this.topics[topic].length < 1) {
            return;
        }

		// send the event to all listeners
		this.topics[topic].forEach(function (listener) {
            if (typeof listener !== 'undefined') {
		        listener(data || {});
            }
		});

        return this;
	}
};

export default EventBus; 
