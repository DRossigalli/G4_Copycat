let box = document.querySelectorAll('.script');
const snackbarContainer = document.querySelector('#toast');

box.forEach(frase => {
    frase.addEventListener('click', e => {
        box.forEach(b => {
            if (b.classList.contains('active')) {
                b.classList.remove('active');
                // b.classList.add('used');
            }
        })
        e.target.closest('.script').classList.add('active');

        let text = e.target.innerText;
        text = text.trim();

        navigator.clipboard.writeText(text).then(function () {
            console.log('Async: Copying to clipboard was successful!');
            var data = { message: 'Mensagem copiada com sucesso!' };
            snackbarContainer.MaterialSnackbar.showSnackbar(data);
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
            var data = { message: 'Mensagem não foi copiada!' };
            snackbarContainer.MaterialSnackbar.showSnackbar(data);
        });
    })
})