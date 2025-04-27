const form = document.getElementById('resumeForm');
const resumeDiv = document.getElementById('resume');
const downloadBtn = document.getElementById('downloadBtn');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const skills = document.getElementById('skills').value.split(',');
  const experience = document.getElementById('experience').value;
  const education = document.getElementById('education').value;

  
  resumeDiv.innerHTML = `
    <h1>${name}</h1>
    <hr>
    <p><strong>Address:</strong> ${address}</p>
  
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
     <hr>
    <h2>Skills</h2>
    <ul>
      ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
    </ul>
    <hr>
    <h2>Experience</h2>
    <p>${experience}</p>
    <hr>
    <h2>Education</h2>
    <p>${education}</p>
  `;

  
  resumeDiv.style.display = 'block';
  downloadBtn.style.display = 'inline-block';
});


downloadBtn.addEventListener('click', function() {
  const element = document.getElementById('resume');

  
  html2pdf()
    .from(element)
    .set({
      margin: 0.5,
      filename: 'Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    })
    .save();
});
