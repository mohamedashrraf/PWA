if ('serviceWorker' in navigator) { //يشوف فيه sw ولا لا لو فيه يعملها register
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('service worker registered'))
    .catch(err => console.log('service worker not registered', err));
}