type Fetch = (input: RequestInfo, init?: RequestInit) => Promise<any>;

export const fetchJson: Fetch = async (...args) => {
  const response = await fetch(...args);

  if (!response.ok) {
    console.error(response);
    throw Error(`${response.status} ${response.statusText}`);
  }

  return await response.json();
}

export const isTouchDevice = () => 'ontouchstart' in window;



