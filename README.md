# Scooter Svelte

This is an implementation of PEIDevs' infamous Scooter app. This version is implemented in [Svelte](https://svelte.dev/) version 3.0.0.

Other Scooters:

* [The People's Scooter](https://peidevs.github.io/Event_Resources/): the dependable classic, implemented in the Dojo Framework (version 1.10.3)
* [Angular Scooter](http://peidevs.github.io/Scooter/): the slightly fancier one, implemented in Angular JS v. 1.3.15

## Get started

Install the dependencies...

```bash
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

## Deploying to the web (these are from the project template I used)

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
now
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public
```
