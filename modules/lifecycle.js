
import create   from '../../dom/modules/create.js';
import events   from '../../dom/modules/events.js';

function isHashRef(ref) {
    return /^#\S+$/.test(ref);
}

export default {
    construct: function() {
        events('change', this)
        .map((e) => e.target.value)
        // Ignore links for empty spaces
        .filter((href) => !!href)
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
