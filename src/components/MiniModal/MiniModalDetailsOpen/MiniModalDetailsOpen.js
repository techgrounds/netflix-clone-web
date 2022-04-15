import FilmInfoModalDetails from '../../FilmInfoModalDetails/FilmInfoModalDetails'
import FilmInfoModalSuggestions from '../../FilmInfoModalSuggestions/FilmInfoModalSuggestions'

const  MiniModalDetailsOpen =  () => {
    return(
      <div className="MiniModalDetailsOpen">
        <FilmInfoModalDetails />
        <FilmInfoModalSuggestions />
      </div>
    )}

export default MiniModalDetailsOpen;