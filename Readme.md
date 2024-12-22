
<div align="center">

  <h1 style="font-size: 3rem; color: #4caf50; font-family: 'Poppins', sans-serif;">
    Hey there, I'm <span id="name">Sheharyar Zahid</span> 👋
  </h1>

  <p style="font-size: 1.5rem; color: #9c27b0; font-family: 'Poppins', sans-serif;">
    🚀 Developer | 💡 Innovator | 🎨 Creator
  </p>

  <div style="display: flex; justify-content: center; gap: 10px; margin-top: 20px;">
    <img src="https://media.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif" width="120" height="120" alt="Coding">
    <img src="https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif" width="120" height="120" alt="Innovation">
    <img src="https://media.giphy.com/media/l3vR2dZSvG8Ncyl4c/giphy.gif" width="120" height="120" alt="Creativity">
  </div>

</div>

<hr style="border: 1px solid #e91e63; margin: 20px 0;">

<div align="center" style="font-family: 'Poppins', sans-serif;">
  <h2>About Me</h2>
  <p>
    I'm a full-stack developer passionate about solving real-world problems using modern technology.
    My expertise lies in building scalable web applications with an eye for design and efficiency.
  </p>

  <h3>🔧 Technologies & Tools</h3>
  <p>
    <b>Languages:</b> JavaScript, Python, C#, C++ <br>
    <b>Frameworks:</b> MERN, ASP.NET Core, Odoo <br>
    <b>Tools:</b> Git, Docker, VS Code
  </p>

  <h3>🌟 Featured Projects</h3>
  <ul style="list-style: none; padding: 0;">
    <li><a href="https://github.com/username/project1" style="color: #4caf50;">✨ My E-commerce Store</a></li>
    <li><a href="https://github.com/username/project2" style="color: #4caf50;">💼 Odoo Customization Module</a></li>
  </ul>

  <h3>📬 Get in Touch</h3>
  <p>
    <b>Email:</b> <a href="mailto:your.email@example.com" style="color: #2196f3;">sheharyarxd@gmail.com</a><br>
    <b>Portfolio:</b> <a href="https://your-portfolio.com" style="color: #2196f3;">https://sheharyarz.netlify.app/</a>
  </p>
</div>

<!-- GSAP Animation Script -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script>
  // GSAP animation for the name
  gsap.from("#name", {
    duration: 2,
    opacity: 0,
    scale: 0.5,
    ease: "bounce.out"
  });

  // Animate GIFs
  gsap.from("img", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    ease: "power3.out"
  });
</script>
