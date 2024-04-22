
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Typography } from '@mui/material';
import { AppBar, Button, Toolbar} from '@mui/material';


export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 1600 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image="https://www.photosession.com.au/photography/wp-content/uploads/2021/06/food-photography-sunshine-coast.jpg"
          alt=""
          sx={{
            opacity: 0.8,
          }}
        />
        <Typography
          variant="h1"
          component="div"
          sx={{
            position: 'absolute',
            textAlign: 'center',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color:  'rgba(0, 0, 0, 0.5)',
            // backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '10px',
            borderRadius: '5px',
            fontWeight:'bold'
          }}
        >
          RED STILLETTO 
        </Typography>
      </CardActionArea>
    </Card>
  );
}





