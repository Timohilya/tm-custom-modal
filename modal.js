const Modal = {
    $modalButtons: document.querySelectorAll('[data-popupbtn]'),
    init: function() {
        if(this.$modalButtons.length) {
            this.$modalButtons.forEach(popupbtn => {
                let name = popupbtn.getAttribute('data-popupbtn');
                this.openPopupByButtonClick(name);
                this.closePopupByOuterClick(name);
                this.closePopupByButtonClick(name);
            });
        }
    },
    openPopupByButtonClick: function(name) {
        document.querySelector(`[data-popupbtn=${name}]`).addEventListener('click', () => {
            this.openPopupByName(name);
        });
    },
    closePopupByOuterClick: function(name) {
        document.querySelector(`[data-popup=${name}]`).addEventListener('click', e => {
            if(e.target.classList.contains('modal__content')) {
                this.closePopupByName(name);
            }
        });
    },
    closePopupByButtonClick: function(name) {
        document.querySelector(`[data-popup=${name}]`).querySelector(`.modal__close`).addEventListener('click', () => {
            this.closePopupByName(name);
        });
    },
    openPopupByName: function(name) {
        this.pageScrollLock();
        document.querySelector(`[data-popup=${name}]`).classList.add('show');
        document.querySelector(`[data-popup=${name}]`).classList.add('fade-in');
    },
    closePopupByName: function(name) {
        this.pageScrollAvailable();
        document.querySelector(`[data-popup=${name}]`).classList.add('fade-out');
        setTimeout(() => {
            document.querySelector(`[data-popup=${name}]`).classList.remove('show');
            document.querySelector(`[data-popup=${name}]`).classList.remove('fade-in');
            document.querySelector(`[data-popup=${name}]`).classList.remove('fade-out');
        }, 300)
    },
    pageScrollLock: function() {
        console.log(window.innerWidth, document.documentElement.clientWidth);
        document.body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px';
        document.body.classList.add('scrollock');
    },
    pageScrollAvailable: function() {
        document.body.style.paddingRight = 0;
        document.body.classList.remove('scrollock');
    },
}

Modal.init();