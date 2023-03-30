console.log('Fetch API');
/*
const p = fetch("https://goweather.herokuapp.com/weather/ny")
p.then((value1)=>{
  return value1.json()
}).then((value2)=>{
  console.log(value2) 
})

*/
// -------------------------------------------------------------------------------------------
/*
const p = fetch("https://goweather.herokuapp.com/weather/ny");

  interface Weather {
    day: string;
    temperature: string;
    wind: string;
  }
  
// Fetch data from the API using fetch API
  p.then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const people: Weather[] = data.results;

    
    // Create the table dynamically using JavaScript
        const table = document.createElement('table');
        const headerRow = table.insertRow();
        headerRow.insertCell().textContent = 'Day';
        headerRow.insertCell().textContent = 'Temperature';
        headerRow.insertCell().textContent = 'Wind';  

        people.forEach(weather => {
          const dataRow = table.insertRow();
          dataRow.insertCell().textContent = weather.day;
          dataRow.insertCell().textContent = weather.temperature;
          dataRow.insertCell().textContent = weather.wind;

        });


            // Append the table to the DOM
         //   const appDiv = document.getElementById('app');
//  const appDiv = console.log()
        //    appDiv?.appendChild(table);
       // console.log(table.appendChild(table))
       const log = data.appendChild(table);
       console.log(log)
      })
          .catch(error => {
            console.error(`Error fetching data from API. ${error}`);
          });


//-------------------------------------------------------------------------------------
*/



/*

const apiUrl = 'https://goweather.herokuapp.com/weather/ny';


// Define a TypeScript interface to describe the expected data structure
interface Weather {
  day: string;
  temperature: string;
  wind: string;
}

// Fetch data from the API using fetch API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const people: Weather[] = data.results;
        // Create the table dynamically using JavaScript
        const table = document.createElement('table');
        const headerRow = table.insertRow();
        headerRow.insertCell().textContent = 'Day';
        headerRow.insertCell().textContent = 'Temperature';
        headerRow.insertCell().textContent = 'Wind';

    
        people.forEach(weather => {
          const dataRow = table.insertRow();
          dataRow.insertCell().textContent = weather.day;
          dataRow.insertCell().textContent = weather.temperature;
          dataRow.insertCell().textContent = weather.wind;

        });






            // Append the table to the DOM
    const appDiv = document.getElementById('app');
    appDiv?.appendChild(table);
  })
  .catch(error => {
    console.error(`Error fetching data from API. ${error}`);
  });

  
*/

// --------------------------------------------------------------------
/*
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=> response.json())
.then((data) => {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i])
} 
})
.catch((error)=> console.log("cant fetch data"));
*/

/*
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    // Create a table element
    let table = document.createElement("table");
    
    // Create a header row
    let headerRow = table.insertRow();
    let headers = ["Name", "Username", "Email", "Phone"];
    headers.forEach((header) => {
      let th = document.createElement("th");
      th.innerText = header;
      headerRow.appendChild(th);
    });
    
    // Create a row for each user
    data.forEach((user) => {
      let row = table.insertRow();
      let name = row.insertCell();
      name.innerText = user.name;
      let username = row.insertCell();
      username.innerText = user.username;
      let email = row.insertCell();
      email.innerText = user.email;
      let phone = row.insertCell();
      phone.innerText = user.phone;
    });
    
    // Add the table to the page
   // document.body.appendChild(table);
   console.log(.appendChild(table))
  })
  .catch((error) => console.log("cant fetch data"));

  */


  /*
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    // Create a table element
    let table = document.createElement("table");
    
    // Create a header row
    let headerRow = table.insertRow();
    let headers = ["Name", "Username", "Email", "Phone"];
    headers.forEach((header) => {
      let th = document.createElement("th");
      th.innerText = header;
      headerRow.appendChild(th);
    });
    
    // Create a row for each user
    data.forEach((data) => {
      let row = table.insertRow();
      let name = row.insertCell();
      name.innerText = data.name;
      let username = row.insertCell();
      username.innerText = data.username;
      let email = row.insertCell();
      email.innerText = data.email;
      let phone = row.insertCell();
      phone.innerText = data.phone;
    });
    
    // Log the table to the console
    console.log(table.outerHTML);
  })
  .catch((error) => console.log("cant fetch data"));

  */

/*
fetch('https://fakestoreapi.com/products').then((data)=>{
return data.json();
}).then((objectData)=>{
console.log(objectData[0].title);
let tableData= "";
objectData.map((values)=>{
  tableData=`<h1>${values.title} </h1>`
});
document.getElementById("table_body").
innerHTML = tableData;
});

*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////

fetch('https://fakestoreapi.com/products')
.then((response)=> response.json())
.then((data) => {
  for (let i = 0; i < data.length; i++) {
     console.log(data[i])
    //document.getElementById('tab')?.innerHTML 
} 
})
.catch((error)=> console.log("cant fetch data"));


// I could not print this in a table
