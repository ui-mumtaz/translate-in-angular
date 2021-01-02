/*
async
------
    e.g
async function getDate() {
    return 'Data Received'
}

getData().then(console.log)

Note: the main point is  when we use "async" keyword it means that function return
promise   as it is returning promise so we are using   ".then()" for result

--------------------------------------------------------------------

async/await
-----------

let promise22 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('Data Received')
    }, 3000);
})
async function getData(){
    let response22 = await promise22;
    console.log(respinse22)
}

getData()

Note: we have to use "await" inside the "async"  and await will wait for data still it recieve as it recieve the data
after that we will get the printout.
 */


let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');
let result3 = document.getElementById('result3');

let dell = {
  brand: 'Dell',
  hardDisk: '2 TB',
  color: 'Black'
}

let buyLaptop = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(dell)
  },3000);
});


let buyLaptop2 = fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response11 => response11.json());




// example 1
function fetch1() {
  result1.innerText = 'Fetching Data...';

  buyLaptop.then(res => {
    console.log(res)
    result1.innerText = JSON.stringify(res);
  });
}


// example 2 with async-await , await need to put under async
async function fetch2() {
  result2.innerText = 'Fetching Data'

  let data = await buyLaptop;
  result2.innerText = JSON.stringify(data);
}


/* example with Fetch Api  with Promise

function fetch3() {
    result3.innerText = 'Fetching Data...';

    buyLaptop2.then(res => {
     result3.innerText = JSON.stringify(res);
    });
}
*/

// example with Fetch Api  with Promise

async function fetch3() {
  result3.innerText = 'Fetching data...';

  let res = await buyLaptop2;
  result3.innerText = JSON.stringify(res);
}














