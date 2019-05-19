import React from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    const { lists } = this.props;
    return (
      
      <div className="App">
        <h2>Hello Youtube</h2>
        {lists.map(list => (
          <TrelloList title={list.title} cards={list.cards} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
