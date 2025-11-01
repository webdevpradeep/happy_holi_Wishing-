let holiButton = document.getElementById('holi-button');
let holiMessage = document.getElementById('holi-message');
let holiWishes = document.getElementById('holi-wishes');
let holiColors = document.getElementById('holi-colors');
holiButton.addEventListener('click', celebrateHoli);
function celebrateHoli() {
  holiMessage.textContent = 'Happy Holi!';
  holiButton.style.display = 'none';
  //  Create wishes
  let wishes = [
    'May this Holi bring colors of joy and happiness to your life!',
    'Wishing you a Holi filled with love,  laughter, and colors!',
    'May this Holi be a celebration of love, friendship,and togetherness!',
  ];

  for (let i = 0; i < wishes.length; i++) {
    let wish = document.createElement('p');
    wish.className = 'wish';
    wish.textContent = wishes[i];
    holiWishes.appendChild(wish);
  }
  // Create colors
  let colors = ['red', 'green', 'blue', 'yellow'];
  for (let i = 0; i < colors.length; i++) {
    let color = document.createElement('div');
    color.className = 'color ' + colors[i];
    holiColors.appendChild(color);
  }
}
