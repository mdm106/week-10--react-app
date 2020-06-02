// import axios with configuration
import axios from "./axios";

// ...challenges here
//Challenge 1
axios.get("/articles").then(({ data }) => {
    console.log(data.data);
});