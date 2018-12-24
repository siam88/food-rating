import React, { Component } from "react";

class Rating extends Component {
    rate = []


    componentWillMount() {
        for (var i = 1; i <= 5; i++) {
            if (i <= this.props.changeRate) {
                this.rate.push(true);
            }
            else {
                this.rate.push(false);
            }

        }
    }
    render() {
        return (
            <div>
                {this.rate.map(e => {
                    if (e === true) return <i className="material-icons">sentiment_very_satisfied</i>
                    else return <i className="material-icons"> sentiment_very_dissatisfied</i>
                })}
            </div>
        );
    }
}

export default Rating;