// console.log("Hello world");

// DOM Method
// document.getElementById -- document is the html file, then you get the element with an id of date

const dateElement = document.getElementById("date");
// console.log(dateElement);

// new Date() -- is a date constructor that would allow us to retrieve our date
let currentDate = new Date();
// console.log(currentDate)




// numeric - number; long - word
let dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric"
};

// toLocaleDateString -- allow us to change the format of the date/time
// it has two argument -- (1) date format (US format -- Month/Day/Year), (2) To further change the format -- to string or number (Month Day, Year)   
dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dateOptions)

// Twitter Trends
const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '9749c24458msh7f18dc0f18cc187p1f5bd7jsnd64fd65afcf9',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com',
		'Content-Type': 'application/x-www-form-urlencoded'
	},
    // place your woeid here (country code)
	body: new URLSearchParams({ woeid:'23424934'})
};


// the options here is the request for the API -- if we want a coffee, then we can further request for a coffee with no sugar or more milk
let graphData = [];
fetch(url, options)
.then(res => res.json())
.then(data => {
    console.log(data)

    console.log(graphData.length);
    for (let i = 0; i < 25; i++) {
        graphData.push(
            {
                "name": data.trends[i].name,
                "volume": data.trends[i].volume,
            }
        )
    }


    let topics = graphData.map(object => {
        console.log(object);
        console.log(object.name);
        return object.name
    })

    let volumes = graphData.map(object => {
            return object.volume
        })

    console.log(volumes);

    const myChart = document.getElementById('myChart');

    let barChart = new Chart(myChart, {
        type: 'bar',
        data: {
            labels: topics,
            datasets: [{
                label: '# of Tweets',
                data: volumes,
                borderWidth: 2,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                hoverBackgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
            }]
        },
        options: {
            indexAxis: "y",
            scales: {
                y: {
                    beginAtZero: true
                    }
            }
        }
    });
});



// // =========================
// // dummy data to comment out
// // =========================

// let myPost = {
//     name: "Lee Sung Kyung",
//     queryUrl: "search?q=%22Lee+Sung+Kyung%22",
//     volume: 31799,
//     followers: 3895734
// }

// console.log(myPost);
// console.log(myPost.name);
// console.log(myPost.queryUrl);
// console.log(myPost.volume);
// console.log(myPost.followers)


// let graphData = [
//         {name: "#PorDeeReunion", queryUrl: "search?q=%23PorDeeReunion", volume: 67000},
//         {name: "#BGYO3rdAnniversary", queryUrl: "search?q=%23BGYO3rdAnniversary", volume: 27400}
// ];

// console.log(graphData[0].name);

// graphData.push(myPost);

// // =========================
// // end of dummy data to comment out
// // =========================


