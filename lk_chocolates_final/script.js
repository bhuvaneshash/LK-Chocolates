function submitContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value || 'Friend';
  alert('Thanks, ' + name + '! This is a demo contact form. Implement server-side handling to receive messages.');
  document.getElementById('contact-form').reset();
}
