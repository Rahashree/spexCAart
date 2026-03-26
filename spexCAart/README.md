# spexCart — demo website

This is a responsive, static demo site for the spexCart eyewear experience. It showcases:

- 3D Virtual Try-On (camera preview demo; replace with DITTO SDK for production)
- AI-powered frame recommendations (mock face-shape quiz)
- Try Frames @ Home booking form (demo)
- Digital prescription upload UI (demo)
- Membership and product highlights

How to run

Open `index.html` in your browser. For camera access, serve via a local server (required by some browsers):

Windows (PowerShell):

```powershell
cd e:\spexCAart
python -m http.server 8000
# then open http://localhost:8000
```

Notes & next steps

- Integrate the DITTO or vendor SDK for real 3D try-on and face tracking.
- Replace the mock AI recommendations with a face-shape analyzer or a server-side ML API.
- Hook booking and prescription forms to backend endpoints for persistence.
