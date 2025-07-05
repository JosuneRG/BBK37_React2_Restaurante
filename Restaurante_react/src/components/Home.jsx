import React from 'react'

//Recibe como prop un objeto llamado dishes
//Aquí estamos desestructurando props para obtener directamente dishes.
const Home = ({ dishes }) => {
    return (  //Usamos .map() para recorrer el array dishes y por cada elemento (dish) devolver un
        //<li> con su contenido. Esto permite crear una lista dinámica.
            <div className="home-container">
                <h2>Menú del día</h2>
                <ul>
                    {dishes.map(dish => (
                        <li key={dish.id}>
                            <h3>{dish.name}</h3>
                            <p>{dish.description}</p>
                            <p>Precio: ${dish.price}</p>
                        </li>
                    ))}
                </ul>
            </div>
    );
};
export default Home
