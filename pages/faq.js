import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function Faq() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}> HOW TO EARN</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Stake in BNB ,Earn Cake as profit for a period of 24 days (576 Hrs) as Yields are Auto compounded daily….
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>PROPSPECT</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        NO VULNERABILITIES, NO BACKDOORS, HIGH YIELD OPTIMIZATION
                        A FIRST COME FIRST SERVE BASED SHORT-PERIOD YIELD OPTIMIZER
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>SAFE EARNINGS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    A FAST De-Fi BASED PROJECT WITH ALMOST IMPOSSIBLE EARNINGS

                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}
