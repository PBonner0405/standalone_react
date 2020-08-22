'use strict'

const e = React.createElement;

class HelloWorld extends React.Component {

    handleClick = () => {
        alert("I am standalone")
    }

    render () {
        const {mtitle} = this.props;
        return <h1>Hi <span onClick={this.handleClick}>{mtitle}</span></h1>
    }
}

// Find all DOM containers, and render our component into them.
var containers = document.querySelectorAll('.root')
containers.forEach(domContainer => {
    // Read the user ID from a data-* attribute.
    const mtitle = domContainer.dataset.mtitle
    console.log(mtitle);
    // render the component into the DOM
    ReactDOM.render(
      e(HelloWorld, { mtitle: mtitle}),
      domContainer
    )
});