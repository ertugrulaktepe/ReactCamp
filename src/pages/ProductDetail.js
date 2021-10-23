import React from "react";
import { useParams } from "react-router";
import { Button, Card, Image } from "semantic-ui-react";



const ProductDetail = () => {
 let {name} = useParams();
 

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/steve.jpg"
            />
            <Card.Header>{name}</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
             <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};

export default ProductDetail;
