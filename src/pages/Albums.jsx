import React from "react";
import "../styles/albums.css"

import { Card, Button } from "react-bootstrap";

export default function Albums() {

    const albums = [
        {
            descricao: "Kendrick Lamar",
            titulo: "DAMN.",
            url: "https://postgradmusicreviews.files.wordpress.com/2017/05/damn.jpg",
            onclick: function(){
                window.open("https://open.spotify.com/album/4eLPsYPBmXABThSJ821sqY?si=Mbbne3ZzSBuzUlL-zdBnUw")
            }
        },
        {
            descricao: "Kendrick Lamar",
            titulo: "To Pimp a Butterfly",
            url: "https://m.media-amazon.com/images/I/81VcA8-kuZL._UF1000,1000_QL80_.jpg",
        },
        {
            descricao: "Kendrick Lamar",
            titulo: "Mr Morale & the Big Steppers",
            url: "https://media.pitchfork.com/photos/658d8c80f3c653a4dd7f73df/master/w_1280%2Cc_limit/Kendrick-Lamar-Mr-Morale-and-the-Big-Steppers.jpg",
        },
        {
            descricao: "XXXTentacion",
            titulo: "Skins",
            url: "https://upload.wikimedia.org/wikipedia/en/f/f7/XXXTentacion_%E2%80%93_Skins.png",
        },
        {
            descricao: "pumapjl",
            titulo: "Autodomínio",
            url: "https://i1.sndcdn.com/artworks-8hsPT8tqJgqcTIQD-lGGvxg-t500x500.jpg",
        },  
        {
            descricao: "Mac Miller",
            titulo: "Circles",
            url: "https://monkeybuzz.com.br/wp-content/uploads/2020/01/f5528ff2f79b8c9aaf79f41beaea2379-1000x1000x1.jpg",
        },
        {
            descricao: "Tyler, The Creator",
            titulo: "CALL ME IF YOU GET LOST",
            url: "https://i.scdn.co/image/ab67616d0000b273696b4e67423edd64784bfbb4",
        },
        {
            descricao: "Baby Keem",
            titulo: "The Melodic Blue",
            url: "https://upload.wikimedia.org/wikipedia/en/9/90/TheMelodicBlueCover.jpeg",
        },
    ]

    return (
        <div className="albums">
            {albums.map((album) => {
                return (
                    <Card className="album">
                    <Card.Img variant="top" src={album.url} />
                    <Card.Body>
                        <Card.Title>{album.titulo}</Card.Title>
                        <Card.Text>{album.descricao}</Card.Text>
                        <Button variant="primary" onClick={album.onclick}>Ouvir</Button>
                    </Card.Body>
                </Card>
                );
            })}
          
        </div>
    );

};


