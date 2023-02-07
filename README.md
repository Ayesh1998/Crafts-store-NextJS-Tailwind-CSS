# Frontend

## How to run the frontend locally

- First clone the code
- Then open command prompt inside the cloned code
- Run "npm install" in command prompt
- Then run "npm start"
- Then use http://localhost:3000/

## Hosted URL

- Hosted Link - https://crafts-store.vercel.app/

## How to run frontend storybook 

- Run "npm run storybook" command in command prompt
- Then use http://localhost:6007/

## How to run frontend tests 

- Run "npm run test" command in command prompt

## Project Structure

- This is a NextJs project and used tailwind css for styling and used NextAuth(credentials with JWT) for authentication.
- And for testing used jest and storybook.
- And used Atomic Architecture.
- Root directory files  
  - .env.local
  - package.json 
  - jest.config.js and jest.setup.js(for jest configuration)
  - middleware.ts (use to protect routes)
  - next.config.js (next configurations)
  - tailwind.config.js (tailwin  configurations)
  - tsconfig.json (types  configurations)
  - typings.d.ts (reusable types)
  - .storybook (storybook configur  files)
  - public (assets which can asses from anywhere in the project)
##
- And all the other project files are inside src directory
  - src/api directory has files for backend api calling.
  - src/assets directory has assets files.
  - src/components directory has all the UI components.
  - src/constants directory has all the constant enums and other constants.
  - src/hooks directory has custom hooks.
  - src/pages directory has all the routing pages and authentication api configuration.
  - src/redux directory has redux configuration files.
  - src/stories directory has storybook testing files.
  - src/styles directory has global styling file.
  - src/test directory has jest testing files.
  - src/utils directory has validation files and other util files.

## .env Variables

- NEXT_PUBLIC_BASE_URL - Backend base URL
- NEXTAUTH_SECRET - Next Auth Secret key

## Frontend functionalities.

- User can login to the system using login.
- If the user is an admin,
  - Can see the analytics about crafts sales.
  - Can add, edit and delete crafts.
- If the user is a buyer
  - Can see the analytics about bought crafts.
  - Can add crafts to basket and see them in checkout.
  - Can remove items from basket.
