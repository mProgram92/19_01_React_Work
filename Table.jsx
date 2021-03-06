import react, { useState } from "react";
import MockData from '../MOCK_DATA.json';
export default function Table(){
    const [data, setData] = useState(MockData)
    return(
        <div className="container">
            <table class="table table-striped">
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                </thead>
                <tbody>
                    {data.map((d)=>(
                        <tr key={d.id}>
                            <td>{d.first_name}</td>
                            <td>{d.last_name}</td>
                            <td>{d.email}</td>
                            <td>{d.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}