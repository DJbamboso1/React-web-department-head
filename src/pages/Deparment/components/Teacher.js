import { TableCell, TableRow, Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React, { useEffect, useState } from 'react'

export default function Teacher({ lecId, lecName, lecType, lecStatus, lecRating }) {

    const [rating, setRaing] = useState(lecRating);
    let [update, setUpdate] = useState(false)


    function updateHandle(){
        setUpdate(false)
    }


    return (
        <TableRow key={lecId}>

            <TableCell>{lecName}</TableCell>
            <TableCell>{lecType}</TableCell>
            <TableCell align="left">{lecStatus}</TableCell>
            <TableCell>
                <Rating
                    value={rating}
                    onChange={(event, newValue) => {
                        setRaing(newValue)
                        setUpdate(true)
                    }}
                />
            </TableCell>
            <TableCell>
                {
                    update && <Button variant="contained" color="primary" onClick={updateHandle}>Update</Button>
                }
            </TableCell>

        </TableRow>
    )
}
