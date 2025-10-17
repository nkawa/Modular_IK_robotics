"use client";
import 'aframe';
import * as React from 'react'
const THREE = window.AFRAME.THREE; // これで　AFRAME と　THREEを同時に使える

import { AppMode } from './appmode.js';

import '../lib/robotRegistry.js';
import '../lib/robotLoader.js';
import VrControllerComponents from '../components/VrControllerComponents.jsx';
import ButtonUI from '../components/ButtonUI.jsx';
import '../lib/rapierBoxController.js';
import '../lib/rapierHand1MotionUI.js';
import '../lib/ikWorker.js';
import '../lib/reflectWorkerJoints.js';
import '../lib/armMotionUI.js';

//import StereoVideo from '../components/stereoWebRTC.js';

export default function Home(props) {

  const deg30 = Math.PI / 6.0;
  const deg90 = Math.PI/2;
  const deg45 = Math.PI/4;
  const deg22 = Math.PI/8;
  return (

    <a-scene scene xr-mode-ui={`enabled: ${!(props.appmode === AppMode.viewer) ? 'true' : 'false'}; XRMode: xr`} >
          <a-entity id="robot-registry"
                robot-registry
                event-distributor>
        <VrControllerComponents />
      </a-entity>
      <a-entity camera position="-0.5 1.2 1.7"
                look-controls="enabled: false"></a-entity>

      <ButtonUI />
      <a-cylinder position="1.25 0.2 -0.75"
                  radius="0.12" height="0.4" color="#FFC65D"
                  material="opacity: 0.35; transparent: true">
      </a-cylinder>

      <a-entity
        id="rapier-controller"
        rapier-box-controller="robotId: rapier-controller"
        rapier-hand1-motion-ui
      />

      <a-plane id="jaka-plane"
               robot-loader="model: jaka_zu_5"
               position="0 0.1 -1.25" rotation="-90 0 90"
               width="2" height="2" color="lightcoral"
               material="opacity: 0.15; transparent: true; side: double;"
               ik-worker={`${deg22}, ${deg30}, ${-deg45}, 0, ${-deg90}, 0`}
               reflect-worker-joints
               arm-motion-ui
      />
      <a-plane id="nova2-plane"
	       position="-1.0 0.0 -1.0" rotation="-90 0 90"
	       width="2" height="2" color="beige"
	       material="opacity: 0.15; transparent: true; side: double;"
               robot-loader="model: nova2_robot"
               ik-worker={`${deg90}, ${-deg90}, ${deg90}, 0, ${-deg90}, 0`}
               reflect-worker-joints
               arm-motion-ui
      />
      {/* <a-sky color="#ECECEC"></a-sky> */}
    </a-scene>
  );
}