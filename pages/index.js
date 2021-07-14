import { FETCH_USERS_QUERY } from "../graphql-config/queries/users";
import Query from "../components/graphql/Query";
import MainList from "../components/list";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  hompageDiv: {
    width: '100%',
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.hompageDiv}>
      <h1>Home page</h1>
      <Query query={FETCH_USERS_QUERY} id={null} type='getAllUsers'>
        {({ data, refetch }) => {
          return ( 
            <MainList data={data} refetch={refetch} />
          );
        }}
      </Query>
    </div>
  )
}