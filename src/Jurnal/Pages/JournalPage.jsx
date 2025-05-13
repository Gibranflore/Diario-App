import { IconButton } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { AddOutlined } from '@mui/icons-material'

import { JournalLayout } from '../Layout/JournalLayout'
import { NothingSelected, NotView } from '../View/index'
import { startNewNote } from '../../App/journal'


export const JournalPage = () => {

  const dispatch = useDispatch();
  const {active, isSaving}  = useSelector( state => state.Journal)
  
  const onClickNewNote = () => {
    dispatch( startNewNote() );
  }

  return (
    <JournalLayout>
      
      {
        (!!active)
        ?  <NothingSelected/> // si "NO" hay nota activa muestra esta pagina
        :  <NotView/>         // "SI" hay nota activa esta enseña
      }

        <IconButton
          disabled={isSaving}
          onClick={ onClickNewNote }
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
