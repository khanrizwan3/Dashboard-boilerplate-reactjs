import React from 'react';
import PropTypes from 'utils/propTypes';

import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import { Line } from 'react-chartjs-2';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardLink,
  CardText,
  CardTitle,
  CardSubtitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';
import Avatar from 'react-avatar';
import NumberFormat from 'react-number-format';

// Custom card props
const CustomCard = ({
  avatar,
  avatarSize,
  title,
  subtitle,
  text,
  impressions,
  conversions,
  revenue,
  conversionDates,
  ...restProps
}) => {

    let labels = [];
    let data = [];

    /*
    * To Parse & map data and labels for chart
    * @conversionDates: Array
    */
    conversionDates.map((converstionDate) => {
        labels.push(converstionDate.conversionDate);
        data.push(converstionDate.revenueAmount);
    });

  return (
    <Card >
        
        <CardBody className="d-flex flex-column" style={{ position: 'relative' }}>
            <Avatar src={avatar} name={title} round="50px" size={avatarSize} className="mb-2" />
            <CardTitle>{title}</CardTitle>
            <CardSubtitle><small>{subtitle}</small></CardSubtitle>
        </CardBody>

        <Line
            data={getStackLineChart({
            labels: labels,
            data: data,
            })}
            options={stackLineChartOptions}
        />

        <CardText>
            <small>{text}</small>
        </CardText>

        <ListGroup flush>
            <ListGroupItem>Impressions: {impressions}</ListGroupItem>
            <ListGroupItem>Conversions: {conversions}</ListGroupItem>
            <ListGroupItem>Revenue: <NumberFormat value={revenue} displayType={'text'} thousandSeparator={true} prefix={'$'} /></ListGroupItem>
        </ListGroup>

    </Card>
  );
};

CustomCard.propTypes = {
  avatar: PropTypes.string,
  avatarSize: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  impressions: PropTypes.string,
  conversions: PropTypes.string,
  revenue: PropTypes.string,
  conversionDates :PropTypes.array,
};

CustomCard.defaultProps = {
  avatarSize: 50,
};

export default CustomCard;
