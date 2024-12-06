function openTab(evt, tabName) {
  // Hide all tab content
  var tabContent = document.querySelectorAll('.tab-content');
  tabContent.forEach(function(content) {
    content.classList.remove('active');
  });

  // Remove 'active' class from all tab buttons
  var tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(function(btn) {
    btn.classList.remove('active');
  });

  // Show the clicked tab and add 'active' class to the clicked button
  document.getElementById(tabName).classList.add('active');
  evt.currentTarget.classList.add('active');
}
