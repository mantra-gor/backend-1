require('dotenv').config()

const express = require("express")
const app = express()

const PORT = process.env.PORT

const githubData = {
    "login": "Mantragor",
    "id": 62030674,
    "node_id": "MDQ6VXNlcjYyMDMwNjc0",
    "avatar_url": "https://avatars.githubusercontent.com/u/62030674?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Mantragor",
    "html_url": "https://github.com/Mantragor",
    "followers_url": "https://api.github.com/users/Mantragor/followers",
    "following_url": "https://api.github.com/users/Mantragor/following{/other_user}",
    "gists_url": "https://api.github.com/users/Mantragor/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Mantragor/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Mantragor/subscriptions",
    "organizations_url": "https://api.github.com/users/Mantragor/orgs",
    "repos_url": "https://api.github.com/users/Mantragor/repos",
    "events_url": "https://api.github.com/users/Mantragor/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Mantragor/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 0,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2020-03-10T17:48:33Z",
    "updated_at": "2020-03-10T17:48:34Z"
  }

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/twitter', (req, res) => {
    res.send('<a href="https://www.twitter.com">Twitter Link</a> Visit my Twitter Account')
})

app.get('/github', (req,res) => {
    res.json(githubData)
})

app.listen(PORT, () => {
    console.log("Server Started at port:", PORT);
})