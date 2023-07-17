import {React} from 'react';
export const Button =({onHandleMoreButton})=>{
    
    return(
        <div>
            <button type = "submit" onClick = {onHandleMoreButton}>Load More</button>
        </div>
    )
}