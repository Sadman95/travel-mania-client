import { ButtonGroup, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';

const LoadManageGuide = ({guide}) => {
    const {_id, name, email, image} = guide;
    const history = useHistory();
    const [guides, setGuides] = useState([]);

    useEffect(() =>{
      fetch('http://localhost:5555/guides')
      .then(res => res.json())
      .then(data => setGuides(data))
  }, [])

    const handleUpdate = id =>{
        history.push(`/admin/guides/${id}`);
    }

    const handleDelete = id =>{
      fetch(`http://localhost:5555/guides/${id}`, {
        method: 'DELETE',
      })
      .then(res => res.json())
        .then(data => {
            if(data.deletedCount === 1){
                window.confirm('Are you confirm to delete?');
                const restGuides = guides.filter(guide => guide._id !== id);
                setGuides(restGuides)
                window.location.reload();
            }
        })
    }

    return (
        <Card sx={{ display: 'flex', alignItems: 'center', gap: 5, margin: '16px 0'}}>
            <CardMedia
        component="img"
        sx={{ height: 200, width: 200 }}
        image={image}
        alt="guide"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {email}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Id: {_id}
          </Typography>
          <ButtonGroup>
              <Button onClick={() =>handleUpdate(_id)} className='me-2' variant='contained' color='secondary'>Update</Button>
              <Button onClick={() =>handleDelete(_id)} variant='contained' color='error'>Delete</Button>
          </ButtonGroup>
        </CardContent>
      </Box>
    </Card>
    );
};

export default LoadManageGuide;