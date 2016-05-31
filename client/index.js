import ReactDOM from 'react-dom';
import React from 'react';

import Accordion from 'components/Accordion';
import Hint from 'components/Hint';

import 'index.html';

ReactDOM.render(
    <Accordion/>,
    document.getElementById('root')
);

ReactDOM.render(
    <Hint/>,
    document.getElementById('root2')
);
