'use strict'

const e = React.createElement;

const {
    colors,
    ThemeProvider,
    Container,
    makeStyles,
    createMuiTheme,
} = MaterialUI;

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: colors.red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});

class HelloWorld extends React.Component {

    handleClick = () => {
        alert("I am standalone")
    }

    render () {
        const {mtitle} = this.props;
        return (
            <ThemeProvider theme={theme}>
                <Container maxWidth="sm">
                    <div>
                        <h1>
                            Hi
                            <span onClick={this.handleClick}>{mtitle}</span>
                        </h1>
                    </div>
                </Container>
            </ThemeProvider>
        );
    };
}

// Find all DOM containers, and render our component into them.
var containers = document.querySelectorAll('.root')
containers.forEach(domContainer => {
    // Read the user ID from a data-* attribute.
    const mtitle = domContainer.dataset.mtitle
    // render the component into the DOM
    ReactDOM.render(
      e(HelloWorld, { mtitle: mtitle}),
      domContainer
    )
});