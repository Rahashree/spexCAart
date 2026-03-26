// Basic JS: camera preview, mock AI recommendations, simple UI hooks
document.getElementById('year').textContent = new Date().getFullYear();

let stream = null;
const cameraEl = document.getElementById('camera');
const startBtn = document.getElementById('startCam');
const stopBtn = document.getElementById('stopCam');
const angleRange = document.getElementById('angleRange');
const framePreview = document.getElementById('framePreview');

startBtn.addEventListener('click', async ()=>{
  try{
    stream = await navigator.mediaDevices.getUserMedia({video:{facingMode:'user'}, audio:false});
    cameraEl.srcObject = stream;
  }catch(e){alert('Camera access denied or not available.')}
});

stopBtn.addEventListener('click', ()=>{
  if(stream){
    stream.getTracks().forEach(t=>t.stop());
    cameraEl.srcObject = null;stream=null;
  }
});

angleRange.addEventListener('input', ()=>{
  const v = angleRange.value;
  // Simulate 180° view by skewing preview
  framePreview.style.transform = `rotateY(${v}deg)`;
});

// Mock recommendations
const recMap = {
  round: ['Rectangular frames', 'Angular styles', 'Wayfarer'],
  oval: ['Most shapes fit', 'Round & aviator', 'Browline'],
  square: ['Round frames', 'Oval frames', 'Soft edges'],
  heart: ['Cat-eye', 'Bottom-heavy frames', 'Round']
};

document.getElementById('getRecs').addEventListener('click', ()=>{
  const shape = document.getElementById('faceShape').value;
  const results = recMap[shape] || [];
  const out = document.getElementById('recResults');
  out.innerHTML = '<strong>Recommended styles:</strong><ul>' + results.map(r=>`<li>${r}</li>`).join('') + '</ul>';
});

// Simple forms: prevent actual submission (demo)
document.querySelectorAll('form').forEach(f=>f.addEventListener('submit', e=>{e.preventDefault();alert('Request received (demo). We will contact you.)');}));
