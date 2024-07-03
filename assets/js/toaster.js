class Toaster {
  constructor(targetElement, options) {
    this.icons = {
      success: `<i class="ri-checkbox-circle-fill"></i>`,
      info: `<i class="ri-information-2-fill"></i>`,
      error: `<i class="ri-close-circle-fill"></i>`,
      warning: `<i class="ri-alert-fill"></i>`,
    };

    this.targetElement = document.getElementById(targetElement);

    if (this.targetElement) {
      this._clickHandler();
      this._positionType(options?.position ?? "right");
      this._animationType(options?.animation ?? "slide");
      this.toastButton = options?.button ?? false;
      this._darkmode(options?.darkmode ?? false);
    }
  }

  create(message, type = "info") {
    const element = this._createElement("div", {
      className: `toast toast--${type}`,
      innerElement: `
        <div class="toast__data">
          ${this.icons[type]}
          ${message}
        </div>
        
        ${
          this.toastButton
            ? `
              <button class="toast__close">
                <i class="ri-close-fill"></i>
              </button>
            `
            : ""
        }
      `,
    });

    if (this.targetElement) {
      this.targetElement.appendChild(element);
      element.timeoutId = setTimeout(() => this.remove(element), 5000);
    }
  }

  remove(element) {
    element.classList.add("toast--hidden");
    setTimeout(() => element.remove(), 200);

    if (element.timeoutId) {
      clearTimeout(element.timeoutId);
    }
  }

  _createElement(elenmentName, { className, innerElement }) {
    const element = document.createElement(elenmentName);
    element.className = className;
    element.innerHTML = innerElement;

    return element;
  }

  _clickHandler() {
    this.targetElement.addEventListener("click", (e) => {
      if (e.target.className === "ri-close-fill")
        this.remove(e.target.parentElement.parentElement);
    });
  }

  _positionType(value) {
    if (value === "right") {
      this.targetElement.classList.add(`toaster--right`);
    } else if (value === "center") {
      this.targetElement.classList.add(`toaster--center`);
    } else {
      throw new Error("Invalid position type.");
    }
  }

  _animationType(value) {
    if (value === "slide") {
      this.targetElement.classList.add(`toaster--slide`);
    } else if (value === "pop") {
      this.targetElement.classList.add(`toaster--pop`);
    } else {
      throw new Error("Invalid animation type.");
    }
  }

  _darkmode(value) {
    if (value) this.targetElement.classList.add(`toaster--dark`);
  }
}
