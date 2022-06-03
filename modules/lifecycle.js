
import get      from '../../fn/modules/get.js';
import create   from '../../dom/modules/create.js';
import events   from '../../dom/modules/events.js';

function isHashRef(ref) {
    return /^#\S+$/.test(ref);
}

export default {
    construct: function(shadow) {
        // Shadow DOM
        const slot = create('slot');
        shadow.append(slot);

        // Events
        events('change', this)
        .map(get('value'))
        // Ignore links for empty spaces
        .filter((value) => !!value)
        .each((href) => {
            if (isHashRef(href)) {
                const id = ref.slice(1);
                window.location.hash = id;
            }
            else {
                window.location = href;
            }
        });
    }
};
