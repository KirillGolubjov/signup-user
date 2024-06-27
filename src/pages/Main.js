import { useEffect, useState, lazy, Suspense } from 'react';
import styled from 'styled-components';

import Spinner from '../components/Spinner';
import Intro from '../components/Intro';

import { fetchUsers } from '../api/apiService';

const UserList = lazy(() => import('../features/users/UserList'));
const SignUp = lazy(() => import('../features/authentication/SignUp'));

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 140px;
  margin-bottom: 100px;
`;

function Main() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [allUsersFetched, setAllUsersFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getUsersData = async (page) => {
    setIsLoading(true);
    try {
      const { users, total_pages } = await fetchUsers(page);
      setUsers((prevUsers) => (page === 1 ? users : [...prevUsers, ...users]));
      setAllUsersFetched(page >= total_pages);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsersData(currentPage);
  }, [currentPage]);

  const updateUserList = async () => {
    setIsLoading(true);
    try {
      const data = await fetchUsers(1);
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMoreUsers = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <StyledMain>
      <Intro />

      <Suspense fallback={<Spinner />}>
        <UserList
          users={users}
          allUsersFetched={allUsersFetched}
          isLoading={isLoading}
          loadMoreUsers={loadMoreUsers}
        />
        <SignUp updateUserList={updateUserList} />
      </Suspense>
    </StyledMain>
  );
}

export default Main;
