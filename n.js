function generateResume() {
    const fullName = document.getElementById('fullName').value;
    const location = document.getElementById('location').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const linkedin = document.getElementById('linkedin').value;
    const headline = document.getElementById('headline').value;
    const summary = document.getElementById('summary').value;
    const strengths = document.getElementById('strengths').value.split(',');
    const experience = document.getElementById('experience').value;
  
    const resumeHTML = `
      <div class="resume-content">
        <h1>${fullName}</h1>
        <p>${location} | ${phone} | ${email} | ${linkedin}</p>
  
        <div class="headline">${headline}</div>
  
        <div class="section-title">Professional Summary</div>
        <p>${summary}</p>
  
        <div class="section-title">Key Strengths</div>
        <div class="strengths-box">
          <ul>
            ${strengths.map(strength => `<li>${strength.trim()}</li>`).join('')}
          </ul>
        </div>
  
        <div class="section-title">Professional Highlights</div>
        <p>${experience}</p>
      </div>
    `;
  
    document.getElementById('resume').innerHTML = resumeHTML;
  }
  
  function downloadPDF() {
    const opt = {
      margin:       0.5,
      filename:     'resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
  
    html2pdf().from(document.getElementById('resume')).set(opt).save();
  }
  