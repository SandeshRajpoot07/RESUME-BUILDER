document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    document.getElementById('rFullName').innerText = document.getElementById('fullName').value;
    document.getElementById('rJobTitle').innerText = document.getElementById('jobTitle').value;
    document.getElementById('rPhone').innerText = "Phone: " + document.getElementById('phone').value;
    document.getElementById('rEmail').innerText = "Email: " + document.getElementById('email').value;
  
    const linkedinUrl = document.getElementById('linkedin').value;
    document.getElementById('rLinkedin').href = linkedinUrl;
    document.getElementById('rLinkedin').innerText = "LinkedIn";
  
    document.getElementById('rObjective').innerText = document.getElementById('objective').value;
    document.getElementById('rEducation').innerText = document.getElementById('education').value;
    document.getElementById('rExperience').innerText = document.getElementById('experience').value;
  
    // Fill skills list
    const skills = document.getElementById('skills').value.split(',');
    const skillsList = document.getElementById('rSkills');
    skillsList.innerHTML = "";
    skills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill.trim();
      skillsList.appendChild(li);
    });
  
    // Fill languages list
    const languages = document.getElementById('languages').value.split(',');
    const languagesList = document.getElementById('rLanguages');
    languagesList.innerHTML = "";
    languages.forEach(lang => {
      const li = document.createElement('li');
      li.textContent = lang.trim();
      languagesList.appendChild(li);
    });
  
    document.getElementById('resumeContainer').style.display = 'block';
    document.getElementById('resumeContainer').scrollIntoView({behavior: 'smooth'});
  });
  
  // PDF DOWNLOAD
  document.getElementById('downloadPDF').addEventListener('click', function() {
    const element = document.getElementById('resumeContainer');
    const opt = {
      margin: 0,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  });
  