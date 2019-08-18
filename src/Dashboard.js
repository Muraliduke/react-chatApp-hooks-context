import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { ctx } from './store';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '50px',
    padding: theme.spacing(3, 2),
  },
  button: {
    margin: theme.spacing(1),
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px'
  },
  topicSection:{
    width: '40%',
    maxHeight: '300px',
    borderRight: '1px solid grey'
  },
  chatSection: {
    width: '60%',
    maxHeight: '300px',
    overflowY: 'scroll'
  },
  chatBox: {
    width: '85%',
  },
  btnSection: {
    width: '15%'
  },
}));

export default function Dashboard() {
    let [chatValue,setChatData] = React.useState('');
    const [chats, dispatch] = React.useContext(ctx);
    // console.log(dispatch)
    const classes = useStyles();
    let topicsData = [];
    Object.keys(chats) ? (topicsData = Object.keys(chats)) : (topicsData = []);
    let [activeTopic,setTopic] = React.useState(topicsData[0]);
    
    // const chatData=[
    //   {'name': 'user', 'msg': 'Hi how r u?','type': 'topic'},
    //   {'name': 'Murali Duke', 'msg': 'Am fine.How about you?','type': 'topic'},
    //   {'name': 'user', 'msg': 'Am good','type': 'topic'},
    //   {'name': 'Denny', 'msg': 'Am good','type': 'topic'},
    //   {'name': 'pavz', 'msg': 'Am good buddy','type': 'topic'},
    // ]
    // let [chatMsg, setChatMsg] = React.useState(chatData)
    
    

    const chatClick= ()=>{
      const obj = {
        name: 'myMock',
        msg: chatValue,
        type: activeTopic
      };
      console.log(obj)
      dispatch({type: 'ADD_MESSAGE', payload:obj });
      setChatData('');
    }
    return (
        <div>

            <Paper className={classes.root}>
                    <Typography variant="h5" component="h3">
                    Chat Bot
                    </Typography>
                    <Typography component="p">
                    <b>{activeTopic}</b>
                    </Typography>

                    <div className={classes.flex}>

              <div className={classes.topicSection}>
                      <List>
                        { topicsData.map((ele,i)=>{
                         return <ListItem button onClick={(e)=>setTopic(ele)} key={i}>
                            <ListItemText primary={ele} />
                          </ListItem>
                        }) }
                      </List>   
              </div>

              <div className={classes.chatSection}>
                      <List>
                        { chats[activeTopic].map((ele,i)=>{
                         return <div className={classes.flex} key={i}>
                           <Chip label={ele.name} className={classes.chip} />
                           {ele.msg}
                           {/* <ListItemText primary= /> */}
                         </div>
                        }) }
                      </List> 
              </div>

            </div>

            <div className={classes.flex}>
              <div className={classes.chatBox}>
                    <TextField
                        id="input-chat"
                        label="chat"
                        className={classes.chatBox}
                        value={chatValue}
                        onChange={(e)=>setChatData(e.target.value)}
                     />
              </div>
              <div className={classes.btnSection}>
                    <Button variant="contained" color="primary" className={classes.button}
                    onClick={()=>chatClick()}
                    >
                        Primary
                    </Button>
              </div>
            </div>
            </Paper>

            
            
        </div>
    )
}
