document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const fullName = document.getElementById('fullName').value;
    document.getElementById('rFullName').innerText = fullName;
  
    const initials = fullName.split(' ').map(word => word.charAt(0)).join('').toUpperCase();
    document.getElementById('profileInitials').innerText = initials;
  
    document.getElementById('rJobTitle').innerText = document.getElementById('jobTitle').value;
    document.getElementById('rSummary').innerText = document.getElementById('summary').value;
  
    document.getElementById('rPhone').innerText = document.getElementById('phone').value;
    document.getElementById('rEmail').innerText = document.getElementById('email').value;
    document.getElementById('rLinkedin').innerText = document.getElementById('linkedin').value;
    document.getElementById('rLocation').innerText = document.getElementById('location').value;
  
    const skillsList = document.getElementById('skills').value.split(',');
    const skillsContainer = document.getElementById('rSkills');
    skillsContainer.innerHTML = "";
    skillsList.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill.trim();
      skillsContainer.appendChild(li);
    });
  
    document.getElementById('resumeContainer').style.display = 'flex';
    document.getElementById('resumeContainer').scrollIntoView({ behavior: 'smooth' });
  });
  
  document.getElementById('downloadPDF').addEventListener('click', function() {
    const element = document.getElementById('resumeContainer');
    const opt = {
      margin: 0,
      filename: 'Mid_Level_Management_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  });
  