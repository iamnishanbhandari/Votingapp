import React from 'react'

 const View = ({info}) => {
    
    return info ? info.map(inform=>(
        
        <tr >
            <td>{inform.name}</td>
            <td>{inform.party}</td>
            <td>{inform.age}</td>
            <td>{inform.qualification}</td>
        </tr>            
    
)):'No data provided'
}
export default View;