
/** Get started

Download the latest release:

[github.com/stephband/location-select/releases](https://github.com/stephband/location-select/releases)

Include the JS and CSS files:

```html
<link rel="stylesheet" href="./build/location-select.css" />
<script type="module" src="./build/location-select.js"></script>
```
**/

import element   from '../dom/modules/element.js';
import lifecycle from './modules/lifecycle.js';

const stylesheet = import.meta.url.replace(/\/[^\/]*\.js/, '/location-select-shadow.css');

export default element('<select is="location-select">', lifecycle);

// Log registration to console
window.console && window.console.log('%c<select is="location-select">%c registered (docs at %chttps://stephen.band/location-select/%c)', 'color: #3a8ab0; font-weight: 600;', 'color: #888888; font-weight: 400;', 'color: inherit; font-weight: 400;', 'color: #888888; font-weight: 400;');
