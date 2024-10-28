import * as THREE from 'three'
import { OrbitControls} from 'three/addons/controls/OrbitControls.js'
import * as dat from 'dat.gui'


const gui = new dat.GUI()
const canvas = document.getElementById('id_canvas')

// scene
const scene = new THREE.Scene()

// mesh
const geometry = new THREE.BufferGeometry()

const vertices = new Float32Array(50*3*3)

for(let i = 0; i <= 5*3*3; i++)
{
  vertices[i] = Math.random()
}
// const vertices = new Float32Array([
//   0, 0, 0,
//   3, 0, 0,
//   1, 2, 0,
// ])
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
const material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true})
const mesh = new THREE.Mesh(geometry, material) 

// const mesh = new THREE.Mesh(
//   new THREE.BoxGeometry(1, 1, 1, 2, 2, 2),
//   new THREE.MeshBasicMaterial({color: 0xff0000, wireframe:true})
// )
scene.add(mesh)

// camera
const size = {
  width: window.innerWidth,
  height: window.innerHeight 
}
const camera = new THREE.PerspectiveCamera(50, size.width/size.height, 0.1, 100)
scene.add(camera)
camera.position.set(0, 0, 8)

// controls
const controls = new OrbitControls(camera, canvas)
// controls.enabled = false
controls.enableDamping = true


// renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas})
renderer.setSize(size.width, size.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// windows functions
window.addEventListener('resize', () => {
  size.width = window.innerWidth
  size.height = window.innerHeight
  camera.aspect = size.width/size.height
  camera.updateProjectionMatrix()
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(size.width, size.height)
})

window.addEventListener('dblclick', () => {
  !document.fullscreenElement? canvas.requestFullscreen() : document.exitFullscreen()
})



// debug
// syntax: gui.add(element, 'attr').twicks

// chain like
gui
  .addColor({ color: material.color.getHex() }, 'color')
  .onChange((value) => {
  material.color.set(value);
})


gui
  .add(mesh, 'visible')

gui
.add(material, 'wireframe')


gui
  .add(mesh.position, 'y')
  .min(-3)
  .max(3)
  .step(0.01)
  .name('elvation')

// simple one
gui.add(mesh.position, 'x', -5, 5, 0.1)
// grouped in a folder
const meshFolder = gui.addFolder('Mesh')
meshFolder.add(mesh.rotation, 'x', 0, Math.PI * 2)
meshFolder.add(mesh.rotation, 'y', 0, Math.PI * 2)
meshFolder.add(mesh.rotation, 'z', 0, Math.PI * 2)
meshFolder.open()
const cameraFolder = gui.addFolder('Camera')
cameraFolder.add(camera.position, 'z', 0, 10)
cameraFolder.open()




// animate
const animate = () => {
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(animate)
}

animate()