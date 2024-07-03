class Toaster{constructor(t,e){this.icons={success:'<i class="ri-checkbox-circle-fill"></i>',info:'<i class="ri-information-2-fill"></i>',error:'<i class="ri-close-circle-fill"></i>',warning:'<i class="ri-alert-fill"></i>'},this.targetElement=document.getElementById(t),this.targetElement&&(this._clickHandler(),this._positionType(e?.position??"right"),this._animationType(e?.animation??"slide"),this.toastButton=e?.button??!1,this._darkmode(e?.darkmode??!1))}create(t,e="info"){let i=this._createElement("div",{className:`toast toast--${e}`,innerElement:`
    <div class="toast__data">
      ${this.icons[e]}
      ${t}
    </div>
    
    ${this.toastButton?`
          <button class="toast__close">
            <i class="ri-close-fill"></i>
          </button>
        `:""}
  `});this.targetElement&&(this.targetElement.appendChild(i),i.timeoutId=setTimeout(()=>this.remove(i),5e3))}remove(t){t.classList.add("toast--hidden"),setTimeout(()=>t.remove(),200),t.timeoutId&&clearTimeout(t.timeoutId)}_createElement(t,{className:e,innerElement:i}){let s=document.createElement(t);return s.className=e,s.innerHTML=i,s}_clickHandler(){this.targetElement.addEventListener("click",t=>{"ri-close-fill"===t.target.className&&this.remove(t.target.parentElement.parentElement)})}_positionType(t){if("right"===t)this.targetElement.classList.add("toaster--right");else if("center"===t)this.targetElement.classList.add("toaster--center");else throw Error("Invalid position type.")}_animationType(t){if("slide"===t)this.targetElement.classList.add("toaster--slide");else if("pop"===t)this.targetElement.classList.add("toaster--pop");else throw Error("Invalid animation type.")}_darkmode(t){t&&this.targetElement.classList.add("toaster--dark")}}