import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const List = styled.ul`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`

const Item = styled.li`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Button = styled.button`
  cursor: pointer;
  margin: 0 auto;
  display: block;
  margin-bottom: 10px;
  background-color: transparent;
  border: 1px black solid;
  padding: 10px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const ContactList = ({ data, contactDelete }) => {
    const createContact = obj => {
        return (
          <Item key={obj.id}>
            <p>{obj.name}</p>
            <p>{obj.number}</p>
            <Button type="button" onClick={() => contactDelete(obj.id)}>
              Delete Contact
            </Button>
          </Item>
        );
    }

    if (data.filter) {
        return (
            <List>{data.contacts.filter(({name}) => name.toLowerCase().includes(data.filter.toLowerCase())).map(el => {
                return createContact(el)
            })}</List>
        )
    }

    return (
        <List>{data.contacts.map(el => (createContact(el)))}</List>
    )
};

ContactList.propTypes = {
    data: PropTypes.shape({
        contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
        filter: PropTypes.string.isRequired,
    }),
    contactDelete: PropTypes.func.isRequired,
}