import React, { useState } from 'react'
import './MainPage.css'
export default function MainPage() {
    const [InputEmail,SetUseEmail]=useState('')
    const [FetchedData, SetData] = useState('')
    const CheckExistance=async()=>{
        await fetch(`http://localhost:4000/?Email=${InputEmail}`).then(response=>response.json().then(data=>{
            console.log(data['response'])
            SetData(`${data['response']}`)
            
        })).then(()=>{
            console.log(FetchedData)
        })

    }
  return (
    <div className='MainPageClass'>
        <div className='LoginContainerClass'>
              <input type="text" placeholder="Email" className='InputTypeClass' onChange={(e)=>SetUseEmail(e.target.value)} />
              <div className='btmLogin' onClick={()=>CheckExistance()}><p>Login</p></div>
              <div className='DivResult'><p>{FetchedData}</p></div>
            
        </div>
      
    </div>
  )
}

