// Write your code here!
const mainNode = document.getElementById('main');
if (mainNode) {
    mainNode.remove(); 
} 
const newHeader = document.createElement('h1')
document.body.appendChild(newHeader);
newHeader.id = 'victory';
newHeader.textContent = 'Joy is the champion';