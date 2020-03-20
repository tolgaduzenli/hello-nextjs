import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Layout from '../components/MyLayout';
import Subpost from './Subpost';

export default function Post(props) {
    const [counter, setCounter] = useState(0);
    return (
        <Layout>
            <Grid container>
                <Grid item xs={12}>
                    <Typography>This is the blog post content for {props.title}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Subpost parentTitle={props.title} />
                </Grid>
                <Grid item xs={12} style={{ marginBottom: 10 }}>
                    <span>Counter: &nbsp; {counter}</span>
                </Grid>
                <Grid container item xs={2} justify="space-between">
                    <Button variant="contained" color="primary" onClick={() => setCounter(counter + 1)}>+1</Button>
                    <Button variant="contained" color="secondary" onClick={() => setCounter(counter - 1)}>-1</Button>
                </Grid>
            </Grid>
        </Layout>
    );
}

Post.getInitialProps = async ({ query }) => {
    return { title: query.title };
};