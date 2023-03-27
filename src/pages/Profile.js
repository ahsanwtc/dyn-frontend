import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import { Button, FormTitle, Label, FormControl } from '../components/Form/styles';
import { FixedContainer } from '../components/Containers/styles';
import { getProfile, removeAccessToken } from '../util';

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    const service = async () => {
      setLoading(true);
      const profile = await getProfile();
      
      if (!profile.error) {
        setUser(profile.data);
      }

      setLoading(false);
    };
    
    if (user === null) {
      service();
    }

  }, [user, setUser]);
  
  const onLogout = () => {
    removeAccessToken();
    setUser(null);
    navigate('/login');
  };

  return (
    <FixedContainer size={275}>
      {loading && <pre>Loading...</pre>}
      {!loading && 
        <>
          <FormTitle>Profile</FormTitle>
          <FormControl>
            <Label>Email: {user.email}</Label>
            <Label>Favourite Team: {user.favouriteTeam}</Label>
          </FormControl>
          <Button onClick={onLogout}>Logout</Button>
        </>
      }
    </FixedContainer>
    
  );
};

export default Profile;