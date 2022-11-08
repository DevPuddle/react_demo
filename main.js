ReactDOM.render(
    <ul><li>Thing 1</li><li>Thing 2</li></ul>,
    document.getElementById("root")
)

function MainContent(){
    return (
        ReactDOM.render(<h1>This is my main content</h1>, document.getElementById('mainContent'))
    )
}

MainContent()

