# grupo_8

# Guasac 2

## Integrantes:
-   Felipe Guicharrouse
-   Bastián Navarrete
-   Gabriel Vergara
-   Felipe Rojas


***

## Wiki 
Puede acceder a la Wiki mediante el siguiente [enlace](https://github.com/INGESO-2023-1/grupo_8/wiki)

***

### El proyecto es una aplicación web que simula la mensajería entre dos personas a través de una interfaz gráfica creada en [React](https://react.dev/), todo el manejo de datos se hace con [Django](https://www.django-rest-framework.org/).

### Un usuario puede agregar contactos y seleccionar a uno o más para enviarse mensajes

## Instrucciones de ejecución:

### Backend

#### Crear entorno virtual
```
py -m venv venv
```

#### Activar el entorno
```
venv\Scripts\activate
```

#### Instalar dependencias
```
pip install -r requirements.txt
```

#### Crear las migraciones de los modelos
```
py manage.py migrate
```

### Crear servidor Redis
Se utiliza para generar capas de Channels, de modo que estas puedan comunicarse entre si y además mostrar el chat en tiempo real
```
docker run -p 6379:6379 -d redis:5
```

##### Correr el servidor
```
py manage.py runserver
```
El backend se ejecutará en [http://localhost:8000]()

### Crear una sala de chat
Ingresando a [http://localhost:8000/chat]() podremos ver una ventana a través de la cual podemos crear un ChatRoom indicando un \<nombre>.
Dicho ChatRoom será creado en [http://localhost:8000/chat/<nombre>](). Al abrirlo en dos pestañas podemos tener una conversación.


### Ahora con el frontend:

#### Instalar dependencias
```
npm install
npm install react-router-dom
npm install react-bootstrap
```
#### Correr el servidor
```
cd FRONT
npm start
```
El frontend se ejecutará en [http://localhost/3000]()
