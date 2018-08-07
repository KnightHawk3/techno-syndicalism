import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
import { Post, Comment } from "components/molecules";
import { StyledContent } from "styles";
import { POST_BY_ID } from "state/queries";

const Thread = ({ loading, error, postById }) => {
  if (loading) return null;
  if (error) {
    // Dev Only
    console.log(error);
    return null;
  }
  console.log(postById);
  return (
    <StyledContent>
      <Post {...postById} />
      {postById.comments.map(({ id, ...rest }) => (
        <Comment {...rest} key={id} />
      ))}
    </StyledContent>
  );
};

Thread.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

export default graphql(POST_BY_ID, {
  options: ({ match }) => ({
    variables: { id: match.params.id }
  }),
  props: ({ data }) => ({ ...data })
})(Thread);
