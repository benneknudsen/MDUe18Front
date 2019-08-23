"use strict";

// appends a string to the DOM
document.querySelector("#page-content").innerHTML = "Hi Frontenders!";

// declaring techer objects



let teachers = [];


let teacher1 = {
  name: "Birgitte Kirk Iversen",
initials: "bki",
mail: "bki@baaa.dk",
phone: "72286316",
address: "Sønderhøj 30, 8260 Viby J",
position: "Senior Lecturer",
department: "Multimedia Design",
img: "https://www.baaa.dk/CropUp/headshot/media/1524902/birgitte-kirk-iversen.jpg"
};

let teacher2 = {
name: "Gertie Margrethe Kolding Jensen",
initials: "gkj",
mail: "gkj@baaa.dk",
phone: "72286349",
address: "Sønderhøj 30, 8260 Viby J",
position: "Senior Lecturer",
department: "Multimedia Design",
img: "https://www.eaaa.dk/CropUp/headshot/media/2046228/Gertie-Kolding.jpg"
};

let teacher3 = {
  name: 'Kim Elkjær Marcher-Jepsen',
    position: 'Lecturer',
    department: 'Multimedia design',
    address: 'Ringvej syd 104, 8240 Viby J',
    mail: 'kije@baaa.dk',
    Phone: '7228 6325',
    linkedInProfile: 'Meet Kim Elkjær Marcher-Jepsen on LinkedIn',
    img: 'https://www.baaa.dk/CropUp/headshot/media/3124373/Kim-Elkjaer-Marcher-Jepsen.jpg'};



console.log(teachers);
console.log(teachers[1]);
console.log(teachers.length);

let teacher4 = {
  name: 'Rasmus Cederdorff',
  position: 'Lecturer',
  department: 'Multimedia design',
  adress: 'Ringvej syd 104, 8240 Viby J',
  mail: 'race@baaa.dk',
  phone: '7228 6318',
  LinkedInProfile: 'Meet Rasmus Cederforff on LinkedIn',
  img: 'https://www.baaa.dk/CropUp/headshot/media/5516665/Rasmus-Cederdorff.jpg'
};

teachers.push(teacher1, teacher2, teacher3, teacher4);

function appendTeachers(teachers) {
  for (let teacher of teachers) {
    console.log (teacher);
    document.querySelector("#page-content").innerHTML +=
      "<article>" +
      "<img src='" + teacher.img + "'>" +
      "<h3>" + teacher.name + "</h3>" +
      teacher.position + "<br>" +
      "<a href='mailto:" + teacher.mail + "'>" + teacher.mail + "</a>" +
      "</article>";
  }
}

appendTeachers(teachers);
console.log(teachers.length);





let familymember = [];

let member1 = {
  name: 'Jacob Knudsen',
  age: 50,
  relation: 'Father'
}

let member2 = {
  name: 'Christina Knudsen',
  age: 49,
  relation: 'Mother'
}

let member3 = {
  name: 'Lærke Knudsen',
  age: 16,
  relation: 'Sister'
}



familymember.push (member1, member2, member3);


console.log(familymember);
console.log(familymember[1]);
console.log(familymember.length);

function appendFamilymember(familymember) {
  for (let member of familymember){
    console.log(member);
    document.querySelector("#page-content").innerHTML +=`
      <article>
      <h3>${member.name}<br>
      ${member.age}<br>
       ${member.relation}</h3>
      </article>
`
  }
}

function checkage(familymember) {
  for (let member of familymember){
    if (member.age >= 30){
      console.log(member);
    }

  }
}

checkage(familymember);
appendFamilymember(familymember);
