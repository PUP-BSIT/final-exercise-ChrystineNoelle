const customerQueue = [];

function addToQueue() {
    const nameInput = document.getElementById("name");
    const priorityInput = document.getElementById("priority");

    const name = nameInput.value.trim();
    const priority = parseInt(priorityInput.value);

    if (name && !isNaN(priority)) {
        const customer = { name, priority };
        customerQueue.push(customer);

        nameInput.value = "";
        priorityInput.value = "";

        console.log("Customer added to the queue:", customerQueue);
    } else {
        alert("Please enter valid name and priority.");
    }
}

function processCustomer() {
    if (customerQueue.length > 0) {
        const highestPriorityCustomer = customerQueue.reduce((prev, current) =>
            prev.priority > current.priority ? prev : current
        );

        const queueInfo = document.getElementById("queue_info");
        const processingInfo = document.createElement("div");
        processingInfo.classList.add("processing-info");
        processingInfo.textContent = "Processing Customer";

        const processingName = document.createElement("div");
        processingName.classList.add("processing-name");
        processingName.textContent = highestPriorityCustomer.name;

        const processingPriority = document.createElement("div");
        processingPriority.classList.add("processing-priority");
        processingPriority.textContent = `(
            Priority: ${highestPriorityCustomer.priority}
        )`;

        queueInfo.innerHTML = ''; 
        queueInfo.appendChild(processingInfo);
        queueInfo.appendChild(processingName);
        queueInfo.appendChild(processingPriority);

        const index = customerQueue.indexOf(highestPriorityCustomer);
        customerQueue.splice(index, 1);

        console.log("Customer processed. Updated queue:", customerQueue);
    } else {
        alert("The queue is empty. No customer to process.");
    }
}