import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import './App.css';

// Aquí definimos el array "dishes" con los platos que tiene el restaurante
const dishes = [
      { id: 1, name: 'Pisto', description: 'Este es el plato 1', price: 10 },
      { id: 2, name: 'Lomo con patatas', description: 'Este es el plato 2', price: 20 },
      { id: 3, name: 'Ensalada mixta', description: 'Este es el plato 3', price: 15 },
      { id: 4, name: 'Pollo asado con ensalada', description: 'Este es el plato 4', price: 10 },
      { id: 5, name: 'Pechuga con patatas', description: 'Este es el plato 5', price: 20 },
      { id: 6, name: 'Ensalada mixta con atun', description: 'Este es el plato 6', price: 15 }
]

// Definimos el componente principal de la app
const App = () => {
  return (
        <div>
            <Header />
            <Home dishes={dishes} />
        </div>
  )
}

export default App
