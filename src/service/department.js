const departmentService = {
    get() {
        return fetch('/data/department.json')
        .then(res => res.json())
    },
    getOne() {

    },
    update() {

    },
    delete(){

    },
    create(){

    }

}

export default departmentService