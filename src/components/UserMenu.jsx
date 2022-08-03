import { useUser } from './userContext';

export const UserMenu = () => {
  const { isLoggeIn, username, logIn, logOut } = useUser();

  return (
    <div>
      {isLoggeIn && <p>{username} </p>}
      {isLoggeIn ? (
        <button onClick={logOut}>Log out</button>
      ) : (
        <button onClick={logIn}>Log in</button>
      )}
    </div>
  );
};
