import PropTypes from 'prop-types';
import css from './ContactList.module.css'

const ContactList = ({ contacts, onDelete }) => {
 
    return (<ul className={css.list_contacts}>
      {contacts.map(({ id, name, number }) => {
      
          return  (
                <li className={css.element} key={id}>
                    <p >{name} :</p> <p className={css.number}>{number}</p>
                  <button className={css.btn} onClick={() => onDelete(id)}>Delete</button>
                    
              </li>
          )
        }
        )}
      </ul>)
}
    
export default ContactList


ContactList.propTypes = {
  /*    contacts: PropTypes.array.isRequired, */
    contacts: PropTypes.arrayOf(
     PropTypes.shape({
       id: PropTypes.any,
       name: PropTypes.string.isRequired,
       number: PropTypes.string.isRequired
  })),
    onDelete: PropTypes.func.isRequired
}