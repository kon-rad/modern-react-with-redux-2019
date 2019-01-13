import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList' ;

const App = () => {
  return <div>
    <BrowserRouter>
      <div>
        <Route path="/" exact component={StreamList} />
        <Route path="/StreamCreate" exact component={StreamCreate} />
        <Route path="/StreamDelete" exact component={StreamDelete} />
        <Route path="/StreamShow" exact component={StreamShow} />
        <Route path="/StreamEdit" exact component={StreamEdit} />
      </div>
    </BrowserRouter>
  </div>
};

export default App;