import express from "express";
import cors from "cors";

const app = express();
app.use(cors())
app.use(express.json())


let user = {
    username: "",
    avatar: "",
    tweet: ""
};

let tweets = [];

app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body
    user.username = username
    user.avatar = avatar

    res.send("OK")

})

app.post("/tweets", (req, res) => {
    const {username,tweet} = req.body


    tweets.push({ username, tweet, avatar: user.avatar})

    res.send("OK")
})

app.get("/tweets", (req, res) => {
    res.send(tweets)
})



app.listen(5000, () => {
    console.log("Server is running on port 5000")
})