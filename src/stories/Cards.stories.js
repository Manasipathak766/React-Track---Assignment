// cards.stories.js

import Cards from './Cards'; // Update the path to your Cards component

export default {
  title: 'Assignment/Cards',
  component: Cards,
};

const Template = (args) => <Cards {...args} />;

export const Default = Template.bind({});
Default.args = {};
