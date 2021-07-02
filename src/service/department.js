const departmentService = {
    get() {
        return fetch('/data/department.json')
        .then(res => res.json())
    },
    async getBySubjectId(props) {
        const {subjectId} = props;
        const tempData = await fetch('/data/department.json')
        .then(res => res.json())
        tempData.filter((data) => {
            return data.id === subjectId;
        })

        return tempData
    },
    update() {

    },
    delete(){

    },
    create(){

    }

}

export default departmentService