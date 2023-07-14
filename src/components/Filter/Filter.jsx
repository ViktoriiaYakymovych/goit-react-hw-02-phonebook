import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Text = styled.p`
    margin-bottom: 10px;
`

export const Filter = ({ filteredValue, filterChange }) => {
    return (
      <div>
        <label>
          <Text>Find contacts by name</Text>
          <input
            type="text"
            onChange={filterChange}
            name="filter"
            value={filteredValue}
          />
        </label>
      </div>
    );
}

Filter.propTypes = {
    filterChange: PropTypes.func.isRequired,
    filteredValue: PropTypes.string.isRequired,
}