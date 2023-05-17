# grupo_8

# Guasac 2

## Integrantes:
-   Felipe Guicharrouse
-   Bastián Navarrete
-   Gabriel Vergara
-   Felipe Rojas

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

##### Correr el servidor
```
py manage.py runserver
```
El backend se ejecutará en [http://localhost:8000]()

### Ahora con el frontend:
#### Correr el servidor
```
cd FRONT
npm start
```
El frontend se ejecutará en [http://localhost/3000]()