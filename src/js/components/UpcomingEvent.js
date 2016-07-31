import React from 'react';

export default class UpcomingEvent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div class="upcomingEventContainer">
                <div class="label">
                    Your upcoming events
                </div>
                <div class="nextEvent">
                    Next event!!
                </div>

                <div class="comingUpEvent">
                    comming up!!
                </div>
            </div>
        );
    }
}