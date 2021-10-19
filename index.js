const express = require('express')
const app = express()
const cors = require('cors')

var port = process.env.PORT || 8080;

app.use(express.static('static'))
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.listen(port, () =>
    console.log(`HTTP Server with Express.js is listening on port:${port}`))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
})


app.get('/age', function(req, res) {
    var year = (req.query.year)
    console.log(2020-Number(year))
    var temp =(2020-Number(year))
    var computeSign= Number(year)%12
    var sign="";
        if(computeSign==0)
        {
            sign="Aquarius"
        }
        else if(computeSign==1)
        {
            sign="Pisces"
        }
        else if(computeSign==2)
        {
            sign="Aries"
        }
        else if(computeSign==3)
        {
            sign="Taurus"
        }
        else if(computeSign==4)
        {
            sign="Gemini"
        }
        else if(computeSign==5)
        {
            sign="Cancer"
        }
        else if(computeSign==6)
        {
            sign="Leo"
        }
        else if(computeSign==7)
        {
            sign="Virgo"
        }
        else if(computeSign==8)
        {
            sign="Libra"
        }
        else if(computeSign==9)
        {
            sign="Scorpio"
        }
        else if(computeSign==10)
        {
            sign="Sagittarius"
        }
        else if(computeSign==11)
        {
            sign="Capricorn"
        }
        else{
            sign="Error"
        }

        var total= ("Your age is: " + temp + " and your Sunsign according to Indian Zodiac is: "+sign).toString()
    res.send(total)
})



