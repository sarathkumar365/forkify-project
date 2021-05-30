class searchView {
  _parentEl = document.querySelector('.search');

  getQuerry() {
    const querry = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return querry;
  }

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      //This is a FORM.
      //So if we don't prevent the default,the entire page will reload.

      e.preventDefault();
      handler();
    });
  }
}

export default new searchView();
