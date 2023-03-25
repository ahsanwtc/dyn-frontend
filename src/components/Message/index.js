import React from 'react';

import { 
  ErrorMessage
} from './styles';

const Message = ({ messages }) => {
  return (
    <ErrorMessage>      
      {messages.map((message, index) => <div key={index}>{message}</div>)}      
    </ErrorMessage>
  );
};

export default Message;