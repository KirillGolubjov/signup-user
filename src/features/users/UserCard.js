import styled from 'styled-components';

import Row from '../../components/Row';
import Tooltip from '../../components/Tooltip';

const Card = styled(Row)`
  position: relative;
  background-color: var(--color-white);
  padding: 20px;
  gap: 20px;
  border-radius: 16px;
  align-items: center;

  // Profile image
  img {
    width: 70px;
    height: 70px;
    border-radius: var(--radius-circle);
  }
`;

const UserCard = ({ user }) => {
  if (!user) return null;

  const { name, photo, position, email, phone } = user;

  return (
    <Card>
      <img src={photo} alt={`User ${name}`} />
      <Tooltip text={name} />
      <Tooltip text={position} />
      <Tooltip text={email} />
      <Tooltip text={phone} />
    </Card>
  );
};

export default UserCard;
