/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    // Actor partials.
    'systems/torchbearer/templates/actor/parts/actor-features.hbs',
    'systems/torchbearer/templates/actor/parts/actor-items.hbs',
    'systems/torchbearer/templates/actor/parts/actor-spells.hbs',
    'systems/torchbearer/templates/actor/parts/actor-effects.hbs',
    // Item partials
    'systems/torchbearer/templates/item/parts/item-effects.hbs',
  ]);
};
