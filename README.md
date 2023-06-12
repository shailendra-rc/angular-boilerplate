# INSTALLABLES

- [Install VSCODE](https://code.visualstudio.com/download/)

- [Ionic](https://ionicframework.com/docs/intro/cli)

# Folder Structure

- Core/ - Anything we would load only once in an application like header component, footer component, auth service etc or anything with global effect like auth guard, http interceptors to handle global error responses.
  - Services/
    - auth.service.ts
  - Gaurds/
  - Interceptors/
    - http.interceptor.ts
  - core.module.ts
- Shared/ - Anything that will be used across your application
  - Components/
    - Page/
    - Sub-page/
    - Element/
  - Pipes/
  - Directives/
  - Services/
  - shared.module.ts
- Views/ - Each folder within this folder is a feature module.
  - Feature Module 1/
    - Components/
      - Page/
      - Sub-Page/
      - Element/
    - Services/
    - Pipes/
    - Directives/
    - feature1.module.ts
  - Feature Module 2/
    - feature2.module.ts
