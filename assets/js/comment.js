// Comment  Form Submission Logic

document.addEventCommentListener("DOMContentLoaded", function() {
  const form = document.getElementById("helpdeskform");
  form.addEventCommentListener("submit", function(event) {
    event.preventDefault();
    sendHelpdeskFormContents();
  });
});

function sendCommentFormContents() {
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const gname = document.getElementById("gname").value;
  const subject = document.getElementById("subject").value;
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
      tags: "comment"
    },
    success: function(result) {
      document.getElementById("commentform").reset();
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
document.getElementById("sentdialog").addEventCommentListener("click", function(e) {
  if (e.target === this) {
    this.close();
  }
});
