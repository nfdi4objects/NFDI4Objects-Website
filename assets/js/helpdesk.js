// Helpdesk Form Submission Logic
const token = window.ENV.MY_SECRET_TOKEN;
const confirm = {
  "de": ["Support Ticket mit Nummer #", " wurde erfolgreich angelegt!"],
  "en": ["Support Ticket with number #", " has been created successfully!"]
};
const error = {
  "de": ["Support Ticket konnte nicht angelegt werden!"],
  "en": ["Support Ticket could not be created!"]
};

// Get the current language from the HTML lang attribute
const hlang = document.documentElement.lang || "de";

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("helpdeskform");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    sendHelpdeskFormContents();
  });
});

function sendHelpdeskFormContents() {
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const gname = document.getElementById("gname").value;
  const subject = document.getElementById("subject").value;
  const question_category = document.getElementById("qcat").value;
  const message = document.getElementById("message").value;
  const dialog = document.getElementById("sentdialog");
  const dialogMessage = document.getElementById("dialogmessage");

  // Simple client-side validation
  if (!email || !subject || !message) {
    dialogMessage.textContent = error[hlang][0];
    dialog.showModal();
    return;
  }

  $.ajax({
    type: "POST",
    dataType: "json",
    url: "https://ticket.nfdi4objects.net/api/v1/tickets",
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", "Bearer " + token);
    },
    data: {
      title: subject,
      group: "Users",
      customer_id: "guess:" + email,
      article: {
        from: email,
        subject: subject,
        body: message,
        sender: "Customer",
        type: "email",
        internal: false
      },
      tags: question_category
    },
    success: function(result) {
      document.getElementById("helpdeskform").reset();
      dialogMessage.innerHTML = confirm[hlang][0] + result.number + confirm[hlang][1];
      dialog.showModal();
    },
    error: function(xhr) {
      dialogMessage.innerHTML = error[hlang][0] + "<br>" + xhr.status + ": " + xhr.statusText;
      dialog.showModal();
    }
  });
}

// Close modal when clicking the backdrop
document.getElementById("sentdialog").addEventListener("click", function(e) {
  if (e.target === this) {
    this.close();
  }
});
