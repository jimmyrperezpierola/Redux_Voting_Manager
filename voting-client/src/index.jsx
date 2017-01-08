import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Trainspotting', '25 Days Later'];

ReactDOM.render(
	<Voting pair={pair} winner="Trainspotting" />,
	document.getElementById('app')
);