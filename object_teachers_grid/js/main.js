"use strict";

// declaring techer objects

// Birgitte
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

// Gertie
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

//Kim

let teacher3 = {
    name: 'Kim Elkjær Marcher-Jepsen',
    position: 'Lecturer',
    department: 'Multimedia design',
    address: 'Ringvej syd 104, 8240 Viby J',
    mail: 'kije@baaa.dk',
    Phone: '7228 6325',
    linkedInProfile: 'Meet Kim Elkjær Marcher-Jepsen on LinkedIn',
    img: 'https://www.baaa.dk/CropUp/headshot/media/3124373/Kim-Elkjaer-Marcher-Jepsen.jpg'


};

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

// log objects to the developer console
console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
console.log(teacher4);
// Appending objects to the DOM

// teacher1 - Birgitte
document.querySelector("#grid-teachers").innerHTML +=
  "<article>" +
  "<img src='" + teacher1.img + "'>" +
  "<h3>" + teacher1.name + "</h3>" +
  teacher1.position + "<br>" +
  "<a href='mailto:" + teacher1.mail + "'>" + teacher1.mail + "</a>" +
  "</article>";

//teacher2 - Gertie
document.querySelector("#grid-teachers").innerHTML +=
  "<article>" +
  "<img src='" + teacher2.img + "'>" +
  "<h3>" + teacher2.name + "</h3>" +
  teacher2.position + "<br>" +
  "<a href='mailto:" + teacher2.mail + "'>" + teacher2.mail + "</a>" +
  "</article>";

document.querySelector("#grid-teachers").innerHTML +=
  "<article>" +
  "<img src='" + teacher3.img + "'>" +
  "<h3>" + teacher3.name + "</h3>" +
  teacher3.position + "<br>" +
  "<a href='mailto:" + teacher3.mail + "'>" + teacher3.mail + "</a>" +
  "</article>";

document.querySelector("#grid-teachers").innerHTML +=
  "<article>" +
  "<img src='" + teacher4.img + "'>" +
  "<h3>" + teacher4.name + "</h3>" +
  teacher4.position + "<br>" +
  "<a href='mailto:" + teacher4.mail + "'>" + teacher4.mail + "</a>" +
  "</article>";

let teachers = [];

let teachers =[ {
  name: 'Birgitte Kirk Iversen',
  mail: 'bki@eaa.dk'
};
]


let newteacher = {
  name: 'Kim',
  mail: 'bki@eaa.dk'
};
