import { IconButton } from '@mui/material'
import { JournalLayout } from '../Layout/JournalLayout'
import { NothingSelected, NotView } from '../View/index'
import { AddOutlined } from '@mui/icons-material'

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NotView/>

        <IconButton
          size='large'
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', 'opacity': 0.7},
            position: 'fixed',
            right: 50,
            bottom: 50,
          }}
        >
          <AddOutlined sx={{fontSize: 30}}/>
        </IconButton>

    </JournalLayout>
  )
}
