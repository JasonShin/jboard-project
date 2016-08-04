export default class DevData {
    constructor() {
        localStorage.clear();
        this.fetchProjectData();
    }

    fetchProjectData() {

        localStorage.setItem('project', JSON.stringify(
                [
                    {
                        id: "1124871254",
                        projectTitle: "Making cake",
                        coordinates: {
                            xAxis: 150,
                            yAxis: 500
                        }
                    },
                    {
                        id: "9128429014",
                        projectTitle: "How to brew beer",
                        coordinates: {
                            xAxis: 500,
                            yAxis: 230
                        }
                    },
                    {
                        id: "192849124",
                        projectTitle: "Spend fun time on Sunday",
                        coordinates: {
                            xAxis: 555,
                            yAxis: 1100
                        }
                    },
                    {
                        id: "120841208401284",
                        projectTitle: "Build something awesome in react",
                        coordinates: {
                            xAxis: 412,
                            yAxis: 717
                        }
                    }

                ]
            )
        );
    }


    fetchTaskData() {

    }
}