const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  {
    first: "Nicolaus",
    last: "Copernicus",
    year: 1473,
    passed: 1543,
  },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// const great = inventors.filter(
//   (inventor) => inventor.year >= 1500 && inventor.year <= 1600
// );
// UTKARSH


/* 
const great = inventors;
const renderTable = (data) => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  thead.textContent = "Heading"
  const tbody = document.createElement("tbody");
  for (let i = 0; i < inventors.length; i++) {
    const rowData = inventors[i];
    const row = `
    <tr>
    <td>${rowData.first} ${rowData.last}</td>
    </tr>
    `
    tbody.innerHTML += row;
  }
  table.appendChild(thead)
  table.appendChild(tbody)
  return table;
};
const greatTable = renderTable(great);
document.body.appendChild(greatTable);
// UTKARSH
*/
// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const normal = inventors.map((inventor) => inventor.first + " " + inventor.last
);
console.table(normal);
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

/* 
const bD= inventors.sort(function(a,b){
     if(a.year>b.year){
      return 1;
     }
    else{ 
    return -1
     }
    });
  console.table(bD);
  
  OR WE CAN DO THIS WAY TOO
*/
const bD = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(bD);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

/*
 so we have the two method usin reduce and using for loop

  var tyears=0;
  for(var i=0;i<inventors.length; i++){
    tyears += inventors[i].year;
  }
  console.log(tyears);

*/
const tyears = inventors.reduce((T, I) => {
  return T + (I.passed - I.year);
}, 0);
console.log(tyears);

// 5. Sort the inventors by years lived
const oldest = inventors.sort(function (a, b) {
  const lastguy = a.passed - a.year;
  const newguy = b.passed - b.year;
  return lastguy > newguy ? -1 : 1;
});
console.table(oldest);
console.log("oldest");
/*
MOST IMPORTENT THAT WE CN USE 

return lastguy>newguy ? -1:1; 
                                  INSTEAD OF 
IF (LASTGUY>NEWGUY){RETURN -1;}
ELSE { RETURN 1;}

*/
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const classs = document.querySelector('.mw-category');
// const links = Array.from(classs.querySelectorAll('a'));
// const final = links.map(deS => deS.textContent)
//                     .filter(deS=> deS.includes('de'));
                         



// 7. sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort((l,n)=>{
  const [alast, afirst]= l.split(', ');
  const [blast, bfirst]= n.split(', ');
  return alast> blast ? 1:-1;
});
console.table(alpha);


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ["car","car","truck","truck","bike","walk","car","van","bike","walk","car","van","car","truck",];
const transportation= data.reduce((obj,item)=>{
  if (!obj[item]){
    obj[item]=0;
  }
  obj[item]++;
  return obj;
}, {});
console.log(transportation);