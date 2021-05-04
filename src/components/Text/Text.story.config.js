/**
 * Common story configuration
 */

export const ArgTypesText = {
  content: {
    control: {
      type: "text",
    },
  },
  color: { control: "color" },
};

export const ArgsText = {
  color: null,
};

export const ArgsTextPrimary = {
  content: `Globular star cluster Apollonius of Perga courage of our questions vastness is bearable only through love vanquish the impossible cosmos? Are creatures of the cosmos hydrogen atoms Rig Veda dream of the mind's eye astonishment a still more glorious dawn awaits? From which we spring a mote of dust suspended in a sunbeam star stuff harvesting star light kindling the energy hidden in matter a mote of dust suspended in a sunbeam network of wormholes?`,
  ...ArgsText,
};

/**
 * Web core story configuration
 */

export const ArgTypesTextHtml = {
  ...ArgTypesText,
  render: {
    control: false,
  },
};

export const ArgsTextHtml = {
  render: "html",
};

export const ArgsTextPrimaryHtml = {
  ...ArgsTextPrimary,
  ...ArgsTextHtml,
};
