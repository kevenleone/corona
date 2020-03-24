import ReactGA from 'react-ga';

export const PageView = (page) => {
  ReactGA.pageview(page);
};

export const useEvent = (data) => {
  ReactGA.event(data);
};
