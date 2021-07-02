const departmentService = {
    get() {
        return fetch('/data/department.json')
        .then(res => res.json())
    },
    getBySubjectId(props) {
        const {subjectId} = props;
        const tempData = fetch('/data/department.json')
        .then(res => res.json())
        console.log(tempData);
        tempData.filter((data) => {
            return data.id === subjectId;
        })
    },
    update() {

    },
    delete(){

    },
    create(){

    }

}

export default departmentService