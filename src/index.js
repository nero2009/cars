import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/bootstrap.min.css'
//import Style from  './assets/css/theme.css'
import './assets/css/socicons.css'
//import App from './App';
import { BrowserRouter as Router,withRouter} from 'react-router-dom';
import Main from './component/main/Main.jsx';
//import Login from './component/login/Login.jsx';
import registerServiceWorker from './registerServiceWorker';


const App=()=>(<Router>
				<Main />
			</Router>);

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
