let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

let obj1String = JSON.stringify(obj1);
let obj2String = JSON.stringify(obj2);

if (obj1String === obj2String) {
  console.log("The two objects are equal.");
} else {
  console.log("The two objects are not equal.");
}
// fetching countries

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(countries => {
    countries.forEach(country => {
      console.log(country.flags.svg);
    });
  })
  .catch(error => console.log(error));

  //print names, regions, sub regions and populations

  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(countries => {
    countries.forEach(country => {
      console.log(`Name: ${country.name.common}`);
      console.log(`Region: ${country.region}`);
      console.log(`Sub-Region: ${country.subregion}`);
      console.log(`Population: ${country.population}`);
      console.log('---');
    });
  })
  .catch(error => console.log(error));
