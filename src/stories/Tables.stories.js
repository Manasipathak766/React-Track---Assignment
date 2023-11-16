import Tables from './Tables';

export default {
  title: 'Assignment/Tables',
  component: Tables,
  argTypes: {
    // define argTypes here if needed
  },
};

const Template = (args) => <Tables {...args} />;

export const Default = Template.bind({});
Default.args = {
  // pass any props here if needed
};
