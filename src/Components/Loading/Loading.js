import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import LoadingImg from '../../img/loading.gif'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
    },
}));


const Loading = (props) => {
    const classes = useStyles();

    return (
        <div >
            <Backdrop className={classes.backdrop} open={props.openLoading}>
                <img src={LoadingImg}/>
            </Backdrop>

        </div>
    );
}

export default Loading
