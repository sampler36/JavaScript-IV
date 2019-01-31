// CODE here for your Lambda Classes

class People{  //used people instead of person
    constructor(peopleAttrs){
        this.name = peopleAttrs.name;
        this.location = peopleAttrs.location;
        this.age = peopleAttrs.age;
        this.gender = peopleAttrs.gender;
        this.catchPhrase = peopleAttrs.catchPhrase;
    }

    speak(){
        return `Hie guys I am ${this.name} and my catchphrase is ${this.catchPhrase}`;
    }

    zoomOn(){
        return` ${this.name} started a zoom sesion`;
    }
}

class Instructor extends People{
    constructor(iattrs){
    super(iattrs)
     this.specialty = iattrs.specialty;
     this.favLanguage = iattrs.favLanguage
    }
}

class ProjectManager extends Instructor{
    constructor(pattrs){
        super(pattrs)
        this.freetime = pattrs.freetime;
        this.resources = pattrs.resources;
    }
}

class Student extends Instructor{
    constructor(stattrs){
     super(stattrs)
    this.grades = stattrs.grades
     this.favLanguage = stattrs.favLanguage
     this.className = stattrs.className;
	 this.favSubjects = stattrs.favSubjects
    }
    subjects(){
        return this.favSubjects;
   }
   gradestotal(){
       
    return `${this.name} receives a perfect score on ${this.favSubjects}`;

   }
}


//new guys 

const ins = new Instructor({
    name: 'Gab',
    location: 'Spain',
    age: 17,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Anything Code related',
    catchPhrase: `Aaaaaaa haaaaa`
  });

  const st = new Student({
    name: 'Anto',
    location: 'iceland',
    age: 10,
    gender: 'male',
    favSubjects: ['maths', 'Java', 'python'],
    previousBackground:'I was an egg runner'
  });

  const pm = new ProjectManager({
    name: 'Lukasz',
    location: 'hawai',
    age: 15,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Any one got a question`
  });

  console.log(ins.speak()); // Instrustor speaks
  console.log(pm.zoomOn()); // Turned zoom session
  console.log(ins.name); // Instrustor speaks
  console.log(st.subjects()); // student grades
  console.log(st.gradestotal()); // student grades
  