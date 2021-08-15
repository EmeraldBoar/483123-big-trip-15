import dayjs from 'dayjs';
import { getRandomInteger } from '../utils.js';
import { TYPES } from '../const.js';

const getDestination = () => {

  const CITIES = ['Amsterdam', 'Chamonix', 'Geneva', 'Saint-Petersburg', 'Moscow'];
  const DESCRIPTIONS = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.', 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.', 'Sed sed nisi sed augue convallis suscipit in sed felis.', 'Aliquam erat volutpat.', 'Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.'];

  const numberOfSentence = getRandomInteger(1, 2);
  const description = new Array(numberOfSentence)
    .fill()
    .map(() => DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)])
    .join(' ');


  const PLUG = 'http://picsum.photos/248/152?r=';
  const numberOfImages = getRandomInteger(1, 2);
  const pictures = new Array(numberOfImages)
    .fill()
    .map(() => `${PLUG}${getRandomInteger(0, 100)}`);

  return {
    description: getRandomInteger(0, 1) ? description : '',
    name: CITIES[getRandomInteger(0, CITIES.length - 1)],
    pictures: getRandomInteger(0, 1) ? pictures : [],
  };
};


const getOffers = () => {
  const OFFERS = [
    {
      title: 'Add luggage',
      price: '80',
    },
    {
      title: 'Switch to comfort',
      price: '35',
    },
    {
      title: 'Add meal',
      price: '23',
    },
    {
      title: 'Choose seats',
      price: '5',
    },
  ];
  const numberOfOffers = getRandomInteger(0, 5);

  return new Array(numberOfOffers)
    .fill()
    .map(() => {
      const offer = OFFERS[getRandomInteger(0, OFFERS.length - 1)];
      offer['isChecked'] = Boolean(getRandomInteger(0, 1));
      return offer;
    });
};

const getDate = () => {
  const randomGap = getRandomInteger(0, 60);
  const dateTo = dayjs().add(randomGap, 'day').toDate();
  const dateFrom = dayjs(dateTo).add(randomGap, 'day').add(randomGap, 'hours').add(randomGap, 'minute').toDate();


  return {
    to: dateTo,
    from: dateFrom,
  };
};


export const getPoint = () => (
  {
    type: TYPES[getRandomInteger(0, TYPES.length - 1)],
    destination: getDestination(),
    price: getRandomInteger(50, 1000),
    date: getDate(),
    offers: getOffers(),
    isFavorite: Boolean(getRandomInteger(0, 1)),
  }
);
