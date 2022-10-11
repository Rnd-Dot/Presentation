import { TextField } from '@mui/material';
import React from 'react';

const MyInput = React.forwardRef((props, label) => {
    return (
        <TextField id="outlined-basic" label={label} variant="outlined"   {...props}/>
    );
});

export default MyInput;