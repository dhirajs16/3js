import * as THREE from 'three'


const canvas = document.getElementById('animate')

// scene
const scene = new THREE.Scene()


// mesh
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 1),
  new THREE.MeshBasicMaterial({color: 0xff0000})
)
scene.add(cube)


//camera
const size = {
  width: 800,
  height: 400
}
const aspect_ratio = size.width/size.height

const camera = new THREE.PerspectiveCamera(75, aspect_ratio)
camera.position.set(2, 1, 5)
scene.add(camera)


// renderer
const renderer = new THREE.WebGLRenderer({canvas:canvas})
renderer.setSize(size.width, size.height)


// animate
/* 
The use of the window.requestAnimationFrame(recurring_func) function
is to the recurring_func in the next frame, and when it transition to 
next frame it calls the recurring_func again the next frame and again 
and again....
It is like a recursive function that call itself again and again. 
The instructions coded like move in x-axia by 1 unit in every
frame act as an animation


const tick = () => {
  
  // animation instruction
  cube.rotation.z += 0.05
  // cube.position.x += 0.05

  
  // render the frame
  renderer.render(scene, camera)
  // call tick function again and again
  window.requestAnimationFrame(tick)
}
*/






/*
Since fps varies from device to device so to bring uniformity in
animation we use time function.



let time = Date.now()

const tick = () => {
  let currtime = Date.now()
  let deltime = currtime - time
  time = currtime
  console.log(deltime)
  
  
  cube.rotation.z += 0.002*deltime
  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}
*/






/*
With elapsedTime() function

*/
const clock = new THREE.Clock()

const tick = () => {

  const elapsedTime = clock.getElapsedTime()
  console.log(elapsedTime)
  
  cube.position.y = Math.sin(elapsedTime)
  cube.position.x = Math.cos(elapsedTime)

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

// tick() 
//20:00