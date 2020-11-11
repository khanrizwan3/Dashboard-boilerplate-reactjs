import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import {  CustomCard } from 'components/Card';


// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() })


it('Should render component', () => {

    const wrapper = shallow(<CustomCard
        avatar={'a'}
        title={'a'}
        subtitle={'a'}
        text="Conversion Rate 4/12 - 4/30"
        impressions={'1000'}
        conversions={'1000'}
        revenue={'1000'}
        conversionDates={[{"conversionDate":"12/12/2020 12:48", "revenueAmount":'1000'}]}
      />);

      const paragraph = wrapper.find('CardTitle')
      expect(paragraph).toHaveLength(1)
});
