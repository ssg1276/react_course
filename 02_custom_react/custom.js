function customRender(reactElement, mainContainer) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    //problem if the attributes are more then 1 or 2
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    //using loop for setting attributes
    for (const prop in reactElement.props) {
        if (prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop]);

    }
    mainContainer.appendChild(domElement)
}



//react always try to form tree structure from the data that user provide
const reactElement = {
    type: 'a', //div,paragraph etc
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector("#root")


//creating method that will render the rootElement inside root

customRender(reactElement, mainContainer)//what to inject,where to inject