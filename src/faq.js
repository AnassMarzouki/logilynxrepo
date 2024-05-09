import faq from "./faq.png"
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import useToggle from "./useToggle"
import questions from "./faqQuestions"

export default function Faq () {
    const [on1, setOn1] = useToggle(false)
    const [on2, setOn2] = useToggle(false)
    const [on3, setOn3] = useToggle(false)
    const [on4, setOn4] = useToggle(false)
    const [on5, setOn5] = useToggle(false)
    const [on6, setOn6] = useToggle(false)


    return (
        <div className="faq-section">
            <div className="questions">
                <h1>Frequently Asked Questions</h1>

                        <List
                sx={{ width: '100%', maxWidth: 760, bgcolor: 'background.paper' }}
                component="div"
                aria-labelledby="nested-list-subheader">
                    
                <ListItemButton onClick={()=> setOn1.toggle()}>
                    <ListItemText primary={questions[0].question} />
                    {on1 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={on1} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>

                        <ListItemText primary={questions[0].answer} className="answer-txt"/>
                    </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={()=> setOn2.toggle()}>
                    <ListItemText primary={questions[1].question} />
                    {on2 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={on2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>

                        <ListItemText primary={questions[1].answer} />
                    </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={()=> setOn3.toggle()}>
                    <ListItemText primary={questions[2].question} />
                    {on3 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={on3} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>

                        <ListItemText primary={questions[2].answer} />
                    </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={()=> setOn4.toggle()}>
                    <ListItemText primary={questions[3].question} />
                    {on4 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={on4} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>

                        <ListItemText primary={questions[3].answer} />
                    </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={()=> setOn5.toggle()}>
                    <ListItemText primary={questions[4].question} />
                    {on5 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={on5} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>

                        <ListItemText primary={questions[4].answer} />
                    </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={()=> setOn6.toggle()}>
                    <ListItemText primary={questions[5].question} />
                    {on6 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={on6} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>

                        <ListItemText primary={questions[5].answer} />
                    </ListItemButton>
                    </List>
                </Collapse>

                </List>


            </div>

        <div className="faq-image">
          <img src={faq} alt="FAQ illustration"></img>
        </div>

        </div>
    )
}