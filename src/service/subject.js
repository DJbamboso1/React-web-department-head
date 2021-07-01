const subjectService = {
    get() {
        return fetch('/data/subject.json').then(res => res.json())
    }
}

export default subjectService;