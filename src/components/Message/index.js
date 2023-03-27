import React from 'react';

import { 
  ErrorMessage as EM,
  SuccessMessage as SM
} from './styles';

export const ErrorMessage = ({ messages }) => {
  return (
    <EM>      
      {messages.map((message, index) => <div key={index}>{message}</div>)}      
    </EM>
  );
};

export const SuccessMessage = ({ messages }) => {
  return (
    <SM>      
      {messages.map((message, index) => <div key={index}>{message}</div>)}      
    </SM>
  );
};