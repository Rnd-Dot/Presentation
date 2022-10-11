import { Pagination } from '@mui/material';

const MyPagination = ({count, page, setPage}) => {
    return (
        <Pagination count={count}
            page={page}
            onChange={(_, num) => setPage(num)} 
        />
    )
}

export default MyPagination;
