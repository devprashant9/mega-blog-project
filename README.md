# Mega Blog Project Using appWrite in Backend

## 14-02-2025

- project setup using vite and installed required dependencies

### Guide to Environment Variables

- always kept in a file named `.env` to store system variables.
- declaration, initialization and access of these variables depends on the library or framework being used.
- this file is never shipped to github or production.
- a `.env.sample` is also created that only contains variable names without value which allows project explorer to get idea of the variables that is being used.
- this file is mostly loaded once so any change made in this file needs a entire re-start of the project.
- a config file is made in order to import and export `env variables` so that any updates should be made only once which will reflect in the entire project.

### How to Enclose Backend Service in Project to Prevent Vendor Lock-In Problem

- the term vendor lock-in means difficulty, while trying to switch between different service vendors.
- so the code must be written in such format where switchinng becomes seamless without affecting the frontend.
- to implement the services a `class` is created where all services are implemented using methods.
- the user tries to access methods of these class so no matter what services are being used in backend the availability in frontend still remains the same.
- the only change made is in the implementation file if there is a need to switch between different services offered by different vendors.