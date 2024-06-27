import { Fragment } from 'react';

import UserCard from './UserCard';
import Row from '../../components/Row';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Spinner from '../../components/Spinner';
import { GridView } from '../../components/GridView';

function UserList({ users, isLoading, allUsersFetched, loadMoreUsers }) {
  const sortedUsers = [...users].sort(
    (a, b) => b.registration_timestamp - a.registration_timestamp
  );

  return (
    <Row id='user-list' className='media'>
      <Heading as='h1'>Working with GET request</Heading>

      {!sortedUsers.length && <Heading as='h2'>Users couldn't load</Heading>}

      <GridView>
        {sortedUsers.map((user, index) => (
          <Fragment key={user.id}>
            <UserCard user={user} />

            {index === users.length - 1 && isLoading && (
              <div style={{ gridColumn: 'span 3' }}>
                <Spinner />
              </div>
            )}
          </Fragment>
        ))}
      </GridView>

      {!allUsersFetched && !isLoading && (
        <Button style={{ alignSelf: 'center' }} onClick={loadMoreUsers}>
          Show more
        </Button>
      )}
    </Row>
  );
}

export default UserList;
