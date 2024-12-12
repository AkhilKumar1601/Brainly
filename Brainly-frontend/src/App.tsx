import { Button } from './components/Button'
import { Card } from './components/Card'
import { AddIcon } from './icon/AddIcon'
import { ShareIcon } from './icon/ShareIcon'

function App() {

  return (
    <>
     <Button variant="primary" text='Add Content' icon={<AddIcon/>}></Button>
     <Button variant='secondary' text = 'Share Brain' icon={<ShareIcon/>}></Button>

     <Card />
    </>
  )
}

export default App
