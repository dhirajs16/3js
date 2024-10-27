import * as THREE from 'three'
import { OrbitControls} from 'three/addons/controls/OrbitControls.js'

const canvas = document.getElementById('id_canvas')

// scene
const scene = new THREE.Scene()

// mesh
const geometry = new THREE.BufferGeometry()

const vertices = new Float32Array(50*3*3)

for(let i = 0; i <= 50*3*3; i++)
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

// animate
const animate = () => {
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(animate)
}

animate()