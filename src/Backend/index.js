const express = require('express')
const cors = require('cors');
const app = express()
const port = 4000
app.use(cors());

app.get('/', async (req, res) => {
    const Email_ = req.query.Email; 
    console.log('Email :' + Email_)
    const FetchData = await fetch('https://www.zohoapis.com/crm/v2/Leads', {
        method: 'GET',
        
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Zoho-oauthtoken  1000.b18c596a87644c61b9de51f9afc74bac.e555d6edc853f1d83129876bd63e5c33'
        },
    }).then(respos => respos.json().then(data => {
        console.log(data.data.filter((fetchedData) => fetchedData.Email == Email_))
        if (data.data.filter((fetchedData) => fetchedData.Email == Email_).length>0){
            return res.json({
                'response':'exist'

            })
        }else{
            return res.json({
                'response': 'not exist'

            })
        }
      
        
    }))

   
  
})

app.listen(port)
