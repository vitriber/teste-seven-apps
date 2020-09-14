import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Title } from './styles';

interface User {
  id: string;
  name: string;
  age: number;
}

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function loadData(): Promise<void> {
      api.get('users').then(response => {
        setUsers(response.data.data);
      });
    }

    loadData();
  }, [users]);

  return (
    <>
      <Title>Nome e idade dos usuarios:</Title>
      <ul>
        {users &&
          users.map(user => (
            <>
              <li key={user.id}>{user.name}</li>
              <li key={user.id}>{user.age}</li>
            </>
          ))}
      </ul>
    </>
  );
};

export default Dashboard;
