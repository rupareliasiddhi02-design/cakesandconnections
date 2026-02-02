function submitOrder(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const item = document.getElementById("item").value;
  const quantity = document.getElementById("quantity").value;
  const notes = document.getElementById("notes").value.trim();

  if (!name || !item || quantity <= 0) {
    alert("Please fill all required fields correctly.");
    return;
  }

  const confirmation = `
    <div class="card p-3 shadow-sm">
      <h5 class="text-success">Order Request Submitted ✔</h5>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Product:</strong> ${item}</p>
      <p><strong>Quantity:</strong> ${quantity}</p>
      <p><strong>Notes:</strong> ${notes || "None"}</p>
      <p class="mt-2 text-muted">
        Please DM us on Instagram to confirm pricing & delivery.
      </p>
    </div>
  `;

  document.getElementById("orderResult").innerHTML = confirmation;

  console.log("Order Request:", { name, item, quantity, notes });
}
function toggleMenu(menuId) {
  const menu = document.getElementById(menuId);

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
