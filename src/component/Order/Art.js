import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Pet from '../../Image/pet8.png';
function Art() {
  return (
    <div class="row">
      <div class="column">
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={Pet}
              alt="green iguana"
            />
            <div className='Box_Ava'>
              <img src={Pet} alt=""></img>
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color="white">
                Lizard
              </Typography>
              <Typography variant="body2" color="white">
                Lizards are a widespread group of squamate reptiles
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Buy now
            </Button>
          </CardActions>
        </Card>
      </div>
      <div class="column">
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={Pet}
              alt="green iguana"
            />
            <div className='Box_Ava'>
              <img src={Pet} alt=""></img>
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color="white">
                Lizard
              </Typography>
              <Typography variant="body2" color="white">
                Lizards are a widespread group of squamate reptiles
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Buy now
            </Button>
          </CardActions>
        </Card>
      </div>
      <div class="column">
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={Pet}
              alt="green iguana"
            />
            <div className='Box_Ava'>
              <img src={Pet} alt=""></img>
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color="white">
                Lizard
              </Typography>
              <Typography variant="body2" color="white">
                Lizards are a widespread group of squamate reptiles
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Buy now
            </Button>
          </CardActions>
        </Card>
      </div>
      <div class="column">
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={Pet}
              alt="green iguana"
            />
            <div className='Box_Ava'>
              <img src={Pet} alt=""></img>
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color="white">
                Lizard
              </Typography>
              <Typography variant="body2" color="white">
                Lizards are a widespread group of squamate reptiles
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Buy now
            </Button>
          </CardActions>
        </Card>
      </div>
      <div class="column">
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={Pet}
              alt="green iguana"
            />
            <div className='Box_Ava'>
              <img src={Pet} alt=""></img>
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color="white">
                Lizard
              </Typography>
              <Typography variant="body2" color="white">
                Lizards are a widespread group of squamate reptiles
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Buy now
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}

export default Art
