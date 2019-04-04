import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '../icon';

storiesOf('Button', module)
  .add('with text',
      () => <Icon text="Prop text" />,
      { 'in-dsm': { id: '5c9119ffc8298b66862b32b1' } }
      );
