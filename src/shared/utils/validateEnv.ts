import { cleanEnv } from 'envalid';
import { str, num } from 'envalid/dist/validators';

export default cleanEnv(process.env, {
  REACT_APP_CLIENT_URL: str(),
  REACT_APP_SERVER_URL: str(),
  REACT_APP_CLIENT_PORT: num(),
});
