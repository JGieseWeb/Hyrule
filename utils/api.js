export async function getEntrys(name) {
  const promise = fetch(
    `https://botw-compendium.herokuapp.com/api/v2/entry/${name}`
  );
  const response = await promise;
  if (response.status === 404) {
    return [];
  }
  const data = await response.json();
  return data.data;
}
export async function getEntry(id) {
  const promise = fetch(
    `https://botw-compendium.herokuapp.com/api/v2/entry/${id}`
  );
  const response = await promise;
  if (response.status === 404) {
    return {};
  }
  const data = await response.json();
  return data.data;
}
