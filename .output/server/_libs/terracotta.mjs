import { createContext } from "./solid-js.mjs";
createContext();
[
	`a[href]`,
	`area[href]`,
	`input:not([disabled]):not([type="hidden"])`,
	`select:not([disabled])`,
	`textarea:not([disabled])`,
	`button:not([disabled])`,
	`summary`,
	`iframe`,
	`audio[controls]`,
	`video[controls]`,
	`[tabindex]:not([tabindex="-1"])`,
	`[contenteditable=""]`,
	`[contenteditable="true"]`
].join(`, `);
function P(e) {
	return { [`tc-${e}`]: `` };
}
createContext();
P(`accordion`);
P(`accordion-button`);
P(`accordion-header`);
P(`accordion-item`);
P(`accordion-panel`);
createContext();
P(`button`);
createContext();
P(`alert`);
createContext();
createContext();
P(`alert-dialog`);
P(`alert-dialog-description`);
P(`alert-dialog-overlay`);
P(`alert-dialog-panel`);
P(`alert-dialog-title`);
createContext();
createContext();
P(`checkbox`);
P(`checkbox-description`);
P(`checkbox-indicator`);
P(`checkbox-label`);
createContext();
createContext();
createContext();
P(`combobox`);
P(`combobox-input`);
P(`combobox-options`);
P(`combobox-option`);
P(`combobox-label`);
P(`command`);
P(`command-input`);
P(`command-options`);
P(`command-option`);
P(`command-label`);
createContext();
createContext();
createContext();
P(`command-bar`);
P(`command-bar-description`);
P(`command-bar-overlay`);
P(`command-bar-panel`);
P(`command-bar-title`);
createContext();
P(`context-menu`);
P(`context-menu-boundary`);
P(`context-menu-overlay`);
P(`context-menu-panel`);
createContext();
P(`dialog`);
P(`dialog-description`);
P(`dialog-overlay`);
P(`dialog-panel`);
P(`dialog-title`);
createContext();
P(`disclosure`);
P(`disclosure-button`);
P(`disclosure-panel`);
createContext();
P(`feed`);
P(`feed-article`);
P(`feed-article-description`);
P(`feed-article-label`);
P(`feed-content`);
P(`feed-label`);
createContext();
createContext();
createContext();
P(`listbox`);
P(`listbox-button`);
P(`listbox-label`);
P(`listbox-options`);
P(`listbox-option`);
createContext();
createContext();
P(`menu`);
P(`menu-item`);
createContext();
P(`popover`);
P(`popover-button`);
P(`popover-overlay`);
P(`popover-panel`);
createContext();
createContext();
P(`radio-group`);
P(`radio-group-description`);
P(`radio-group-label`);
P(`radio-group-option`);
createContext();
P(`select`);
P(`select-option`);
createContext();
createContext();
P(`tab-group`);
P(`tab-list`);
P(`tab`);
P(`tab-panel`);
P(`toast`);
P(`toaster`);
createContext();
var va = class e {
	constructor() {
		this.queue = [], this.listeners = /* @__PURE__ */ new Set(), this.toastID = 0, this.id = e.toasterID, e.toasterID += 1;
	}
	subscribe(e) {
		return this.listeners.add(e), () => {
			this.listeners.delete(e);
		};
	}
	notify() {
		let e = [...this.queue];
		for (let t of this.listeners.keys()) t(e);
	}
	create(e) {
		let t = `toast-${this.id}-${this.toastID}`;
		return this.toastID += 1, this.queue.push({
			id: t,
			data: e
		}), this.notify(), t;
	}
	remove(e) {
		this.queue = this.queue.filter((t) => t.id !== e), this.notify();
	}
	clear() {
		this.queue = [], this.notify();
	}
	getQueue() {
		return this.queue;
	}
};
va.toasterID = 0;
createContext();
P(`toggle`);
P(`toolbar`);
createContext();
createContext({});
createContext();
//#endregion
export {};
