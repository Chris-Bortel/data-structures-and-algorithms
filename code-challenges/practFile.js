const courseInfo = { name: 'Code 301', duration: { dayTrack: '4 weeks', eveningTrack: '8 weeks'},
  topics: ['SMACSS', 'APIs', 'NodeJS', 'SQL', 'jQuery', 'functional programming'],
  finalExam: true
};

const getCourseKeys = (obj) => {
  // Solution code here...
  // TODO: needs to take in the courseInfo Obj
  // let properties = Object.keys(courseInfo);
        for(let property in courseInfo ) {
          console.log (property, courseInfo[property]);
        }
  
return getCourseKeys(obj);
  // TODO: needs to push to an array
  // TODO: needs to return an array containing the keys for the courseInfo object
};
