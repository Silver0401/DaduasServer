const express = require("express")
const app = express()
let port = process.env.PORT || 4000
app.use(express.json())


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.get("/Imagen1", (req,res) => {

  res.sendFile(__dirname + "/resources/testingCat.jpeg")

})

app.listen(port, () => console.log(`App server initalized on port ${port}`))

