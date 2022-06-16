import { useEffect, useState } from 'react';
import auth from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from '../context/AuthContext';

const Login = () => {
  const { user } = useAuthContext();
  const navigate  = useNavigate();
  const [error, setError] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      signInWithEmailAndPassword(auth, email.value, password.value);

      //signInWithEmailAndPassword関数でログインに失敗した場合の処理
      if( user ) {
        navigate('/');
      }else{
        throw new Error('ユーザーが見つかりません');
      }
    } catch (error) {
      console.error("エラー：", error.message);
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>ログイン</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email" autoComplete="off"/>
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password" placeholder="password" autoComplete="off"/>
        </div>
        <div>
          <button>ログイン</button>
        </div>
        <div>
          ユーザ登録は<Link to={'/signup'}>こちら</Link>から
        </div>
      </form>
    </div>
  );
};

export default Login;