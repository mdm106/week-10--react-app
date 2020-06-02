// import axios with configuration
import axios from "./axios";

// ...challenges here
//Challenge 1
axios.get("/articles").then(({ data }) => {
    console.log(data.data);
});

//Challenge 2
// axios.post("/articles", {
//     title: "Tuesday afternoon",
//     content: "It was very hot",
//     tags: ["hot", "sunny"],
// }).then(({ data }) => {
//     console.log(data.data.id);
// })

//Challenge 3
axios.get("/articles/84").then(({ data }) => {
    console.log(data.data);
})

//Challenge 4
axios.patch("/articles/87", {
    tags: ["hot", "sunny", "day"],
}).then(({ data }) => {
    console.log(data.data.tags);
})

//Challenge 5
axios.delete("/articles/82").then(console.log("Deleted"));