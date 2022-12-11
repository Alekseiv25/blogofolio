const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}

/*1*/ console.log((Object.keys(subjects).join(', ')))

/*2*/ console.log(Object.values(subjects).map(subject => subject.students + subject.teachers).reduce((total, amount) => total + amount))

/*3*/  console.log(Object.values(subjects).map(subject => subject.students).reduce((total, amount) => total + amount) / Object.values(subjects).length)

/*4*/ console.log(Object.values(subjects))

/*5*/ console.log(Object.values(subjects).sort((min, max) => max.teachers - min.teachers))