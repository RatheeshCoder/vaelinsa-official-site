import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GetQuote from "../components/GetQuote";
// import dat from "dat.gui";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/header/Navbar";
import '../style/manikandan/style.css'

import Video from "../components/Video";
import Cards from "../components/Cards";

import Carousel from "../components/Carousel";


gsap.registerPlugin(ScrollTrigger);

const HomeMain = () => {
  const main = useRef(null);
  const model = useRef(null);
  let mixer = useRef(null);
  const [observers, setObservers] = useState([]);
  // const gui = useRef(null);

  const setupScrollTrigger = (
    triggerElement,
    positionX,
    positionY,
    positionZ,
    rotationX,
    rotationY,
    rotationZ
  ) => {
    const positionObject = { x: positionX, y: positionY, z: positionZ };
    const rotationObject = { x: rotationX, y: rotationY, z: rotationZ };

    const updateModelPosition = () => {
      if (model.current) {
        gsap.to(model.current.position, {
          x: positionObject.x,
          y: positionObject.y,
          z: positionObject.z,
          duration: 2.5,
          ease: "elastic.out(1,0.3)",
          start: "top bottom",
          end: "bottom bottom",
          scroller: ".main",
          clearProps: "all",
          scrub: 0.2,
          immediateRender: false,
        });
        gsap.to(model.current.rotation, {
          x: rotationObject.x,
          y: rotationObject.y,
          z: rotationObject.z,
          duration: 2.5,
          ease: "elastic.out(1,0.3)",
          start: "top bottom",
          end: "bottom bottom",
          scroller: ".main",
          clearProps: "all",
          scrub: 0.2,
          immediateRender: false,
        });
      }
    };

    const trigger = gsap.to(
      {},
      {
        scrollTrigger: {
          trigger: triggerElement,
          start: "top bottom",
          end: "bottom bottom",
          scroller: ".main",
          clearProps: "all",
          scrub: 0.2,
          immediateRender: false,
        },
        onUpdate: updateModelPosition,
      }
    );

    return trigger;
  };

  // useEffect(() => {
  //   gui.current = new dat.GUI();
  //   const position = { x: 0, y: 0, z: 0 };
  //   const rotation = { x: 0, y: 0, z: 0 };

  //   const updateModel = () => {
  //     if (model.current) {
  //       model.current.position.set(position.x, position.y, position.z);
  //       model.current.rotation.set(rotation.x, rotation.y, rotation.z);
  //     }
  //   };

  //   gui.current.add(position, 'x', -500, 500).onChange(updateModel);
  //   gui.current.add(position, 'y', -500, 500).onChange(updateModel);
  //   gui.current.add(position, 'z', -500, 500).onChange(updateModel);
  //   gui.current.add(rotation, 'x', -Math.PI, Math.PI).onChange(updateModel);
  //   gui.current.add(rotation, 'y', -Math.PI, Math.PI).onChange(updateModel);
  //   gui.current.add(rotation, 'z', -Math.PI, Math.PI).onChange(updateModel);

  //   return () => {
  //     gui.current.destroy();
  //   };
  // }, []);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      30,
      window.innerWidth / window.innerHeight,
      1,
      5000
    );
    camera.position.set(0, 0, 500);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Set clear color to transparent
    main.current.appendChild(renderer.domElement);
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 2);
    hemiLight.color.setHSL(0.6, 1, 0.6);
    hemiLight.groundColor.setHSL(0.095, 1, 0.75);
    hemiLight.position.set(0, 50, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 3);
    dirLight.color.setHSL(0.1, 1, 0.95);
    dirLight.position.set(-1, 1.75, 1);
    dirLight.position.multiplyScalar(30);
    scene.add(dirLight);
    dirLight.castShadow = true;

    const loader = new GLTFLoader();
    loader.load("/Flamingo.glb", (gltf) => {
      model.current = gltf.scene.children[0];
      model.current.castShadow = true;
      model.current.receiveShadow = true;
      scene.add(model.current);

      mixer.current = new THREE.AnimationMixer(model.current);
      const action = mixer.current.clipAction(gltf.animations[0]);
      action.play();

      const firstTriggerElement = document.getElementById("first");
      const secondTriggerElement = document.getElementById("second");
      const thirdTriggerElement = document.getElementById("third");
      const fourthTriggerElement = document.getElementById("fourth");

      const firstObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setupScrollTrigger(firstTriggerElement, -34, -23, 300, -1, 0, 0);
            }
          });
        },
        { threshold: 0.5 }
      );

      const secondObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setupScrollTrigger(secondTriggerElement, -45, -12, 300, -1, 0, 3);
            }
          });
        },
        { threshold: 0.5 }
      );

      const thirdObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setupScrollTrigger(thirdTriggerElement, 74, -12, 334, -1, 0, -1);
            }
          });
        },
        { threshold: 0.5 }
      );

      const fourthObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setupScrollTrigger(fourthTriggerElement, -45, 9, 334, -1, 0, 1);
            }
          });
        },
        { threshold: 0.5 }
      );

      setObservers([
        firstObserver,
        secondObserver,
        thirdObserver,
        fourthObserver,
      ]);

      firstObserver.observe(firstTriggerElement);
      secondObserver.observe(secondTriggerElement);
      thirdObserver.observe(thirdTriggerElement);
      fourthObserver.observe(fourthTriggerElement);
    });

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      if (mixer.current) mixer.current.update(0.004);
    };

    animate();

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      ScrollTrigger.refresh(true);
    };

    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
      main.current.removeChild(renderer.domElement);

      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (<>
    <section>
      <div className="canvas " ref={main}></div>
      <div className="main">
        {/* render all the compound in the bellow and add the id also */}

        <div className="nav-hero-common">
    <Navbar/>
    <Hero/>
    </div>
      </div>
    </section>
   <section>
    {/* <GetQuote/> */}
    <div>
          <Video />
          <Cards />
        
      </div>
    </section>

    {/* <GetQuote/> */}

    <GetQuote/>
    <Carousel/>

    </>
  );
};

export default HomeMain;
