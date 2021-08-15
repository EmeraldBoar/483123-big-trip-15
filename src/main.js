import { createSiteMenuTemplate } from './view/site-menu.js';
import { createTripInfoTemplate } from './view/trip-info.js';
import { createTripInfoMainTemplate } from './view/trip-info-main.js';
import { createTripInfoCostTemplate } from './view/trip-cost.js';
import { createFiltersTemplate } from './view/filters.js';
import { createSortTemplate } from './view/sort.js';
import { createEventsListTemplate } from './view/events-list.js';
import { createEventsPointTemplate } from './view/events-point.js';
import { createEventsEditPointTemplate } from './view/events-edit-point.js';
// import { createEventsNewPointTemplate } from './view/events-new-point.js';
import { getPoint } from './mock/point.js';


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};


const siteTripMainElement = document.querySelector('.trip-main');

const siteMenuElement = siteTripMainElement.querySelector('.trip-controls__navigation');
render(siteMenuElement, createSiteMenuTemplate(), 'beforeend');
render(siteTripMainElement, createTripInfoTemplate(), 'afterbegin');


const siteTripInfoElement = siteTripMainElement.querySelector('.trip-main__trip-info');
render(siteTripInfoElement, createTripInfoCostTemplate(), 'afterbegin');
render(siteTripInfoElement, createTripInfoMainTemplate(), 'afterbegin');


const siteFiltersElement = siteTripMainElement.querySelector('.trip-controls__filters');
render(siteFiltersElement, createFiltersTemplate(), 'afterbegin');


const siteEventsElement = document.querySelector('.trip-events');
render(siteEventsElement, createSortTemplate(), 'beforeend');
render(siteEventsElement, createEventsListTemplate(), 'beforeend');

const POINTS_COUNT = 20;
const points = new Array(POINTS_COUNT).fill().map(getPoint);

const siteEventsListElement = siteEventsElement.querySelector('.trip-events__list');
render(siteEventsListElement, createEventsPointTemplate(points[1]), 'beforeend');
render(siteEventsListElement, createEventsEditPointTemplate(points[1]), 'beforeend');
// render(siteEventsListElement, createEventsNewPointTemplate(), 'beforeend');


for (let i = 1; i < POINTS_COUNT; i += 1) {
  render(siteEventsListElement, createEventsPointTemplate(points[i]), 'beforeend');
}


