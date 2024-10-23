const images = document.querySelectorAll('.gallery-img');
let currentImageIndex = 0;

function openModal(index) {
    currentImageIndex = index;
    const imageSrc = images[index].src;
    document.getElementById('modalImage').src = imageSrc;
    $('#imageModal').modal('show');
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    document.getElementById('modalImage').src = images[currentImageIndex].src;
}
const icon = document.getElementsByClassName("icons");

// Function to handle double-click event
function iconDoubleClick() {
for (let i = 0; i < icon.length; i++) {
icon[i].ondblclick = function (event) {
// Set both fill and stroke to transparent on double-click
event.target.style.fill = "E5E4E2";
event.target.style.stroke = "yellow";
};
}
}

// Loop through each icon and assign click and double-click events
for (let i = 0; i < icon.length; i++) {
icon[i].onclick = (e) => {
// Change fill and stroke on click
e.target.style.fill = "#E5E4E2";
e.target.style.stroke = "yellow";
};
// Call the function to assign the double-click event
iconDoubleClick();
}


let db;
const request = indexedDB.open("favoritesDB", 1);

request.onupgradeneeded = function(event) {
db = event.target.result;
const objectStore = db.createObjectStore("images", { keyPath: "id" });
};

request.onsuccess = function(event) {
db = event.target.result;
};

// وظيفة لتخزين الصورة في IndexedDB
function storeImage(id, imgUrl) {
const transaction = db.transaction(["images"], "readwrite");
const objectStore = transaction.objectStore("images");
const imageData = { id, imgUrl };

const request = objectStore.put(imageData);
request.onsuccess = function() {
console.log("Image stored successfully.");
};
request.onerror = function() {
console.log("Error storing image:", request.error);
};
}

// وظيفة لتغيير لون النجمة وتخزين رابط الصورة
const icons = document.getElementsByClassName("icons");

for (let i = 0; i < icons.length; i++) {
icons[i].onclick = function(e) {
const imgElement = e.target.closest("div").querySelector("img");
const imgUrl = imgElement.src;
const id = imgElement.alt; // استخدام نص الـ alt كـ id

// تغيير لون النجمة إلى الأصفر
e.target.style.fill = "yellow";

// تخزين الصورة في IndexedDB
storeImage(id, imgUrl);
};
}