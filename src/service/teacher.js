const teacherService = {
    get(){
        return fetch('/data/teacher.json').then(res => res.json())
    }
}

export default teacherService