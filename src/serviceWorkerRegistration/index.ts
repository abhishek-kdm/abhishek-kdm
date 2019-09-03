const registerServiceWorker = () => {
  if (!('serviceWorker' in navigator)) {
    alert('offline mode not supported in this browser');
    return;
  }

  navigator.serviceWorker.register('service-worker.js')
  .then((registration: ServiceWorkerRegistration) => {
    console.log(registration);
    console.log('service worker registered');
  })
  .catch((err) => {
    alert('something went wrong while registering service worker');
    console.log(err);
  })
}

export default registerServiceWorker;
