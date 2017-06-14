import React, { Component } from 'react';

export default class House extends Component {
    render() {
        return (
            <div className="house">
                <Room />
                <Bathroom />
            </div>
        )
    }
}

class Room extends Component {
    render() {
        return (
            <div className="room">
                <Man />
                <Dog />
                <Dog />
            </div>
        )
    }
}

class Bathroom extends Component {
    render() {
        return (
            <div className="bathroom">bathroom</div>
        )
    }
}

class Man extends Component {
    render() {
        return (
            <div className="man">man</div>
        )
    }
}

class Dog extends Component {
    render() {
        return (
            <div className="dog">dog</div>
        )
    }
}
