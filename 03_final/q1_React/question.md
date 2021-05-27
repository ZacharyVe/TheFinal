### Question:

Where in a react component would you put code 
that you only want to invoke when said component mounts?

Include class and functional component methods of doing this. 
Provide examples.

If you don't recall, research it and provide examples.

### Answer:


A:
class App extends React.Component {

  componentDidMount() {
    ***This is where you would put code you want to run one time upon the component rendering***
    Fetch()
  }

  render() {
    return <h1>Class Component</h1>;
  }
}

B:
function App() {
  React.useEffect(() => {
    ***This hook will be fired after rendering but passing an empty array causes it to only occur one time***
  }, []);

  return <h1>Functional Component</h1>;
}