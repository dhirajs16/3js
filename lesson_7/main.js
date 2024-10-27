import * as THREE from 'three'
import { OrbitControls} from 'three/addons/controls/OrbitControls.js'

const canvas = document.getElementById('id_canvas')

// scene
const scene = new THREE.Scene()

// mesh
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 2, 2, 2),
  new THREE.MeshBasicMaterial({color: 0xff0000, wireframe:true})
)
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
controls.enableDamping = true

// renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas})
renderer.setSize(size.width, size.height)

// animate
const animate = () => {
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(animate)
}

animate()