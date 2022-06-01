import React,{useState} from 'react'
import '../Component/Styles/download.css'

export default function Download() {
    const [data] = useState({
        id: 1,
    
        sentence: [
          {
        
            value: "have a good day",
            color: [
             
              {
        
                color: "blue",
                value: "red",
    
              }
            ]
          },
          {
            id: 2,
            
            sentence: [
              {
                
                value: "Dont give up",
                color: [
                  {
                    
                    color: "yellow",
                    value: "#123456"
                  }
                  
                ]
              },
              
            ]
          }
        ]
      });
    
      console.log(data);
    
      const exportData = () => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
          JSON.stringify(data)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = "data.json";
    
        link.click();
      };
  return (
    <div className="downloaded">
      <button type="button" onClick={exportData} className="btn">
        Download
      </button>
    </div>
  )
}
