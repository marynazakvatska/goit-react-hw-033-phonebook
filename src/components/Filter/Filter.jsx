
import PropTypes from 'prop-types';
import css from './Filter.module.css'

const Filter = ({value, onChange}) => {
    

    return ( <label >Find contacts by name 
               <input className={css.label_filter}
                 value={value}
        onChange={onChange}
           type="text"
           name="name"
         
                      
        style={{
             fontSize: 26, 
             width: "300px",
           height: "40px"}}
               />
                </label>)

}
  
   
export default Filter

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}