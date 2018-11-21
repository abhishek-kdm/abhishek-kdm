import { ABOUT_ME } from '../configs';

export const sleep = function(ms: number) { return new Promise((f) => setTimeout(f, ms)); }

export const typo = async function(el: HTMLElement) {
	for (const i of ABOUT_ME) {
		const nodeValue = ($(el).contents().filter(function() { return this.nodeType == 3; })[0] || {nodeValue: ''}).nodeValue
		el.innerHTML = `${nodeValue + i}<span class='blinking'>_</span>`;
		$(el).animate({ scrollTop: $(el).prop('scrollHeight') }, 0);
		await sleep(Math.random() * 200);
	}
}

export const fetchErrHandled = async function(url: string, options={}) {
  let response = await fetch(url, options);
  if (!response.ok) {
    throw Error(`${response.status} ${response.statusText}`);
  }
  let json = await response.json();
  return json;
}
