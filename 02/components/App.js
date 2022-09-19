// ./src/components/App.js
import React from 'react';
import Box from './Box';

import { TextContent } from '../context';

class App extends React.Component {
    state = {
        text: 'React HelloWorld Modern!',
    };

    render() {
        const { Provider } = TextContent;
        const { text } = this.state;

        return (
            <Provider value={text}>
                <Box />
            </Provider>
        );
    }
}

export default App;
