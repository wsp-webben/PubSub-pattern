import Subscriber from './subscriber.js';
import Bus from './bus.js';

const names = [
  'Jeffrey',
  'Susan',
  'Matt',
  'Kate',
  'Richard',
  'Scott',
  'Michael',
  'Elly'
];

// const subscribers = names.map(name => new Subscriber(name));
// subscribers.forEach(subscriber => subscriber.getPublication());


const subForm = document.querySelector('.pubsub');
const subscribersContainer = document.createDocumentFragment();
const subscriberTemplate = document.querySelector('#subscriber-checkox');
const subscriberName = subscriberTemplate.content.querySelector('.js-name');
const subscriberCheckbox = subscriberTemplate.content.querySelector('.js-check');

names.map(name => {
  subscriberName.textContent = name
  subscriberCheckbox.value = name;
  subscribersContainer.appendChild(subscriberTemplate.content.cloneNode(true));
});

subForm.querySelector('.js-subscribers').appendChild(subscribersContainer);
subForm.onsubmit = submitForm;

function submitForm(e) {
  e.preventDefault();
  const data = new FormData(this);
  console.log(parseForm(data));
  this.reset();
}

function parseForm(formdata) {
  const data = {
    action: formdata.get('action'),
    room: formdata.get('room'),
  }

  if (data.action === 'sub') {
    const subs = formdata.getAll('subscriber');
    if (!subs.length) {
      return false;
    }
    data.subs = subs;
  } else {
    const message = formdata.get('message').trim();
    if (!message) {
      return false;
    }
    data.message = message;
  }

  return data;
}
