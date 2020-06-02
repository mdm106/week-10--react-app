// import axios with configuration
import axios from "./axios";

// ...challenges here
//Challenge 1
axios.get("/articles").then(({ data }) => {
    console.log(data.data);
});

//Challenge 2
axios.post("/articles", {
    title: "Tuesday afternoon",
    content: "It was very hot",
    tags: ["hot", "sunny"],
}).then(({ data }) => {
    console.log(data.data.id);
})