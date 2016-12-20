import React, { Component } from 'react';


/*
export default class Stream extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { tracks = [] } = this.props
    return (
      <div>
        {
          tracks.map((track, key) => {
            return (
              <div className="track" key={key}>
                {track.title}
                <button onClick={() => this.setState({ [key]: !this.state[key] })} type="button">
                  { this.state[key] ? 'Dislike' : 'Like' }
                </button>
              </div>
            )
          })
        }
      </div>
    )
  }
}
*/

function Stream({ tracks = [] }) {
  return (
    <div>
      {
        tracks.map((track, key) => {
          return <div className="track" key={key}>{track.title}</div>;
        })
      }
    </div>
  );
}

export default Stream;
