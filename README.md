CRYPTO REALM

Crypto Realm is the place where everything starts! Develop your early ideas to create a new Crypto, modify itas much as you want or delete them if you change your mind. Crypto Realm allows you to check other projects based on the Crypto field and blockchain tech, and also filter them through the ICO date to do not miss any chance.
One idea can change everything!

The technologies that made this project possible:

🔸 Front
React | Redux | Styled Components | Typescript | Jest | MSW | Toastify | Font Awesome

🔸 Back
NodeJS | ExpressJS | MongoDB | Mongoose | JWT | Supabase | Jest | Supertest

🔸 Tools
Trello | Postman | Figma | Git

Metrics

📈 [Back SonarCloud metrics](/summary/new_code?id=isdi-coders-2022_Pablo-Sobrino_Back-Final-Project-202207-BCN)

📈 [Front SonarCloud metrics](/summary/new_code?id=isdi-coders-2022_Pablo-Sobrino_Front-Final-Project-202207-BCN)

Links
🌐✨ [Crypto Realm](psobrino-final-project-202207-bcn.netlify.app/register)

🔗 [Original front repository](/isdi-coders-2022/Pablo-Sobrino_Front-Final-Project-202207-BCN)

🔗 [Original back repository](/isdi-coders-2022/Pablo-Sobrino_Back-Final-Project-202207-BCN)

Back endpoints
🔹 POST ➡️ .../register
Register a user. The payload should have a username and a password which should be introduced twice the same.

🔹 POST ➡️ .../login
Login with an existing user to get a valid token. The payload should have an existing username and password.

🔹 GET ➡️ .../crypto
Get all the crypto in a list with the fields name, logo, team and value to check them.

🔹 GET ➡️ .../crypto/details/:id
Get a specifyc crypto in detail.

🔹 POST ➡️ .../crypto/create
Create a crypto. The payload should have a title, an image, a description, the number of people that will be involved in the team, the estimated value, and the ICO date in which the cryoto should be release.

🔹 DEL ➡️ .../crypto/:idToDelete
Delete a crypto with it's ID.

🔹 PUT ➡️ .../crypto/modify/:noteId
Edit a crypto with it's ID.
