import PropTypes from 'prop-types';
import { Btn } from './Contact.styled';
import { Number } from './Contact.styled';

const Contact = ({ name, number, id, onDeleteContact }) => (
  <>
    <p>
      {name}: <Number>{number}</Number>
    </p>
    <Btn type="button" onClick={() => onDeleteContact(id)}>
      Delete
    </Btn>
  </>
);

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
