/* eslint-disable no-unused-vars */
import React from 'react'
import './Calculator.css'
import {useState} from 'react'
const Calculator = () => {
    const [value , setValue] = useState()
  return (
    <>
       <div id="container">
<div id="calculator">
<form >
    <div id="display">
        <input type="text" name="display" placeholder= "0" value={value} />
        </div>
    
    
<div>
<input type="button" value="AC"  onClick={(e)=>setValue("")} className="me"/>
<input type="button" value="DEL" onClick={(e)=>setValue(value.slice(0,-1))} className="me"/>
<input type="button" value="."   onClick={(e)=>setValue(value + e.target.value)}  className="me"/>
<input type="button" value="/"   onClick={(e)=>setValue(value + e.target.value)} className="me"/>
</div>

    

<div>
    <input type="button" value="7" onClick={(e)=>setValue(value + e.target.value)}/>
    <input type="button" value="8" onClick={(e)=>setValue(value + e.target.value)}/>
    <input type="button" value="9" onClick={(e)=>setValue(value + e.target.value)} />
    <input type="button" value="*" onClick={(e)=>setValue(value + e.target.value)}/>
</div>

<div>
    <input type="button" value="4" onClick={(e)=>setValue(value + e.target.value)}/>
    <input type="button" value="5" onClick={(e)=>setValue(value + e.target.value)}/>
    <input type="button" value="6" onClick={(e)=>setValue(value + e.target.value)}/>
    <input type="button" value="-" onClick={(e)=>setValue(value + e.target.value)}/>
</div>
     <div>
    <input type="button" value="1" onClick={(e)=>setValue(value + e.target.value)}/>
    <input type="button" value="2" onClick={(e)=>setValue(value + e.target.value)}/>
    <input type="button" value="3" onClick={(e)=>setValue(value + e.target.value)} />
    <input type="button" value="+" onClick={(e)=>setValue(value + e.target.value)}/>


</div>
    <div >
    <input type="button" value="0" onClick={(e)=>setValue(value + e.target.value)}/>
    <input type="button" value="00" onClick={(e)=>setValue(value + e.target.value)}/>
    <input type="button" value="=" onClick={(e)=>setValue(eval(value))} className="operator"/>
    <script>
        
    </script>
</div>
     </form>
</div>
     </div>
 
    </>
  )
}

export default Calculator
