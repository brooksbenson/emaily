import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <h2>Dashboard</h2>;

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <main className="container">
        <BrowserRouter>
          <section>
            <Header />
            <Route path="/" component={Landing} exact />
            <Route path="/surveys" component={Dashboard} />
          </section>
        </BrowserRouter>
      </main>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
