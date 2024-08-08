function setReminder() {
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;
    const activity = document.getElementById('activity').value;

    if (time === "") {
        document.getElementById('message').textContent = "Please select a time.";
        return;
    }

    const reminderTime = new Date();
    const currentDate = new Date();

    reminderTime.setHours(time.split(':')[0]);
    reminderTime.setMinutes(time.split(':')[1]);
    reminderTime.setSeconds(0);

    const timeDifference = reminderTime.getTime() - currentDate.getTime();

    if (timeDifference <= 0) {
        document.getElementById('message').textContent = "Please select a future time.";
        return;
    }

    document.getElementById('message').textContent = `Reminder set for ${day} at ${time} to ${activity}.`;

    setTimeout(() => {
        alert(`It's time to ${activity}!`);
    }, timeDifference);
}
