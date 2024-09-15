import React from "react";

export default class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        )

        /* return React.createElement('div', { className: 'shopping-list' },
            React.createElement('h1', {
                children: ["Shopping List for ", this.props.name]
              }),
            React.createElement('ul', {
                children: [React.createElement("li", {
                  children: "Instagram"
                }), React.createElement("li", {
                  children: "WhatsApp"
                }), React.createElement("li", {
                  children: "Oculus"
                })]
              })
        ) */
    }
}