import { Stack, Dropdown } from '@carbon/react';

const LeftBar = () => {
  const items = ['1','2','3']
  return (

    <div style={{ width: 400 }}>
      <p>Left bar</p>  <Dropdown
          id="default"
          titleText="Dropdown label"
          helperText="This is some helper text"
          label="Dropdown menu options"
          items={items}
          itemToString={(item) => (item ? item.text : '')}
        />
</div>
  );
};
export default LeftBar