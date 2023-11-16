// forms.stories.js

import Forms from './Forms'; // Update the path to your Forms component

export default {
  title: 'Assignment/Forms',
  component: Forms,
};

const Template = (args) => <Forms {...args} />;

export const Default = Template.bind({});
Default.args = {};
