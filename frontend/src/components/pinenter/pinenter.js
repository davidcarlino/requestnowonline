window.onload = () => {
    const submitButton = document.getElementById("submit_email");
    const emailInput = document.getElementById("email_address")
    submitButton.addEventListener("click", handleAuth);
    /** This function submits the request to the server for sending the user a magic link.
     * Params: email address
     * Returns: message
     */
    async function handleAuth() {
      const message = await axios.post("http://localhost:3000/pin-verify", {
        email: emailInput.value
      });
      return message;
    }
  };