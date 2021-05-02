import React from "react"

export default function MakeRowForMake(props) {
    return (
        <tr key={props.obj.Make_Name}>
            <td key={props.index}>{props.index+1}</td>
            <td key={props.obj.Make_ID}>{props.obj.Make_ID}</td>
            <td key={props.obj.Make_Name}>{props.obj.Make_Name}</td>
        </tr>
    );
}
