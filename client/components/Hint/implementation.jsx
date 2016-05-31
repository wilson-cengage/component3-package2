import React from 'react';
import Popover from 'react-bootstrap/lib/Popover';

import './style.css';

export default class HintImplementation extends React.Component {

    render() {
        return (
            <div style={{ height: 120 }}>
                <Popover placement="right" positionLeft={200} positionTop={50} title="Popover right">
                    And here's some <strong>amazing</strong> content. It's very engaging. right?
                </Popover>
            </div>
        );
    }
}