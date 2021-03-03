import '../assets/scss/main.scss';

import * as React from 'react';
import { render } from 'react-dom';

const App = () => {
    return <div>
        <div className="c-header">
            <div className="c-header--inner">
                eei<span className="color-cherry">.</span><span className="color-orange">re</span>
            </div>
        </div>

        <div className="container">
            if you know you know.
        </div>
    </div>;
}

render(<App/>, document.body);