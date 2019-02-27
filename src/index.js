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
