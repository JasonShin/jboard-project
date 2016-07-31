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
                        projectTitle: "Making cake"
                    },
                    {
                        id: "9128429014",
                        projectTItle: "How to brew beer"
                    },
                    {
                        id: "192849124",
                        projectTitle: "Spend fun time on Sunday"
                    },
                    {
                        id: "120841208401284",
                        projectTitle: "Build something awesome in react"
                    }

                ]
            )
        );
    }


    fetchTaskData() {

    }
}