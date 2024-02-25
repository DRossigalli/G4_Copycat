let box = document.querySelectorAll('.script');
const snackbarContainer = document.querySelector('#toast');

ScrollReveal().reveal('.reveal', {
    delay: 150, 
    distance: '50px', 
    origin: 'left',
    interval: 150,
    duration: 400
});


// anime({
//     targets: '.anime',
//     opacity: [0, 1],
//     translateX: [-120, 0],
//     delay: anime.stagger(100, { from: 'first', start: 500 }),
//     easing: 'easeOutExpo',
//     // duration: 30000
// })

document.querySelectorAll('.container.container--tarefa').forEach(task => {
    task.style.display = "none";
  });
  

function scrollToTop() {
    document.querySelector("header").scrollIntoView(
        {
            behavior: 'smooth',
            
        }
    );
    console.log('funciona')
}

// function share() {
//     if (navigator.share) {
//         navigator.share({
//             title: 'Copycat',
//             text: 'Perder tempo copiando e escrevendo copy é coisa do passado',
//             url: 'https://g4-copycat.vercel.app'
//         }).then(() => {
//             console.log('Thanks for sharing!');
//             var data = { message: 'Obrigado por compartilhar!' };
//             // snackbarContainer.MaterialSnackbar.showSnackbar(data);
//         }).catch(err => {
//                 console.log(`Couldn't share because of`, err.message);
//             });
//     }
// }

const shareData = {
    title: 'Copycat',
    text: 'Perder tempo copiando e escrevendo copy é coisa do passado. Mude a vida de outro SDR agora mesmo',
    url: 'https://g4-copycat.vercel.app',
  };

function share() {
    if ('share' in navigator) {
        navigator.share(shareData)
        .then(() => {
          console.log('Compartilhamento bem-sucedido');
        })
        .catch((error) => {
          console.log('Erro ao compartilhar');
        })
    }
}

const bomDia = "Bom dia";
const boaTarde = "Boa tarde";
const boaNoite = "Boa noite";

const agora = Date.now();
const dataHora = new Date(agora);
const hora = dataHora.getHours();

let mensagem = document.querySelector('.horario')

if (mensagem != null) {
    if (hora < 12 ) {
        mensagem.innerHTML = 'Bom dia'
        let reload = (1000*60*60) * (12 - hora)
        setTimeout(() => {
            location.reload();
        }, reload);
        console.log(reload)
      } else if (hora < 19) {
          mensagem.innerHTML = 'Boa tarde'
          let reload = (1000*60*60) * (19 - hora)
        setTimeout(() => {
            location.reload();
        }, reload);
        console.log(reload)
      } else {
          mensagem.innerHTML = 'Boa noite'
          let reload = (1000*60*60) * (12 - hora)
        setTimeout(() => {
            location.reload();
        }, reload);
        console.log(reload)
      }
}



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

let deferredPrompt;
const installButton = document.querySelector('.installApp');

// installButton.addEventListener('click');

// window.addEventListener('beforeinstallprompt', (e) => {
// //   e.preventDefault();
//   deferredPrompt = e;
//   console.log(e)

//   installButton.addEventListener('click', (e) => {
//     console.log('funciona')
//     deferredPrompt.prompt();
//     deferredPrompt.userChoice.then((choiceResult) => {
//         if (choiceResult.outcome === 'accepted') {
//           console.log('User accepted the A2HS prompt');
//         } else {
//           console.log('User dismissed the A2HS prompt');
//         }
//         deferredPrompt = null;
//       });
//   });
// });

// Registra o evento beforeinstallprompt
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
});

// Adiciona um evento de clique ao botão de instalação
// installButton.addEventListener('click', (e) => {
//     if (deferredPrompt) {
//         deferredPrompt.prompt();
//         deferredPrompt.userChoice.then((choiceResult) => {
//             if (choiceResult.outcome === 'accepted') {
//                 console.log('O usuário aceitou a instalação');
//             } else {
//                 console.log('O usuário recusou a instalação');
//             }
//             deferredPrompt = null;
//         });
//     }
// });
document.addEventListener("DOMContentLoaded", function() {
    var copyBox = document.querySelectorAll('.script');
    copyBox.forEach(function(copy) {
        console.log('+1')
        var divHeight = copy.clientHeight;
        var textHeight = copy.getElementsByTagName('span').clientHeight;
        if (textHeight > divHeight) {
            console.log('maior')
            copy.classList.add('script--shadow');
        }
    });
});


function installApp() {
    console.log('funfa')
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('O usuário aceitou a instalação');
            } else {
                console.log('O usuário recusou a instalação');
            }
            deferredPrompt = null;
        });
    }
}

// let copyContainer = document.querySelectorAll('.container');

// copyContainer.forEach(container => {
//     document.createElement('div').textContent;

// })