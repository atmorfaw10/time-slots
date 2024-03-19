import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import AppointmentsPage from './components/AppointmentsPage/AppointmentsPage';
import { Provider } from 'react-redux';
import Store from './store';

class App extends Component {
	render() {
    const store = Store();
		return (
			<div className="App">
        <Header />
        <Provider store={store}>
          <AppointmentsPage />
        </Provider>
			</div>
		);
	}
}

export default App;