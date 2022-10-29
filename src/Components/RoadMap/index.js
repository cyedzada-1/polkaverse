import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Paper } from '@material-ui/core';
import './road-map.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import roadmap from '../../assets/Images/roadmap1.jpg'
const paperstyle={
    padding: '16px 1px',
    textAlign:'center',
    background:'linear-gradient(to left, #7206A4, #0BA2E5)',
   
}
export default function RoadMap() {
  return (
      <div className="road-ackground">
      <div className="container">
        <h1 className="h1">RoadMap</h1>
        <div className="roadmap-grid">
        <div className="roadmap">
    <Timeline align="alternate">
    <TimelineItem >
        <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent data-aos="fade-left">
        <Paper elevation={3} style={paperstyle}>
            <h2 className="road-heading">Q4 2020</h2>
            Polkaverse Team Assembled and Ideas were proposed 
        </Paper>
        </TimelineContent>
    </TimelineItem>
    <TimelineItem >
        <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent data-aos="fade-right">
        <Paper elevation={3} style={paperstyle}>
        <h2 className="road-heading">Q4 2020</h2>
            Polkaverse Team Assembled and Ideas were proposed 
        </Paper>
        </TimelineContent>
    </TimelineItem>
    <TimelineItem >
        <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent  data-aos="fade-left">
        <Paper elevation={3} 
               style={paperstyle}>
                   <h2 className="road-heading">Q1 2021</h2>
                   Platform Development 
        </Paper>
        </TimelineContent>
    </TimelineItem>
    <TimelineItem  >
        <TimelineSeparator>
            <TimelineDot color="primary"/>
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent data-aos="fade-right">
        <Paper elevation={3} 
               style={paperstyle}>
                 <h2 className="road-heading">Q2 2021</h2>
                 Marketing and partnerships with top existing companies.
        </Paper>
        </TimelineContent>
    </TimelineItem>
    <TimelineItem  >
        <TimelineSeparator>
            <TimelineDot color="primary"/>
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent data-aos="fade-left">
        <Paper elevation={3} 
               style={paperstyle}>
                   <h2 className="road-heading">Q3 2021- Q1 2022</h2>
                   Launch of Polkaverse native token PKV and platform enhancement. 
                          </Paper>
        </TimelineContent>
    </TimelineItem>
    <TimelineItem>
        <TimelineSeparator>
            <TimelineDot color="primary"/>
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent data-aos="fade-right">
        <Paper elevation={3} 
               style={paperstyle}>
                   <h2 className="road-heading">Q2-Q3 2022</h2>
                   NFT marketplace Release 
                    Farming Live
                    Game release (testnet) 
                    Game Development 
                    Mobile App launch
        </Paper>
        </TimelineContent>
    </TimelineItem>
    <TimelineItem>
        <TimelineSeparator>
            <TimelineDot />
        </TimelineSeparator>
        <TimelineContent data-aos="fade-left">
        <Paper elevation={3} 
               style={paperstyle}>
                <h2 className="road-heading">Q3 2022</h2>
                Improving and updating game 
        </Paper>
        </TimelineContent>
    </TimelineItem>
</Timeline>

</div>
<div  data-aos="fade-left" className="road-map-img">
    <img  src={roadmap} width="100%"/>
</div>
</div>
</div>
</div>
  );
}