const getMe: Promise<any> = () => {
  return fetch('/api/v1/me').then(res => res.json());
}
export default getMe;
