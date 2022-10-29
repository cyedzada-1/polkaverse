import React,{useState} from 'react'
import './faq.css'
import faq1 from '../../assets/Images/faq.jpg'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function FAQ() {
    const [faq,setFaq]=useState(false)
   const handleFaq=()=>{
        setFaq(!faq)
    }
    return (
        <div>
             <div>
            <div className="container">
            <div className="faq">
            <div>
            <h2 >We have all the answers.</h2>
           
            <p style={{fontSize:19,color:"grey",marginBottom:30}}>We do understand a big project might be confusing and you may have some questions. Here are the most common we usually get:</p>

                 <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="heading">What is PolkaFinance?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    PolkaFinance is a first platform to bring NFTs on HECO with Staking and highest Yield Farming.
                    </Typography>
                    </AccordionDetails>
                    </Accordion>
                     <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className="heading">Why HECO?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    Because it is the most efficient, fast and lowest fee Mainnet right now.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className="heading">Is the team experienced?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    Yes, with years of experience in blockchain technology the polka team is here with this project.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className="heading">What is the goal of PLF?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    To free the Crypto World from high gas fees and Sore Long Blocktimes
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div>
                <img src={faq1} width="100%"/>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default FAQ
