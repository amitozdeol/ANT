import React from 'react';

class Ant extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ant: props.ant }
    }
    /**
     * Update the prop everytime there's change in ant
     * @param {Object} prevProps 
     */
	componentDidUpdate(prevProps) {        
		if (prevProps.ant.running_state !== this.props.ant.running_state) {
			this.setState({
				ant: this.props.ant
			});
		}
	}

    render() { 
        let tag_class='';
        switch (this.state.ant.running_state) {
            case 'in progress':
                tag_class = 'is-info';
                break;
            case 'calculated':
                tag_class = 'is-success';
                break;
        }
        
        return (
          <div className="column is-mobile is-4-tablet">
            <div className="box is-relative">
                <span className={`tag running-state ${tag_class}`}>{this.state.ant.running_state ?? 'Not yet run'}</span>
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <svg version="1.1" viewBox="0 0 800 500" width="80"> 
                                <path fill="#bfbfbf" stroke="#b2b2b2" strokeWidth="27.755" d="M747.04 150.23c3.023 41.077-56.453 77.673-132.845 81.74-76.39 4.068-140.77-25.934-143.793-67.01-3.024-41.076 56.452-77.673 132.844-81.74 76.39-4.067 140.77 25.934 143.793 67.01z"/> <g fill="none" stroke="#000" strokeWidth="15.026" strokeLinejoin="round" strokeLinejoin="round" > <path d="M448.529 184.456c-79.265 30.57-64.233 129.675-64.233 129.675l-35.87 1.2M380.015 184.837c-79.265 30.57-64.233 129.675-64.233 129.675l-35.87 1.2M322.208 171.253c-79.265 30.57-64.233 129.675-64.233 129.675l-35.87 1.2" strokeWidth="12.87848408"/> </g> 
                                <path fill={this.state.ant.color} stroke="#000" strokeWidth="27.711" d="M757.485 159.316c.275 54.075-67.036 98.298-150.343 98.774-83.307.476-151.064-42.974-151.34-97.05-.274-54.074 67.037-98.297 150.344-98.773 83.307-.476 151.064 42.974 151.339 97.05z"/> 
                                <path fill={this.state.ant.color} stroke="#000" strokeWidth="27.755" d="M460.639 169.82c2.434 38.878-45.442 73.515-106.934 77.365-61.491 3.85-113.313-24.546-115.747-63.424-2.434-38.878 45.442-73.516 106.933-77.366 61.492-3.85 113.314 24.547 115.748 63.425z"/> 
                                <path fill="none" stroke="#000" strokeWidth="15.026" strokeLinejoin="round" strokeLinejoin="round" d="M282.157 212.71c79.265 30.57 64.233 129.674 64.233 129.674l35.87 1.2M350.67 213.09c79.266 30.57 64.234 129.675 64.234 129.675l35.87 1.2M408.477 199.506c79.265 30.57 64.233 129.675 64.233 129.675l35.87 1.2"/> 
                                <path fill={this.state.ant.color} stroke="#000" strokeWidth="27.673" d="M230.265 241.32c-43.467 39.828-110.419 43.296-149.54 7.746-39.121-35.55-35.598-96.655 7.87-136.482 43.468-39.828 110.42-43.295 149.54-7.746 39.122 35.55 35.598 96.655-7.87 136.483z"/> 
                                <path fill={this.state.ant.color} stroke="#000" strokeWidth="12.637" d="M86.088 206.575s41.664 33.33 74.994 0"/> 
                                <path stroke="#000" fill={this.state.ant.color === 'BLACK' ? 'white' : 'black'} d="M196.96 145.769c0 9.774-6.699 17.698-14.962 17.698-8.264 0-14.963-7.924-14.963-17.698 0-9.775 6.7-17.699 14.963-17.699 8.263 0 14.962 7.924 14.962 17.699z"/> <g fill="none" stroke="#000" strokeWidth="12.637" strokeLinejoin="round" > <path d="M179.787 114.738S181.403 7.402 306.637 7.402" strokeWidth="14.797042410000001"/> <path strokeLinejoin="round" d="M134.25 114.738S132.636 7.402 7.4 7.402" strokeWidth="14.797042410000001"/> </g> <path fill="none" stroke="#000" strokeWidth="20.52" d="M714.748 88.416c-41.886 34.426-63.068 77.725-16.665 149.989M552.847 70.595c-41.817 40.42-62.964 91.26-16.638 176.107"/> <path fill="none" stroke="#000" strokeWidth="20.056" strokeLinejoin="round" d="M629.21 66.846c-42.164 41.869-63.487 94.528-16.776 182.415"/> 
                                <path stroke="#000" fill={this.state.ant.color === 'BLACK' ? 'white' : 'black'} d="M128.683 155.595c0 9.775-6.699 17.698-14.962 17.698-8.264 0-14.963-7.923-14.963-17.698 0-9.774 6.7-17.698 14.963-17.698 8.263 0 14.962 7.924 14.962 17.698z"/> 
                            </svg>
                        </figure>
                    </div>
                    <div className="media-content ml-1">
                        <div className="content">
                            <p>
                            <strong>{this.state.ant.name}</strong>
                            </p>
                            <ul>
                                <li>LENGTH: {this.state.ant.length}</li>
                                <li>WEIGHT: {this.state.ant.weight}</li>
                            </ul>
                        </div>
                    </div>
                </article>
                {
                    this.state.ant.win_likelihood &&  <div className="notification is-primary">Win Likelyhood: {this.state.ant.win_likelihood}</div>
                }
            </div>
          </div>
        );
    }
}
 
export default Ant;