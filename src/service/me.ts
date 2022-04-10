import { ReturnType } from ".";

const getMe: Promise<ReturnType> = () => {
  return fetch('/api/v1/me').then(res => res.json());
}
export default getMe;
