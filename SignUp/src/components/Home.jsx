import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import auth from '../firebase';
import { useAuthContext } from '../context/AuthContext';

const Home = () => {
  const navigate  = useNavigate();
  const { user } = useAuthContext();
  const handleLogout = () => {
    auth.signOut();
    navigate('/login');
  };

  if (!user) {
    return (
      <div>
        <h1>ログインしてください。</h1>
          ログイン画面は<Link to={'/login'}>こちら</Link>から
          会員登録は<Link to={'/signup'}>こちら</Link>から
        </div>
    );
  } else {
    return (
      <div>
        <h1>ホームページ 私は{user.email}です</h1>
        <button onClick={handleLogout}>ログアウト</button>
      </div>
    );
  }
};

export default Home;