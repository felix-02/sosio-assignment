import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import './styles.css'

export default function Header(props) {
    return (
        <div>
            <Grid container alignItems="center">
                <Grid item xs={3}>
                    <h1>{props.user}</h1>
                    <p style={{color:'grey'}}>{props.bio}</p>
                </Grid>
                <Grid item xs={9} className="btn" >
                    <Button className="cont" variant="contained">
                        <Link className="no-link" to="/create">
                            create new{" "}
                        </Link>
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
