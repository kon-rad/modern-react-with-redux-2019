import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail avatar={faker.image.avatar()} author="Joe" comment="Nice blog!" date="Thursday 5:00pm"  />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail avatar={faker.image.avatar()} author="Alex" comment="Great blog post!" date="Today at 5:00pm"  />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail avatar={faker.image.avatar()} author="Joe" comment="Nice blog!" date="Thursday 5:00pm"  />
      </ApprovalCard>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));