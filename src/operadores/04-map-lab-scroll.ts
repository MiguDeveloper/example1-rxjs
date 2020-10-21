import { map, tap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

const texto = document.createElement('div');
texto.innerHTML = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat
    nobis ipsam quod voluptates ratione quae aut soluta harum neque voluptate
    modi illo, autem vero nemo? Asperiores excepturi esse a?
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);

// funcion calcula porc de scroll
const calcPorcScroll = (event) => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight,
  } = event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// streams
const scroll$ = fromEvent(document, 'scroll');
const progress$ = scroll$.pipe(
  map((val) => calcPorcScroll(val)),
  tap(console.log)
);

progress$.subscribe((porc) => {
  progressBar.style.width = `${porc}%`;
});
