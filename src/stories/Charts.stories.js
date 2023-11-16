// Charts.stories.js
import Charts from './Charts';

export default {
  title: 'Assignment/Charts',
  component: Charts,
};

// Template for your component
const Template = (args) => <Charts {...args} />;

// Default state
export const Default = Template.bind({});
Default.args = {};