# How to install

Clone repository to your device
In your terminal go to project folder and run `npm install && npm run dev`

## Tasks

### Transfer the project to TypeScript

I've installed typescript via NPM as well as vite-tsconfig-paths to support import aliases so my imports can utilize `@homework-task/components/...pathToTheComponent `
Also I've changed file extensions from .jsx to .tsx and wrote types for component props.

[Commit](https://github.com/moonbyt3/milorad-jekic-fatcat-task/commit/9147fe83935442ae8de3b781dca12ba56607c929)

Husky and lint-staged were added to utilize pre-commit checks with eslint and typechecking.

[Commit](https://github.com/moonbyt3/milorad-jekic-fatcat-task/commit/23abedb993ba413abfe5e3c70f92d1e17546a32e)

### Create a List Component

I've added @tanstack/react-query library to be able to fetch and display data from the provided API endpoint.

[Commit](https://github.com/moonbyt3/milorad-jekic-fatcat-task/commit/b4859879f6e344c8352c8c5969fddf72dabd04ee)

Then I proceeded to coding List component that can be reused by adding props for query function, item component to render as well as loading message, error message and title of the component.

[Commit](https://github.com/moonbyt3/milorad-jekic-fatcat-task/commit/617d8e4c731b42833d6253c86d18dc9485050ca4)

### Create a Form Generator Component

I created Form Generator Component that uses react-hook-form library together with Zod library used for validation of form inputs. I've also used @tanstack/react-query to make POST request to the provided API endpoint.

[Commit](https://github.com/moonbyt3/milorad-jekic-fatcat-task/commit/a42307d15eb997b893124a9505f61244f4dc2922)

### Create a Page Generator Component

For this task I've created component that accepts array of data and renders components from the src/components directory.

[Commit](https://github.com/moonbyt3/milorad-jekic-fatcat-task/commit/8bf25c9389355226b373509a14d04d5d70914fbe)
