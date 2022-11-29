import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import { ListItem } from './ContactList.styled';
import Contact from 'components/Contact';

const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ name, number, id }) => (
      <ListItem key={id}>
        {' '}
        <Contact
          name={name}
          number={number}
          id={id}
          onDeleteContact={onDeleteContact}
        />
      </ListItem>
    ))}
  </List>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
