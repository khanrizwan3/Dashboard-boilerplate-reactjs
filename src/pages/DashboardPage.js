
import Page from 'components/Page';
import {  CustomCard } from 'components/Card';

import {
} from 'demos/dashboardPage';
import React from 'react';
import {
} from 'react-icons/md';
import {
  Col,
  Row,
} from 'reactstrap';
import usersData from './../assets/users-data/users.json';
import {sumOfAll} from './../utils/userGlobalMethods';

class DashboardPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {

    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}
      >
        <Row>

        {usersData.map((user) =>
          <Col lg={3} md={6} sm={6} xs={12}>
          <CustomCard
            avatar={user.avatar}
            title={user.name}
            subtitle={user.occupation}
            text="Conversion Rate 4/12 - 4/30"
            impressions={sumOfAll(user.id).impressions}
            conversions={sumOfAll(user.id).conversion}
            revenue={sumOfAll(user.id).revenue}
            conversionDates={sumOfAll(user.id).conversionDates}
          />
          </Col>
        )}
          
        </Row>

      </Page>
    );
  }
}
export default DashboardPage;
