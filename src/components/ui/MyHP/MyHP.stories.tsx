// Dependencies
import React from 'react';
import MyHP from '.';

export default {
  title: 'Pokemon/MyHP',
  component: MyHP,
};

export const myHP = () => (
  <MyHP name="리액트: L99" hp={100} currentHP={20} fullHP={20} />
);
