// Dependencies
import React from 'react';
import MyHP from '.';

export default {
  title: 'Pokemon/MyHP',
  component: MyHP,
};

export const myHP = () => <MyHP hp={100} mp={20} />;
