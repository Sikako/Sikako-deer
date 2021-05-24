let container
let camera
let renderer
let scene
let house

function init() {
  container = document.querySelector('.scene')

  scene = new THREE.Scene()

  const fov = 35;
  const aspect = container.clientWidth / container.clientHeight
  const near = 0.1
  const far = 600

  camera = new THREE.PerspectiveCamera(fov, aspect, near, far)

  camera.position.set(0,-10, 500)


  const ambient = new THREE.AmbientLight(0xffffff,1)
  scene.add(ambient)


  const light = new THREE.DirectionalLight(0x1f0f05, 15)
  light.position.set(10,10,10);
  scene.add(light)


  renderer = new THREE.WebGLRenderer({antialias:true, alpha:true})
  renderer.setSize(container.clientWidth, container.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)

  container.appendChild(renderer.domElement)

  //Load Model
  let loader = new THREE.GLTFLoader()
  loader.load('./sikaDeer.glb', function(gltf) {
    scene.add(gltf.scene)
    deer = gltf.scene.children[0]
    renderer.render(scene, camera)
    animate()
  })
}


function animate() {
  requestAnimationFrame(animate)
  deer.rotation.z += 0.005
  renderer.render(scene, camera)
}

init()
