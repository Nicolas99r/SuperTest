console.log("funciona")

const process_txt = document.querySelector('.process');
const success_txt = document.querySelector('.success');

const start_btn = document.querySelector('.start-btn');
const needle = document.querySelector('.needle');
const bar = document.querySelector('.bar');
const first_start = document.querySelector('.startfirst');
const popup = document.querySelector('.bg');

const another = document.querySelector('.another');

let count = 0;

another.addEventListener('click', () => {
  count++;

  switch (count % 3) {
    case 0:
      another.innerHTML = '¿Buscas a otra persona?';
      break;
    case 1:
      another.innerHTML = 'Nah, no necesitas a nadie más 😉';
      break;
    case 2:
      another.innerHTML = 'En serio, ya tienes a Nicolás 😎';
      break;
  }
});

start_btn.addEventListener('click', function(){

    needle.classList.add('active');
    bar.classList.add('active');
    first_start.classList.add('active');

    setTimeout(() => {
        start_btn.classList.add('active');
        success_txt.classList.remove('active');
        process_txt.classList.add('active');
    });
    
    setTimeout(toggleMsg, 5300);
    
    function toggleMsg() {
        process_txt.classList.remove('active');
        success_txt.classList.add('active');
        popup.classList.add('active');

        
        /* -----------confetti------------------ */

        function fire(ratio, opt) {
            confetti(Object.assign({}, opt, {
                origin: {y: .6},
                particleCount: Math.floor(200*ratio)
            }));
        }

        fire(.25, {
            spread: 30,
            startVelocity: 60
        });
        fire(.2, {spread: 60});
        fire(.35, {
            spread: 100,
            decay: .9,
            scalar: 1
        });
        fire(.1, {
            spread: 130,
            startVelocity: 30,
            decay: .92,
            scalar: 1.2
        });
        fire(.2, {
            spread: 120,
            startVelocity: 45
        });
    }
})

popup.addEventListener('click', function(){
    popup.classList.remove('active');

    /* -----------confetti------------------ */

    function fire(ratio, opt) {
        confetti(Object.assign({}, opt, {
            origin: {y: .6},
            particleCount: Math.floor(200*ratio)
        }));
    }

    fire(.25, {
        spread: 30,
        startVelocity: 60
    });
    fire(.2, {spread: 60});
    fire(.35, {
        spread: 100,
        decay: .9,
        scalar: 1
    });
    fire(.1, {
        spread: 130,
        startVelocity: 30,
        decay: .92,
        scalar: 1.2
    });
    fire(.2, {
        spread: 120,
        startVelocity: 45
    });
})