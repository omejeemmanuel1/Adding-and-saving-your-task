import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title, onAdd, showAdd}) => {
   
    return (
        <div className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'blue'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </div>
    )
}
Header.defaultProps = {  
    title: 'Adding a Task'
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
// const HeadStyling = {
//      color: 'green',
//      backgroundColor: 'orange'
// }
export default Header
