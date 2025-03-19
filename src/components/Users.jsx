import React from "react";
import "./users.css";
import InstagramIcon from '@mui/icons-material/Instagram';

const comments = [
    {
        text: "GGs",
        name: "Client Name",
        username: "@randomuser1"
    },
    {
        text: "Ya realice mi pedido y estoy muy satisfecha con el producto, la calidad es excelente.",
        name: "Client Name",
        username: "@randomuser2"
    },
    {
        text: "Ya realice mi pedido y estoy muy satisfecha con el producto, la calidad es excelente.",
        name: "Client Name",
        username: "@randomuser3"
    },
    {
        text: "Ya realice mi pedido y estoy muy satisfecha con el producto, la calidad es excelente.",
        name: "Client Name",
        username: "@randomuser4"
    },
    {
        text: "Ya realice mi pedido y estoy muy satisfecha con el producto, la calidad es excelente.",
        name: "Client Name",
        username: "@randomuser5"
    },
    {
        text: "Ya realice mi pedido y estoy muy satisfecha con el producto.",
        name: "Client Name",
        username: "@randomuser6"
    },
    {
        text: "Ya realice mi pedido y estoy muy satisfecha con el producto, la calidad es excelente.",
        name: "Client Name",
        username: "@randomuser7"
    },
    {
        text: "Comment Comment.",
        name: "Client Name",
        username: "@randomuser8"
    },
    {
        text: "Ya realice mi pedido y estoy muy satisfecha con el producto, la calidad es excelente.",
        name: "Client Name",
        username: "@randomuser9"
    }
]

const commentsOne = comments.slice(0, 3);
const commentsTwo = comments.slice(3, 6);
const commentsThree = comments.slice(6, 9);

function commentsColumn(comments) {
    return (
        <div className="comments-column">
            {comments.map(({text, name, username}) => (
                <div className="comment-container">
                    <p>{text}</p>
                    <div className="comment-user-container">
                        <div>
                            <InstagramIcon color="disabled"/>
                        </div>
                        <div className="comment-user-info">
                            <span>{name}</span>
                            <span>{username}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

function Users() {
    return (
        <section>
            <div className="users-outer-container">
                <div className="users-text-container">
                    <h2>Nuestros clientes:</h2>
                    <p>Multiples clientes satisfechos en todo el pais, nuestros envios son manejados de forma cuidadosa para garantizar que tu producto llegue a ti en perfecto estado.</p>
                </div>
            </div>
            <div className="comments-outer-container">
                <div className="comments-container">
                    <span className="columnOne">{commentsColumn(commentsOne)}</span>
                    <span className="columnTwo">{commentsColumn(commentsTwo)}</span>
                    <span className="columnThree">{commentsColumn(commentsThree)}</span>
                </div>
            </div>
        </section>
    )
}

export default Users;