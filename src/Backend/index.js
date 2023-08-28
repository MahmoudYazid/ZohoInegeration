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
            'Authorization': 'Zoho-oauthtoken  1000.8db30dc9e0b726812c42dbe16ce5819a.4efb1d4425002e1445ef98193b4b2086'
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