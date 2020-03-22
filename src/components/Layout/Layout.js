import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Octicon, { LineArrowLeft, LineArrowRight } from '@primer/octicons-react';
import Sidebar from './Sidebar';
import './Layout.scss';

export default function Layout({ children, title }) {
  const dispatch = useDispatch();
  const { location } = useSelector((state) => state.general);
  useEffect(() => {
    dispatch({ type: 'GET_ALL_INSIGHTS_SAGA' });
    dispatch({ type: 'GET_USER_LOCATION_SAGA' });

    setInterval(() => {
      dispatch({ type: 'GET_ALL_INSIGHTS_SAGA' });
    }, 60000);
  }, [dispatch]);

  return (
    <div className="Layout">
      <Sidebar />
      <main className="content">
        <div className="head">
          <span>{title}</span>
        </div>
        <div className="children_content">
          { children }
        </div>
        <div className="paginate">
          { location.pathname !== '/' && (
          <div onClick={() => dispatch({ type: 'MOVE_BACK_SAGA' })} className="box back">
            <Octicon icon={LineArrowLeft} size="large" />
          </div>
          )}

          <div onClick={() => dispatch({ type: 'MOVE_FORWARD_SAGA' })} className="box forward">
            <Octicon icon={LineArrowRight} size="large" />
          </div>
        </div>
      </main>
    </div>
  );
}
