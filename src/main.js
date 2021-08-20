import SiteMenuView from './view/site-menu.js';
import TripInfoView from './view/trip-info.js';
import TripInfoMainView from './view/trip-info-main.js';
import CostView from './view/trip-cost.js';
import SiteFilterView from './view/filters.js';
import SiteSortView from './view/sort.js';
import EventListView from './view/events-list.js';
import PointView from './view/events-point.js';
import EditPointView from './view/events-edit-point.js';
// import { createEventsNewPointTemplate } from './view/events-new-point.js';
import { getPoint } from './mock/point.js';
import { RenderPosition, render } from './utils.js';

const renderPoint = (pointListElement, point) => {
  const pointComponent = new PointView(point);
  const pointEditComponent = new EditPointView(point);

  const replaceCardToForm = () => {
    pointListElement.replaceChild(pointEditComponent.getElement(), pointComponent.getElement());
  };

  const replaceFormToCard = () => {
    pointListElement.replaceChild(pointComponent.getElement(), pointEditComponent.getElement());
  };

  pointComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', () => {
    replaceCardToForm();
  });

  pointEditComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', () => {
    replaceFormToCard();
  });

  pointEditComponent.getElement().querySelector('form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    replaceFormToCard();
  });

  render(pointListElement, pointComponent.getElement(), RenderPosition.BEFOREND);
};

const siteTripMainElement = document.querySelector('.trip-main');

const siteMenuElement = siteTripMainElement.querySelector('.trip-controls__navigation');
render(siteMenuElement, new SiteMenuView().getElement(), RenderPosition.BEFOREND);
render(siteTripMainElement, new TripInfoView().getElement(), RenderPosition.AFTERBEGIN);


const siteTripInfoElement = siteTripMainElement.querySelector('.trip-main__trip-info');
render(siteTripInfoElement, new CostView().getElement(), RenderPosition.AFTERBEGIN);
render(siteTripInfoElement, new TripInfoMainView().getElement(), RenderPosition.AFTERBEGIN);


const siteFiltersElement = siteTripMainElement.querySelector('.trip-controls__filters');
render(siteFiltersElement, new SiteFilterView().getElement(), RenderPosition.AFTERBEGIN);


const siteEventsElement = document.querySelector('.trip-events');
render(siteEventsElement, new SiteSortView().getElement(), RenderPosition.BEFOREND);

const eventListComponent = new EventListView();

render(siteEventsElement, eventListComponent.getElement(), RenderPosition.BEFOREND);


const POINTS_COUNT = 20;
const points = new Array(POINTS_COUNT).fill().map(getPoint);

// render(siteEventsListElement, createEventsNewPointTemplate(), 'beforeend');


for (let i = 0; i < POINTS_COUNT; i += 1) {
  renderPoint(eventListComponent.getElement(), points[i]);
}


