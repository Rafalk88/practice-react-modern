import React from 'react';

const style = { border: '1px solid red' };

export const ColorContext = React.createContext(style);
export const TextContext = React.createContext('nested');
