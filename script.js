
 const sidebarItems = document.querySelectorAll('.sidebar li');
 const contentSections = document.querySelectorAll('.content');

 function showContent(contentId) {
     contentSections.forEach(section => {
         if (section.id === contentId) {
             section.style.display = 'block';
         } else {
             section.style.display = 'none';
         }
     });
 }

sidebarItems.forEach(item => {
     item.addEventListener('click', () => {
         const contentId = item.getAttribute('data-content');
         showContent(contentId);
     });
 });
 showContent(content1)

const restaurants = [
    { name: "Hot Restaurant", items: ["Pizza", "Burger", "Pasta", "Biryani", "Ice cream", "Chicken Fried rice"], chefSpecial: "Grilled Salmon with Lemon Sauce"},
    { name: "Train Restaurant B", items: ["Salad", "pasta", "Mutton", "chicken Biryani", "Roll"], chefSpecial: "Lobster Risotto" },
    { name: "Star Bugs", items: ["Cofee","staters","coffe cup"], chefSpecial: "cofee" },
    { name: "Kfc", items: ["Burger", "Bucket chicken", "legpiece"], chefSpecial: "Bucket-chicken"}
  ];
  function searchRestaurants() {
    const searchInput = document.getElementById("search-bar").value.toLowerCase();
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = "";
  
    const matchingRestaurants = restaurants.filter(restaurant => {
      const matchingItems = restaurant.items.filter(item => item.toLowerCase().includes(searchInput));
      return matchingItems.length > 0;
    });
  
    if (matchingRestaurants.length > 0) {
      matchingRestaurants.forEach(restaurant => {
        const restaurantName = document.createElement("p");
        restaurantName.textContent = restaurant.name;
        resultContainer.appendChild(restaurantName);
      });
    } else {
      const noResultMessage = document.createElement("p");
      noResultMessage.textContent = "No restaurants found.";
      resultContainer.appendChild(noResultMessage);
    }
  }
  function displayChefSpecials() {
    const searchInput1 = document.getElementById("search-bar1").value.trim().toLowerCase();
    const chefSpecialsContainer = document.getElementById("chefSpecials-Container");
    chefSpecialsContainer.innerHTML = ""; //clears content after every search
  
    const filteredRestaurants = restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(searchInput1));
  
    if (filteredRestaurants.length > 0) {
      filteredRestaurants.forEach(restaurant => {
        const restaurantName = document.createElement("h2");
        restaurantName.textContent = restaurant.name;
  
        const chefSpecial = document.createElement("p");
        chefSpecial.textContent = `Chef Special: ${restaurant.chefSpecial}`;
  
        chefSpecialsContainer.appendChild(restaurantName);
        chefSpecialsContainer.appendChild(chefSpecial);
      });
    } else {
      const noResultMessage = document.createElement("p");
      noResultMessage.textContent = "No restaurants found.";
      chefSpecialsContainer.appendChild(noResultMessage);
    }
  }
  document.getElementById("adForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const audioFile = document.getElementById("audioAd").files[0];
    const videoFile = document.getElementById("videoAd").files[0];
  
    if (audioFile && videoFile) {
      displayStatus("Files uploaded successfully.");
    } else {
      displayStatus("Please select both audio and video ads.");
    }
  });
  
  function displayStatus(message) {
    const adStatus = document.getElementById("adStatus");
    adStatus.textContent=message;
}
let draggedElement = null;

document.addEventListener("dragstart", function(event) {
  draggedElement = event.target.closest(".icon");
  event.dataTransfer.setData("text/plain", null);
});

document.addEventListener("dragover", function(event) {
  event.preventDefault();
});

document.addEventListener("drop", function(event) {
  event.preventDefault();

  if (draggedElement) {
    const dropTarget = event.target.closest(".icon");

    if (dropTarget && draggedElement !== dropTarget) {
      const container = draggedElement.parentElement;
      const dropIndex = Array.from(container.children).indexOf(dropTarget);
      const draggedIndex = Array.from(container.children).indexOf(draggedElement);

      if (draggedIndex < dropIndex) {
        container.insertBefore(draggedElement, dropTarget.nextSibling);
      } else {
        container.insertBefore(draggedElement, dropTarget);
      }
    }
    console.log(restaurants);

    draggedElement = null;
  }
});
