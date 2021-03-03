import { memo } from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { branch } from '../../hocs/branch';
import { renderNothing } from '../../hocs/renderNothing';
import { isEmptyArray } from '../../utils/arrays';

const TopicsTable = ({ topics, handleDeleteTopic }) => (
  <Table>
    <thead>
      <tr>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      {topics.map(({ _id, name }, index) => (
        <tr id={_id} key={_id || index}>
          <td style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ margin: 0 }}>{name}</p>
            <p
              style={{ marginLeft: 'auto', cursor: 'pointer' }}
              onClick={() => handleDeleteTopic(name)}
            >
              X
            </p>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);
TopicsTable.propTypes = {
  topics: PropTypes.array.isRequired,
  handleDeleteTopic: PropTypes.func,
};

const enhance = branch(({ topics }) => isEmptyArray(topics), renderNothing);

export default memo(enhance(TopicsTable));
