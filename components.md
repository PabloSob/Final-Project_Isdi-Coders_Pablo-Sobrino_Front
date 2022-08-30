## COMPONENTES

# APP

- Recibe: token del usuario
- Muestra:
    - Full application + name app
- Estado: logueado o no logueado
- Acción: Setea o Guarda en local storage el token. ????

# LOGIN:

- Recibe: si es Form Login
- Muestra: un formulario con campos userName y Password, con un botón y su texto. Y
  un link para ir a Form Register
- Estado: actualizará los datos que va introduciendo el usuario.
- Acción: al clickar el usuario, enviar el formulario y los datos del usuario pasan al store.

# REGISTER:

- Recibe: si es Form Register
- Muestra: un formulario con campos userName, Password, Repeat password y un botón con su texto. Y un link para ir a Form Login
- Estado propio: ir actualizando los datos del usuario.
  Acción: al clickar se envía la info formulario de registro

# LISTA DE CRYPTO-PROYECTOS

- Recibe: el array con los crypto-proyectos???? 
  Muestra:
  Muestra Proyectos
   - Botón de crear
   - Filtro
   - Muestra tantas cards de crypto-proyectos como reciba.
   - Paginación con el nº por página
  -Link de logout
- Estado: variable según el número de crypto-proyectos que haya
  Acción del usuario: clicar filtro, clicar paginación o clicar create, o clickar en el link de logout para desloguearse

# CRYPTO-PROJECT CARD

- Recibe por props: la info del crypto-proyecto
- Muestra:
   - muestra un título
  -un logo
  una descripción
  El tamaño del equipo
  El valor estimado
  Botón para ver detalle

- Estado: nada
  Acción del usuario: al clicar la el botón lo lleva a card al detalle

# FORM LA CARD DE DETALLE

\*\*\*Si es modificar:

- Recibe: info del crypto-proyecto y qué tipo de formulario es
- Muestra: formulario con inputs llenos
   - título
   - logo
- descripción
   - equipo
  Valor
  ICO
  Botón modificar
  Botón eliminar
  Enlace de regreso a la lista
- Estado: nada
  Acción: submit botón modificar
  Click botón eliminar

\*\*\*Si es de crear:

- Recibe: qué tipo de formulario es
- Muestra: formulario con inputs vacíos
- título
   - logo
- descripción
   - equipo
  -Valor
  -ICO
- Botón de crear
- Estado: nada
- Acción: submit

# BOTÓN

- Recibe: un texto y la acción a realizar (props)
- Muestra: un botón con el texto recibido
- Estado: nada
  Acción del usuario: invoca acción a realizar al ser clickado

# CRYPTO CARD DETALLE

- Recibe por props: la info del crypto proyecto
- Muestra:
   - título
   - logo
- descripción
   - equipo
  -Valor
  -ICO
- Estado: nada
  Acción del usuario: al clicar botón modificar lo lleva al form y al clicar botón eliminar realiza la acción y lleva al usuario a la lista

# PAGINACIÓN

- Recibe: número de página en la que está
- Estado: Ninguno.
- Muestra: El número de página recibido dos iconos de flecha.
- Acciones del usuario: Cuando el usuario clickea los iconos, uno lo lleva a la página anterior y otro a la posterior.

# MODALES

- Recibe: Tipo de modal y texto propio del tipo.
- Estado:
  Loading…
  Success!
  Fail!
- Muestra: Un loader, success o fail
- Acciones del usuario: Ninguna.

## Datos: Array de objetos crypto
Modificaciones:
Volcar/cargar todos los crypto proyectos
Crear crypto
Modificar crypto
Eliminar crypto
