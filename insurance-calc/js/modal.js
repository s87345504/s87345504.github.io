
class Modal {
  constructor(title = "提示", message = "NULL",btnTitle='关闭', callback) {
    this.callback = callback;
    this.modal = document.createElement('div');
    this.modal.className = 'modal';
    this.modal.innerHTML = `
<div class="alert">
    <h3>${title}</h3>
    <div class="alert-msg">
        ${message}
    </div>
    <div class="close">
    <a href="javascript:void(0);">${btnTitle}</a>
    </div>
</div>
  `;
  }
  open() {
    document.body.appendChild(this.modal);
    this.modal.querySelector(".close").addEventListener("click", () => {
      this.close();
    });
  }
  close() {
    if (!(this.callback && this.callback.apply(this.modal))) {
      document.body.removeChild(this.modal);
    }

  }
}

