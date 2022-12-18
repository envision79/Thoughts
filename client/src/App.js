import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Thoughts from "./components/Thoughts/Thoughts.js";
import Form from "./components/Form/Form.js";
import useStyles from './styles';
import { useDispatch } from "react-redux";
import { getThoughts } from './actions/thoughts.js';
import './index.css';
const App = () => {
    const [currentId, setCurrentId] = useState(null);

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getThoughts());
    }, [currentId, dispatch])

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">
                    Thoughts
                </Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Thoughts setCurrentId={ setCurrentId }/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={ currentId } setCurrentId={ setCurrentId }/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;