//Create h1
// const header1 = document.createElement('h1');
// header1.innerText = "Hello Coder Army";
// header1.style.backgroundColor = "blue";
// header1.style.fontSize = "30px";
// header1.style.color = "white";
// // create h2
// const header2 = document.createElement('h2');
// header2.innerText = "Kaise ho aap sab log";
// header2.style.backgroundColor = "black";
// header2.style.fontSize = "25px";
// header2.style.color = "white";
// const root = document.getElementById('root');
// root.append(header1);
// root.append(header2);

// React :- it is the library of js.
// React:-Object
// ReactDom:- Object
// now making of react
const React = {
    createElement: function (tag, styles, children) {
        const element = document.createElement(tag);
        if (typeof children === 'object') {
            for (let val of children)
                element.append(val);
        }
        else
            element.innerText = children;
        for (let key in styles) {
            element.style[key] = styles[key];
        }
        return element;
    }
}
const ReactDOM = {
    render: function (element, root) {
        root.append(element);
    }
}
const header1 = React.createElement('h1', { fontSize: "30px", backgroundColor: "blue", color: "white" }, "Hello Coder Army");
const header2 = React.createElement('h2', { fontSize: "25px", backgroundColor: "black", color: "white" }, "Kaise ho aap sab log");
// li add
const li1 = React.createElement('li', {}, "HTML");
const li2 = React.createElement('li', {}, "CSS");
const li3 = React.createElement('li', {}, "JS");
// ul add
const Ul = React.createElement('ul', { fontSize: "30px", backgroundColor: "blue", color: "white" }, [li1, li2, li3]);
// call function to add
ReactDOM.render(header1, document.getElementById('root'));
ReactDOM.render(header2, document.getElementById('root'));
ReactDOM.render(Ul, document.getElementById('root'));

// yahi js-Liblary aur isame hum aur bhi kuchh add kar sakate hai but ye humane yaha samjhane ke liye likha hai but isako hume hamesha nhi likhana hai ye bas samjhane ke likha tha , now ye ab humlikha hua milega next part se React, ReactDOM.