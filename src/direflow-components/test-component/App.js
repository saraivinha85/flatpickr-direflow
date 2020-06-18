import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { EventContext, Styled } from 'direflow-component';
import styles from './App.css';
import pickerStyle from "flatpickr/dist/flatpickr.css"
import themeStyle from "flatpickr/dist/themes/material_green.css";


import Calendar from './Calendar'

const App = (props) => {
  const dispatch = useContext(EventContext);

  const handleClick = () => {
    const event = new Event('my-event');
    dispatch(event);
  };

  const renderSampleList = props.sampleList.map((sample) => (
    <div key={sample} className='sample-text'>
      → {sample}
    </div>
  ));

  return (
    <Styled styles={[styles, themeStyle, pickerStyle, ]}>
      <div className='app'>
        <Calendar />
      </div>
    </Styled>
  );
};

App.defaultProps = {
  componentTitle: 'Test Component',
  sampleList: [
    'Create with React',
    'Build as Web Component',
    'Use it anywhere!',
  ],
}

App.propTypes = {
  componentTitle: PropTypes.string,
  sampleList: PropTypes.array,
};

export default App;
