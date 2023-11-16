// pages.stories.js

import Pages from './Pages'; // Update the path to your Pages component

export default {
  title: 'Assignment/Pages',
  component: Pages,
};

const Template = (args) => <Pages {...args}/>;

export const Default = Template.bind({});
Default.args = {};

