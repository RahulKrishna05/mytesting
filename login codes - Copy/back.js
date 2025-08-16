 window.onload = function () {
        document.getElementById("google").addEventListener("click", function () {
            google.accounts.oauth2.initCodeClient({
                client_id: "130297145188-ncu5njruj3bkf8mnj70arh9tv66idsto.apps.googleusercontent.com",
                scope: "openid email profile",
                ux_mode: "popup",
                callback: (response) => {
                    if (response.code) {
                        // Save the auth code in localStorage (for backend exchange)
                        localStorage.setItem("google_id_token", response.code);
                        // Redirect to profile page
                        window.location.href = "profile.html";
                    } else {
                        alert("❌ Login Failed!");
                    }
                }
            }).requestCode();
        });
      }