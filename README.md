
ALQUILER CONTENEDORES REQUERIMIENTOS
====================================

[X]  ERROR /UPDATE: Corrected BUG!
    Profile client: containers/edit/ 
    To try change value of rental container, the property rental_by_id is '-1' Why? don't now.

[]	Mostrar suma total de todos los deudores,
	 	Suma total de todos los ctner, solo mes actual sin deudas.-


[] To Create the new client,
	it would be a good idea to select one registered client if it exists, and not create a new client (with the same name)
	just create the rental object and link the client selected with one container.-

[X]  To Correct:  /index.js
    'Delete' button, is not updating current value: debt - pays in profile client.

[X]  URGENT, TO CORRECT:
      'NUEVO PERIODO' Button is not working..?

[]  'CLIENTES' Section
    FORM to select, which list all clients, including the clients not active. 
        To select client, the server return the payments list (from the beginning) and the web must to print a table with detail payments.        


[]  views/containers.ejs
    When the user try to register a new client, is necessary input the init date
    Cdo el usuario quiera ingresar nuevo cliente, es necesario agregar un input date en el form containers.ejs para registrar fecha que comenzó el alquiler. 

[]  Create a profile web for the inactives Clients. 


[]  /views/profile.ejs   
    Url GET: /containers/edit/:_id
    Two forms will be displayed on this page: *Container and *Client
        CONTAINER inputs: Container(id_ctdor), Cliente(rented_by) readonly, Importe(value),
        Buttons:    [X] Set Changes, 
                    []  Desvincular: Set to property 'active: false' from table Client - Update Container table that contains this client.
        CLIENT inputs: Cliente(_id), Nombre(name), Telefono(Telephone), CUIT(DNI), Razon social(business),
        post Action: /clients/edit/:_id

[]  /views/.ejs
    Create a new section "Clients" with a select object for to view the last pays of that client.
     to press button 'Ver Pagos': the server get all data pays from one client since database and will write them to the table
     on page /views/pagos/:id

[]  /views/index.ejs
    Pays Table Columns: 
    #(id_container), Cliente(rented_by), Importe(value), Fecha(paid_at), Recibo(recibo_n), Action(Delete,)

[]  /views/index.ejs
    Actions Column: Add an advert when USER press Delete Button to confirm the operation.

[]  /views/containers.ejs
    []  Add a response message when the success action is executed. ::Green
    [X] Add a response message when the user action is failure. ::Red

    
[]   Change profile.ejs to /views/ctdor-profile.ejs  >> /routes/containers/edit/#
    input Client property: set readonly Add an Edit Button FOR Change Client (NOT REQUIRED)

[X]  GET ./containers/
    On container's table, list all containers order by id_container number.
    
[X]  CLIENT: Desing and create the profile Client model (/model/Client.js)

[X]  post. /pagos/add/
    Get from database all pays of one client and registrate to model 'pago'

[X]  get. /deuda/charge
    Get from database all debts of one client and registrate to model 'deuda'

[X]  POST /containers/add -URGENT TO CORRECT: 
        When USER try to add a new Container, the get function first must verify that container is not Active. 

[X]	Mongoose /model/Container.js
    property 'id_container' may be unique: true 
    When the client try to add a container, first the function post.'/containers/add' will try to find the id_container 
     if 'id_container= getid' not exists {
        then add to database, 
        else return false; 
    }

[X]  /views/index.ejs
    'Fecha' Column: Change the current format to something like "dd/mm/yyyy"

[x]   /views/containers.ejs  
    input "Valor mensual" (value): Forbit the caracters not numerics, Aggregate an Advert!


App Rent-Containers.ng
Date: August, 2021	Developer: EHER.Mza
Languaje dev:
	Client: Angular 12, Bootstrap
	Server: typescript 4, Nodejs, MongoDb,
