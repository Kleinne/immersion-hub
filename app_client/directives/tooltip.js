/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */

import { createPopper } from '@popperjs/core';

const createElementFromHTML = (htmlString) => {
  const div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  return div.firstChild;
};

const createTooltipEl = (text) =>
  createElementFromHTML(`
  <div class="absolute z-10 w-64 p-4 text-sm text-white bg-black rounded-lg">
    <p>${text}</p>
  </div>
  `);

const showPopper = (target, tooltip) =>
  createPopper(target, tooltip, {
    placement: 'bottom-end',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 5],
        },
      },
    ],
  });

export function getContent(value) {
  const type = typeof value;
  if (type === 'string') {
    return value;
  }
  if (value && type === 'object') {
    return value.content;
  }
  return false;
}

export function createTooltip(el, value) {
  const newTooltip = createTooltipEl(getContent(value));
  const tooltip = {
    tooltipEl: newTooltip,
    refEl: el,
    popper: null,
    setContent(content) {
      if (!content) {
        this.dispose();
        return;
      }
      this.tooltipEl = createTooltipEl(content);
    },
    dispose() {
      this.refEl.removeEventListener('mouseenter', this.showTooltip);
      this.refEl.removeEventListener('mouseleave', this.hideTooltip);
      this.hideTooltip();
      this.tooltipEl = null;
    },
    showTooltip() {
      if (!this.tooltipEl) {
        return;
      }
      document.body.appendChild(this.tooltipEl);
      this.popper = showPopper(this.refEl, this.tooltipEl);
    },
    hideTooltip() {
      if (this.tooltipEl && this.tooltipEl.parentNode) {
        this.tooltipEl.parentNode.removeChild(this.tooltipEl);
      }
      this.popper?.destroy();
    },
    show() {
      this.refEl.addEventListener('mouseenter', this.showTooltip.bind(this));
      this.refEl.addEventListener('mouseleave', this.hideTooltip.bind(this));
    },
  };

  return tooltip;
}

export function destroyTooltip(el) {
  if (el._tooltip) {
    el._tooltip.dispose();
    delete el._tooltip;
  }
}

export function bind(el, { value, modifiers }) {
  const content = getContent(value);
  if (!content) {
    destroyTooltip(el);
    return;
  }
  let tooltip;
  if (el._tooltip) {
    tooltip = el._tooltip;
    tooltip.setContent(content);
  } else {
    tooltip = createTooltip(el, value, modifiers);
  }

  el._tooltip = tooltip;
  tooltip.show();
}

export const directive = {
  bind,
  update: bind,
  unbind(el) {
    destroyTooltip(el);
  },
};

export default directive;
