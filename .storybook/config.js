import { configure, addDecorator } from '@storybook/react';
import { initDsm } from '@invisionapp/dsm-storybook';

function loadStories() {
  require('../src/stories/icon.stories');
  // You can require as many stories as you need.
}

//Init Dsm
// initDsm(addDecorator, () => {
//   configure(loadStories, module);
// });

configure(loadStories, module);
