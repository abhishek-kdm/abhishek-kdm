import { ABOUT_ME } from '../configs';

export const sleep = (ms: number) => new Promise((f) => setTimeout(f, ms));

export const typo = async (el: HTMLElement) => {
  for (const i of ABOUT_ME) {
    const nodeValue = (
      // @ts-ignore
      $(el).contents().filter(function() { return this.nodeType == 3 })[0] || {nodeValue: ''}
      ).nodeValue;
    el.innerHTML = `${nodeValue + i}<span class='blinking'>_</span>`;
    // @ts-ignore
    $(el).animate({ scrollTop: $(el).prop('scrollHeight') }, 0);
    await sleep(Math.random() * 200);
  }
}

export const shortFetch = async (url: string, options: object) => {
  let response = await fetch(url, options || {});
  if (!response.ok) {
    throw Error(`${response.status} ${response.statusText}`);
  }
  let json = await response.json();
  return json;
}
