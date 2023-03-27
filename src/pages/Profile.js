import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import { Button } from '../components/Form/styles';
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

    <div>
      <h3>Profile</h3>
      {loading && <pre>Loading...</pre>}
      {!loading &&
        <div>
        <p>Email: {user.email}</p>
        <p>Favourite Team: {user.favouriteTeam}</p>
        <p><Button onClick={onLogout}>Logout</Button></p>
        </div>
      }
    </div>
  );
};

export default Profile;