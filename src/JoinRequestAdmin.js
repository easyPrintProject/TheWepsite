import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: "20%",
    width:"50%"
  },
});

 function JoinRequestAdmin() {
  const classes = useStyles();

  return (    <Card className={classes.root} style={{margin:"10%",marginLeft:-190}}>
  
  <CardActionArea >
    <CardMedia
     
      alt="Contemplative Reptile"
      height="40"
      title="Contemplative Reptile"
    />
    <CardContent>
      <Typography gutterBottom variant="h3" component="h2">
        اسم المكتبه
      </Typography>
      <Typography variant="body2" color="textSecondary" variant="h4" component="h4">
   بياناتها
      </Typography>
    </CardContent>
  </CardActionArea>
  <CardActions style={{margin:"10%",marginLeft:-19,padding:9}}>
  <Button variant="outlined" color="primary" >
  قبول
</Button>
<div style={{margin:"15%"}}>

</div>
    <Button variant="outlined" color="secondary"  >
  رفض
</Button>
  </CardActions>
  
  <CardActionArea >
    <CardMedia
     
      alt="Contemplative Reptile"
      height="140"
      title="Contemplative Reptile"
    />
    <CardContent>
      <Typography gutterBottom variant="h3" component="h2">
        اسم المكتبه
      </Typography>
      <Typography variant="body2" color="textSecondary" variant="h4" component="h4">
   بياناتها
      </Typography>
    </CardContent>
  </CardActionArea>
  <CardActions style={{margin:"10%",marginLeft:-19,padding:9}}>
  <Button variant="outlined" color="primary" >
  قبول
</Button>
<div style={{margin:"15%"}}>

</div>
    <Button variant="outlined" color="secondary" >
  رفض
</Button>
  </CardActions>
  
</Card>
);
}
export default JoinRequestAdmin
