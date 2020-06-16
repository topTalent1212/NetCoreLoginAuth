import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Item, Button, Segment, Icon } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { activityContext } from "../../../app/store/activityStore";
import { IActivity } from "../../../app/models/activity";

const ActivityListItem: React.FC<{ activity: IActivity }> = ({ activity }) => {
  const activityStore = useContext(activityContext);
  const { submitting } = activityStore;
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image
              size="tiny"
              circular
              src="/assets/images/user.png"
            ></Item.Image>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Description>Hosted by Bob</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <Icon name="clock" /> {activity.date}
        <Icon name="marker" /> {activity.venue}, {activity.city}
      </Segment>
      <Segment secondary>Attendees will go here</Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          floated="right"
          content="View"
          color="blue"
          loading={submitting}
          as={Link}
          to={`/activities/${activity.id}`}
        ></Button>
      </Segment>
    </Segment.Group>
  );
};
export default observer(ActivityListItem);
