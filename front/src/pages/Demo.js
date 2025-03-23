import React from 'react'
import { useFetchUserQuery} from "../redux/product";


export default function Demo() {
    
    const { data, error, isLoading } = useFetchUserQuery();
    
    if (isLoading) return <p className="text-dark">Loading...</p>;
    if (error) return <p className="text-danger">Error: {error.message}</p>;
  
    return (
      <div>
        {data.map((value)=>{
            return (
                <ul>
                    <li>{value.title}</li>
                </ul>
            )
        })}
      </div>
    );
}
