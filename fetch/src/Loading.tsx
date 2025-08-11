import * as React from 'react';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';

export default function LoadingButtons() {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>

      </Stack>
      <Button
        fullWidth
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
        style={{color:"red",backgroundColor:"white"}}

      >
         Fetching  data Please Wait 
      </Button>

     
    </Stack>
  );
}
