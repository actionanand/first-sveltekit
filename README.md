# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment.

## Resources

- [Set up TailWind CSS in SvelteKit project](https://dev.to/randydigital/set-up-tailwind-css-in-sveltekit-project-557m)


### Markdown in Svelte

```bash
npx svelte-add@latest mdsvex
```

- [Add mdsvex to Svelte](https://github.com/svelte-add/mdsvex)
- [Mdsvex](https://mdsvex.pngwn.io/)
- [Useful npm Tips and Tricks that Developers Should Know](https://www.labnol.org/npm-command-tricks-210824)
- [@sveltejs/adapter-static](https://github.com/sveltejs/kit/tree/master/packages/adapter-static)
