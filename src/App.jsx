import React from 'react';
import Card from './Card';
import Sdata from "./Sdata";

 const ncard=(val)=>{
  // console.log(val)
  return(
    <Card 
    key={val.id}
    imgscr={val.imgscr}
    title={val.title}
    sname={val.sname}
    link={val.links}
    />
  );
}

const App=()=>(
  <>
  <h1 className='heading_style'>Top 6 Nautaunki Haha</h1>
  { Sdata.map(ncard)}
 </>
);
export default App;