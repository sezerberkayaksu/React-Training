import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
export function EntryList(){
  const [entries ,setEntries] = useState();
  useEffect(()=>{
    axios.get('https://api.publicapis.org/entries')
    .then((res)=>{
      const entries = res.data.entries.slice(0,100).map((item,index)=>{
        return(<li><a href = {item.Link}>{item.Description}</a></li>)
      });
      setEntries(entries);
    });
  });
  return(
    <ul>
      {entries}
    </ul>
  );
}