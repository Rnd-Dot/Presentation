import { Button } from '@mui/material';

const MyButton = ({children, ...props}) => {
    return (
        <Button variant="contained" size="small" {...props}>
            {children}
        </Button>
    );
};

export default MyButton;