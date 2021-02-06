import { create } from 'apisauce';

const Api = create({
  baseURL: 'https://virtualstodev.blob.core.windows.net/ondemand/OnDemandStories.json',
  headers: { 'Content-Type': 'application/json' },
});

export default Api;
