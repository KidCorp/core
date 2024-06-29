import { cache } from 'react';
import apiConfig from '../config/api';

const { BASE_ADMIN_API } = apiConfig;

export const getFeaturedProducts = cache(async () => {
  const res = await fetch(`${BASE_ADMIN_API}/shopify/featured-products`);

  const result = await res.json();

  if (result && result.data) {
    return result.data;
  } else {
    return null;
  }
});
