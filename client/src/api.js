const BASE = '/recipes';

async function request(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (res.status === 204) return null;
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

export const api = {
  list: (params = {}) => {
    const qs = new URLSearchParams(Object.entries(params).filter(([, v]) => v)).toString();
    return request(qs ? `?${qs}` : '');
  },
  get: (id) => request(`/${id}`),
  create: (body) => request('', { method: 'POST', body: JSON.stringify(body) }),
  update: (id, body) => request(`/${id}`, { method: 'PATCH', body: JSON.stringify(body) }),
  remove: (id) => request(`/${id}`, { method: 'DELETE' }),
};
